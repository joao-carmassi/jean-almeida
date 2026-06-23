import { ArrowRight, Star } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { OptimizedPicture } from '@/utils/get-picture-image';
import { Picture } from './ui/picture';
import getZapLink from '@/utils/get-zap-link';

const HeroSection = ({ images }: { images: OptimizedPicture[] }) => {
  const reviews = {
    count: 55,
    rating: 5.0,
    avatars: [
      {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar1.jpg',
        alt: 'Paciente',
      },
      {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar2.jpg',
        alt: 'Paciente',
      },
      {
        src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg',
        alt: 'Paciente',
      },
    ],
  };

  return (
    <section className='min-h-svh py-12 grid place-items-center'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center flex-col-reverse lg:flex-row gap-10 lg:grid-cols-2 lg:gap-20'>
          <div className='pattern-dots-md text-foreground rounded-4xl'>
            <Picture
              loading='eager'
              src={images[0]}
              alt='Dr. Jean Almeida — Psiquiatra em São Paulo, Av. Paulista'
              className='rounded-4xl object-cover md:translate-x-8 md:translate-y-8 shadow-lg aspect-square'
            />
          </div>
          <div className='mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:mr-auto lg:order-2 lg:items-start lg:text-left'>
            <h1 className='max-w-xl text-4xl font-bold tracking-tight text-pretty lg:max-w-3xl lg:text-6xl font-handwriting'>
              Psiquiatra em São Paulo com Escuta Profunda e Tratamento
              Individualizado
            </h1>
            <p className='max-w-5xl text-balance text-muted-foreground lg:text-xl'>
              Nem todo sofrimento aparece por fora. Ansiedade, exaustão, vazio
              emocional, insônia, relações difíceis — às vezes a vida continua
              funcionando enquanto você já não consegue mais descansar dentro
              dela. Dr. Jean Almeida · Psiquiatra na Av. Paulista, São Paulo.
            </p>
            {reviews && (
              <div className='flex w-fit flex-col items-center gap-4 sm:flex-row'>
                <span className='inline-flex items-center -space-x-3'>
                  {reviews.avatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      className='size-10 bg-background ring-2 ring-background after:hidden'
                    >
                      <AvatarImage src={avatar.src} alt={avatar.alt} />
                    </Avatar>
                  ))}
                </span>
                <div>
                  <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className='size-5 fill-none stroke-amber-500 dark:stroke-amber-400'
                      />
                    ))}
                    <span className='ml-1 font-semibold text-foreground'>
                      {reviews.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className='text-left font-medium text-muted-foreground'>
                    {reviews.count} avaliações de pacientes
                  </p>
                </div>
              </div>
            )}
            <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
              <Button asChild size='lg' className='w-full sm:w-auto'>
                <a
                  href={getZapLink('Olá, gostaria de agendar uma consulta.')}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Agendar Minha Consulta
                  <ArrowRight className='size-4' />
                </a>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='w-full bg-background sm:w-auto dark:bg-background'
              >
                <a href='#sobre'>Saiba Mais ↓</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
