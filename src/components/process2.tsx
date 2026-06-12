'use client';

import { motion, useInView } from 'framer-motion';
import { CornerDownRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import imgAvaliacaoClinica from '@/assets/clinica/LCM_1565.jpg';
import imgConsultaInicial from '@/assets/clinica/LCM_1563.jpg';
import imgPrimeiroContato from '@/assets/clinica/LCM_1559.jpg';
import imgSeguimento from '@/assets/clinica/LCM_1567.jpg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection = ({ className }: ProcessSectionProps) => {
  const process = [
    {
      step: '01',
      title: 'Primeiro Contato',
      image: imgPrimeiroContato.src,
      description:
        'Entre em contato pelo WhatsApp ou formulário. Retornaremos para agendar sua consulta na Av. Paulista.',
    },
    {
      step: '02',
      title: 'Consulta Inicial',
      image: imgConsultaInicial.src,
      description:
        'Uma conversa sem pressa. O Dr. Jean ouvirá sua história, sintomas e contexto de vida antes de qualquer avaliação.',
    },
    {
      step: '03',
      title: 'Avaliação Clínica',
      image: imgAvaliacaoClinica.src,
      description:
        'Com base na sua história completa, será construída uma compreensão individualizada — clínica e psicodinâmica — para orientar o acompanhamento.',
    },
    {
      step: '04',
      title: 'Acompanhamento Longitudinal',
      image: imgSeguimento.src,
      description:
        'O cuidado se constrói ao longo do tempo. O Dr. Jean acompanhará sua evolução com atenção contínua, ajustando a conduta conforme necessário.',
    },
  ];

  const [active, setActive] = useState<number>(0);
  const previousActive = usePrevious(active);

  return (
    <section id='como-funciona' className={cn('py-32', className)}>
      <div className='container'>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-20'>
          <div className='top-10 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky'>
            <h1 className='relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl'>
              Como Funciona
            </h1>
            <p className='text-base text-foreground/50'>
              Acreditamos que o cuidado começa antes mesmo da consulta. Desde o
              primeiro contato, buscamos oferecer um ambiente acolhedor,
              tranquilo e respeitoso, onde cada pessoa possa se sentir bem
              recebida.
            </p>
            <div className='relative h-90 overflow-hidden border'>
              {previousActive !== undefined && (
                <div className='absolute top-0 h-full w-full'>
                  <img
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
                <img
                  src={process[active].image}
                  className='h-full w-full object-cover'
                  alt=''
                />
              </motion.div>
            </div>
            <Button
              variant='ghost'
              className='flex items-center justify-start gap-2'
              asChild
            >
              <a href='https://wa.me/5511913259328?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'>
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
    image: string;
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
        <h3 className='mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl'>
          {step.title}
        </h3>
        <p className='text-foreground/50'>{step.description}</p>
      </div>
    </li>
  );
};

export { ProcessSection };
