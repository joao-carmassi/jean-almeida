import type { APIRoute } from 'astro';
import { author } from '@/data/author';
import { getPosts } from '@/utils/posts';
import { getCanonicalUrl, getEmail, getZapNumber } from '@/utils/env';

// As páginas de tratamento definem título e descrição localmente; aqui basta
// o resumo que orienta um agente até a página certa.
const treatments = [
  ['ansiedade', 'Tratamento para Ansiedade', 'ansiedade generalizada, crises de ansiedade e pânico'],
  ['depressao', 'Tratamento para Depressão', 'diagnóstico e acompanhamento da depressão'],
  ['tdah', 'TDAH em Adultos', 'avaliação diagnóstica e tratamento do TDAH na vida adulta'],
  ['burnout', 'Tratamento para Burnout', 'esgotamento físico e mental relacionado ao trabalho'],
  ['consulta-online', 'Psiquiatra Online', 'consulta psiquiátrica por telemedicina, com receita digital'],
];

/** Gerado no build a partir dos posts, para nunca ficar desatualizado. */
export const GET: APIRoute = () => {
  const posts = getPosts()
    .map((post) => `- [${post.title}](${getCanonicalUrl(post.href)}): ${post.description}`)
    .join('\n');

  const body = `# Dr. Jean Almeida — Psiquiatra em São Paulo

> ${author.name}, ${author.jobTitle.toLowerCase()} (${author.crm}, CREMESP), atende adultos em consultório na Av. Paulista, 2494 — Conjunto 94, Bela Vista, São Paulo (SP), e por telemedicina. Acompanha depressão, ansiedade, TDAH em adultos, burnout, transtorno bipolar, borderline, insônia e TOC.

O conteúdo deste site é informativo e não substitui avaliação médica individual. Em crise ou risco imediato, ligue 188 (CVV) ou 192 (SAMU).

- Atendimento: segunda a sexta, das 9h às 19h, presencial ou online
- Agendamento: WhatsApp https://wa.me/${getZapNumber()} · e-mail ${getEmail()}
- Idiomas: português e espanhol
- Perfis: ${author.profiles.map((profile) => `[${profile.name}](${profile.url})`).join(', ')}

## Principais páginas

- [Página inicial](${getCanonicalUrl('/')}): apresentação do Dr. Jean Almeida, abordagem, consultório, perguntas frequentes e contato

## Tratamentos

${treatments
  .map(([slug, title, summary]) => `- [${title}](${getCanonicalUrl(`/tratamentos/${slug}`)}): ${summary}`)
  .join('\n')}

## Blog

- [Blog](${getCanonicalUrl('/blog')}): artigos sobre saúde mental e psiquiatria
${posts}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
