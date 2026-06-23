'use client';

import { motion, useInView } from 'framer-motion';
import { CornerDownRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import getZapLink from '@/utils/get-zap-link';
import type { OptimizedPicture } from '@/utils/get-picture-image';
import { Picture } from './ui/picture';

// Custom hook to get previous value
const usePrevious = <T,>(value: T): T | undefined => {
  const [prev, setPrev] = useState<T | undefined>(undefined);
  const ref = useRef(value);

  useEffect(() => {
    setPrev(ref.current);
    ref.current = value;
  }, [value]);

  return prev;
};

const ProcessSection = ({ images }: { images: OptimizedPicture[] }) => {
  const process = [
    {
      step: '01',
      title: 'Primeiro Contato',
      image: images[0],
      description:
        'Entre em contato pelo WhatsApp ou formulário. Retornaremos para agendar sua consulta na Av. Paulista.',
    },
    {
      step: '02',
      title: 'Consulta Inicial',
      image: images[1],
      description:
        'Uma conversa sem pressa. O Dr. Jean ouvirá sua história, sintomas e contexto de vida antes de qualquer avaliação.',
    },
    {
      step: '03',
      title: 'Avaliação Clínica',
      image: images[2],
      description:
        'Com base na sua história completa, será construída uma compreensão individualizada — clínica e psicodinâmica — para orientar o acompanhamento.',
    },
    {
      step: '04',
      title: 'Acompanhamento Longitudinal',
      image: images[3],
      description:
        'O cuidado se constrói ao longo do tempo. O Dr. Jean acompanhará sua evolução com atenção contínua, ajustando a conduta conforme necessário.',
    },
  ];

  const [active, setActive] = useState<number>(0);
  const previousActive = usePrevious(active);

  return (
    <section id='como-funciona' className='py-12 lg:py-24'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-20'>
          <div className='top-10 h-fit w-fit gap-3 space-y-6 py-8 lg:sticky'>
            <h2 className='relative w-fit text-3xl font-bold md:text-4xl lg:text-5xl max-w-4xl'>
              Como Funciona
            </h2>
            <p className='text-base text-muted-foreground lg:text-xl pb-6'>
              Acreditamos que o cuidado começa antes mesmo da consulta. Desde o
              primeiro contato, buscamos oferecer um ambiente acolhedor,
              tranquilo e respeitoso, onde cada pessoa possa se sentir bem
              recebida.
            </p>
            <div className='relative h-90 overflow-hidden border'>
              {previousActive !== undefined && (
                <div className='absolute top-0 h-full w-full'>
                  <Picture
                    src={process[previousActive].image}
                    className='h-full w-full object-cover'
                    alt=''
                  />
                </div>
              )}
              <motion.div
                initial={{ clipPath: 'inset(100% 100% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                key={active}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                }}
                className='h-full w-full'
              >
                <Picture
                  src={process[active].image}
                  className='h-full w-full object-cover'
                  alt=''
                />
              </motion.div>
            </div>
            <Button
              variant='ghost'
              className='flex items-center justify-start gap-2 w-fit'
              asChild
            >
              <a
                href={getZapLink('Ola, gostaria de agendar uma consulta.')}
                target='_blank'
                rel='noopener noreferrer'
              >
                <CornerDownRight className='text-orange-500' />
                Agendar Consulta
              </a>
            </Button>
          </div>
          <ul className='relativew-full lg:pl-22'>
            {process.map((step, index) => (
              <ProcessCard
                key={index}
                step={step}
                index={index}
                setActive={setActive}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({
  step,
  index,
  setActive,
}: {
  step: {
    step: string;
    title: string;
    image: OptimizedPicture;
    description: string;
  };
  index: number;
  setActive: (index: number) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const itemInView = useInView(ref, {
    amount: 0,
    margin: '0px 0px -60% 0px',
  });

  useEffect(() => {
    if (itemInView) {
      setActive(index);
    }
  }, [itemInView, index, setActive]);

  return (
    <li
      ref={ref}
      key={index}
      className='relative flex flex-col justify-between gap-12 border-b py-8 lg:py-16'
    >
      <div className='flex w-fit items-center justify-center px-4 py-1 text-9xl tracking-tighter'>
        0{index + 1}
      </div>
      <div>
        <h3 className='mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl font-handwriting'>
          {step.title}
        </h3>
        <p className='text-foreground/50'>{step.description}</p>
      </div>
    </li>
  );
};

export { ProcessSection };
