export interface PostFrontmatter {
  title: string;
  description: string;
  label: string;
  publishDate: string;
  slug: string;
  keywords?: string[];
  updatedDate?: string;
}

interface PostModule {
  url: string;
  frontmatter: PostFrontmatter;
}

export interface Post {
  title: string;
  description: string;
  label: string;
  publishDate: string;
  /** Caminho servido, sempre com barra final (`trailingSlash: 'always'`). */
  href: string;
  keywords: string[];
}

// O glob roda a partir da raiz do projeto, e não do diretório deste arquivo:
// um caminho relativo aqui apontaria para `src/utils/blog/*.mdx`.
const modules = import.meta.glob<PostModule>('/src/pages/blog/*.mdx', {
  eager: true,
});

/** Normaliza qualquer caminho de post para a forma servida `/blog/slug/`. */
const toHref = (path: string) =>
  `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}/`;

/** Compara keywords sem depender de acentuação ou caixa. */
const normalizeKeyword = (keyword: string) =>
  keyword
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();

let cachedPosts: Post[] | null = null;

/**
 * A leitura do frontmatter é adiada até a renderização de propósito.
 *
 * O post que está sendo renderizado importa o layout, que importa este módulo,
 * que reimporta o próprio post pelo glob. Lido no topo do arquivo, o
 * `frontmatter` desse post ainda estaria indefinido — o módulo dele não
 * terminou de avaliar. Na renderização o ciclo já se fechou.
 */
export const getPosts = (): Post[] => {
  cachedPosts ??= Object.values(modules).map((module) => {
    const { frontmatter } = module;
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      label: frontmatter.label,
      publishDate: frontmatter.publishDate,
      href: toHref(frontmatter.slug ?? module.url),
      keywords: frontmatter.keywords ?? [],
    };
  });
  return cachedPosts;
};

/**
 * Ordena os demais posts por proximidade com `post`: sobreposição de keywords,
 * depois mesmo `label`, depois data de publicação. O desempate final pelo
 * título mantém a saída estável — hoje todos os posts dividem label e data.
 */
const rank = (post: Post): Post[] => {
  const keywords = new Set(post.keywords.map(normalizeKeyword));

  return getPosts()
    .filter((candidate) => candidate.href !== post.href)
    .map((candidate) => ({
      candidate,
      overlap: candidate.keywords.filter((keyword) =>
        keywords.has(normalizeKeyword(keyword)),
      ).length,
      sameLabel: Number(candidate.label === post.label),
    }))
    .sort(
      (a, b) =>
        b.overlap - a.overlap ||
        b.sameLabel - a.sameLabel ||
        b.candidate.publishDate.localeCompare(a.candidate.publishDate) ||
        a.candidate.title.localeCompare(b.candidate.title, 'pt-BR'),
    )
    .map((entry) => entry.candidate);
};

/** Cada post precisa ser alcançável por páginas que não sejam o índice do blog. */
const MIN_INBOUND_LINKS = 2;

/**
 * Monta o mapa de relacionados de todos os posts de uma vez.
 *
 * O ranking puro concentra os links em poucos hubs e deixa alguns posts sem
 * nenhum link interno de entrada. Depois de escolher os melhores candidatos,
 * uma segunda passada realoca posts órfãos para o artigo mais próximo que
 * ainda pode ceder uma vaga sem criar um novo órfão.
 */
const buildRelatedMap = (limit: number) => {
  const posts = getPosts();
  const related = new Map(posts.map((post) => [post.href, rank(post)]));
  const selected = new Map(
    posts.map((post) => [post.href, related.get(post.href)!.slice(0, limit)]),
  );

  const inbound = new Map(posts.map((post) => [post.href, 0]));
  for (const list of selected.values()) {
    for (const post of list) {
      inbound.set(post.href, inbound.get(post.href)! + 1);
    }
  }

  const ordered = [...posts].sort((a, b) => a.href.localeCompare(b.href));
  for (const orphan of ordered) {
    while (inbound.get(orphan.href)! < MIN_INBOUND_LINKS) {
      const host = related.get(orphan.href)!.find((candidate) => {
        const list = selected.get(candidate.href)!;
        if (list.some((post) => post.href === orphan.href)) return false;
        const dropped = list.at(-1);
        return !!dropped && inbound.get(dropped.href)! > MIN_INBOUND_LINKS;
      });
      if (!host) break;

      const list = selected.get(host.href)!;
      const dropped = list.pop()!;
      inbound.set(dropped.href, inbound.get(dropped.href)! - 1);
      list.push(orphan);
      inbound.set(orphan.href, inbound.get(orphan.href)! + 1);
    }
  }

  return selected;
};

const relatedMapCache = new Map<number, Map<string, Post[]>>();

/**
 * Posts mais próximos do atual. Nunca devolve lista vazia: sem sobreposição de
 * keywords o ranking cai para os posts mais recentes.
 */
export const getRelatedPosts = (currentSlug: string, limit = 3): Post[] => {
  let map = relatedMapCache.get(limit);
  if (!map) {
    map = buildRelatedMap(limit);
    relatedMapCache.set(limit, map);
  }

  const currentHref = toHref(currentSlug);
  return (
    map.get(currentHref) ??
    getPosts()
      .filter((post) => post.href !== currentHref)
      .slice(0, limit)
  );
};

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // As datas do frontmatter são `YYYY-MM-DD`, lidas como meia-noite UTC.
  // Formatar no fuso local devolveria o dia anterior no Brasil (UTC-3).
  timeZone: 'UTC',
});

export const formatPostDate = (date: string) =>
  dateFormatter.format(new Date(date));
