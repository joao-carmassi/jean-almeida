'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { cn } from '@/lib/utils';
import type { OptimizedPicture } from '@/utils/get-picture-image';
import { Picture } from './ui/picture';

const ServicesSection = ({ images }: { images: OptimizedPicture[] }) => {
  const items = [
    {
      id: 'depressao',
      title: 'Depressão',
      description:
        'Muitas pessoas continuam trabalhando, cumprindo compromissos e convivendo normalmente enquanto se sentem emocionalmente esgotadas por dentro. A depressão nem sempre paralisa — às vezes, ela só apaga.',
      href: '#contato',
      image: images[0],
    },
    {
      id: 'ansiedade',
      title: 'Ansiedade e Ruminação',
      description:
        'Pensamento acelerado, dificuldade de desligar, exigência interna excessiva, sensação de alerta permanente. A ansiedade de alta performance é real — e frequentemente invisível para quem está de fora.',
      href: '#contato',
      image: images[1],
    },
    {
      id: 'tdah',
      title: 'TDAH em Adultos',
      description:
        'Dificuldade de sustentar foco, procrastinação crônica, impulsividade e sensação de estar sempre um passo atrás — o TDAH em adultos é subdiagnosticado e frequentemente confundido com falta de disciplina.',
      href: '#contato',
      image: images[2],
    },
    {
      id: 'burnout',
      title: 'Esgotamento e Burnout',
      description:
        'Exaustão que o descanso não resolve, desconexão do próprio trabalho, irritabilidade crescente, perda de sentido — o esgotamento profissional vai além do cansaço. Não é falta de força de vontade.',
      href: '#contato',
      image: images[3],
    },
    {
      id: 'humor',
      title: 'Alterações de Humor',
      description:
        'Oscilações emocionais sem causa aparente, períodos de euforia seguidos de queda, instabilidade que afeta relações e trabalho — quando o humor não segue uma lógica clara, um diagnóstico preciso faz toda a diferença.',
      href: '#contato',
      image: images[4],
    },
    {
      id: 'insonia',
      title: 'Insônia Crônica',
      description:
        'Dificuldade em adormecer, sono fragmentado, acordar sem descanso — a insônia crônica raramente é apenas "estresse". Com avaliação adequada, é possível entender sua causa e tratá-la de forma eficaz.',
      href: '#contato',
      image: images[5],
    },
    {
      id: 'outras',
      title: 'Outras Condições Psiquiátricas',
      description:
        'Cada sofrimento tem sua singularidade. Condições que não se encaixam nas categorias acima também são avaliadas com a mesma atenção e profundidade.',
      href: '#contato',
      image: images[6],
    },
  ];

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className='py-12 lg:py-24'>
      <div className='container'>
        <div className='mb-6 flex items-end justify-between md:mb-9 lg:mb-10'>
          <div className='flex flex-col gap-6 lg:gap-10'>
            <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl max-w-4xl'>
              Temas Frequentemente Acompanhados
            </h2>
            <p className='text-balance text-muted-foreground lg:text-xl'>
              Atendimento de adultos que buscam acompanhamento para ansiedade,
              depressão, transtornos do humor, transtorno bipolar, insônia,
              burnout, sofrimento emocional persistente e dificuldades
              relacionais.
            </p>
          </div>
          <div className='hidden shrink-0 gap-2 md:flex'>
            <Button
              size='icon'
              variant='outline'
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className='disabled:pointer-events-auto'
            >
              <ArrowLeft className='size-5' />
            </Button>
            <Button
              size='icon'
              variant='outline'
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className='disabled:pointer-events-auto'
            >
              <ArrowRight className='size-5' />
            </Button>
          </div>
        </div>
      </div>
      <div className='container'>
        <Carousel
          setApi={setCarouselApi}
          opts={{
            loop: true,
            skipSnaps: true,
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_52%,transparent)_34%,color-mix(in_oklab,var(--background)_14%,transparent)_68%,transparent_100%)] transition-opacity duration-300 sm:w-28 md:w-36',
              !canScrollPrev && 'opacity-0',
            )}
          />
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-[linear-gradient(270deg,var(--background)_0%,color-mix(in_oklab,var(--background)_52%,transparent)_34%,color-mix(in_oklab,var(--background)_14%,transparent)_68%,transparent_100%)] transition-opacity duration-300 sm:w-28 md:w-36',
              !canScrollNext && 'opacity-0',
            )}
          />
          <CarouselContent className='-ml-5'>
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className='max-w-[320px] pl-5 lg:max-w-90'
              >
                <a href={item.href} className='group rounded-xl'>
                  <div className='group relative h-full min-h-108 max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-video'>
                    <Picture
                      src={item.image}
                      alt={item.title}
                      className='absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 h-full bg-linear-to-t from-black/80 via-black/28 to-transparent' />
                    <div className='text-xl font-semibold absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8'>
                      {item.title}
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className='mt-8 flex justify-center gap-2'>
          {items.map((_, index) => (
            <button
              key={index}
              type='button'
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
