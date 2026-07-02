import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export interface IPost {
  title: string;
  label: string;
  description: string;
  url: string;
  publishDate?: string;
  slug?: string;
  keywords?: string[];
}

const BlogPostsSection = ({ posts = [] }: { posts?: IPost[] }) => {
  return (
    <section className='py-28 lg:py-12'>
      <div className='container mx-auto lg:pt-18'>
        <div className='mx-auto flex flex-col items-center gap-6'>
          <Badge>badge</Badge>
          <h1 className='font-bold text-4xl xl:text-5xl max-w-5xl'>Titulo</h1>
          <p className='mb-8 md:mb-14 max-w-2xl text-lg font-normal text-muted-foreground md:text-xl text-center'>
            Paragrafo
          </p>
        </div>

        <div className='mx-auto space-y-12'>
          {posts.map((post, i) => (
            <Card
              key={i}
              className='overflow-hidden border-0 px-4 bg-white shadow-lg inset-shadow-2xs'
            >
              <div className='flex flex-col gap-6 sm:flex-row'>
                <div className='flex-1 space-y-3'>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                    <Badge>{post.label}</Badge>
                  </div>
                  <h2 className='text-xl lg:text-2xl font-bold'>
                    <a href={post.url} className='hover:underline'>
                      {post.title}
                    </a>
                  </h2>
                  <p className='text-lg font-normal text-muted-foreground line-clamp-2'>
                    {post.description}
                  </p>
                  <a
                    href={post.url}
                    target='_blank'
                    className='inline-flex items-center text-primary hover:underline'
                  >
                    Ler mais
                    <ArrowRight className='ml-2 size-4' />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BlogPostsSection };
