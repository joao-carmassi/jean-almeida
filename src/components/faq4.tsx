import { ChevronRight } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Qual a diferença entre psiquiatra e psicólogo?',
    answer:
      'O psiquiatra é médico especializado em saúde mental — pode fazer diagnósticos, prescrever medicamentos e indicar exames. O psicólogo realiza psicoterapia, mas não prescreve medicação. Em muitos casos, o ideal é trabalhar com os dois profissionais em conjunto.',
  },
  {
    question: 'Preciso de encaminhamento médico para consultar?',
    answer:
      'Não. Você pode agendar sua consulta diretamente, sem necessidade de encaminhamento. Basta entrar em contato pelo WhatsApp ou formulário.',
  },
  {
    question: 'O Dr. Jean atende pelo convênio?',
    answer:
      'As consultas são realizadas de forma particular. Aceitamos cartões de crédito e débito. Muitos planos de saúde oferecem reembolso — consulte o seu.',
  },
  {
    question: 'É possível fazer consulta online?',
    answer:
      'Sim, oferecemos consultas por telemedicina para pacientes que não podem comparecer presencialmente. Entre em contato para verificar disponibilidade.',
  },
  {
    question: 'Como sei se preciso de um psiquiatra?',
    answer:
      'Se você está sofrendo — seja com tristeza, ansiedade, insônia, mudanças de humor ou dificuldades emocionais — já é motivo suficiente para buscar ajuda. Não espere a situação piorar.',
  },
  {
    question: 'O consultório fica em que bairro de São Paulo?',
    answer:
      'O consultório está localizado na Av. Paulista, 2494 — conjunto 94, no bairro Bela Vista, São Paulo. Fácil acesso pelo metrô (estação Consolação ou Trianon-MASP).',
  },
  {
    question: 'O atendimento é feito em outro idioma além do português?',
    answer:
      'Sim. O Dr. Jean Almeida atende também em Espanhol, o que é um diferencial importante para a comunidade latinoamericana residente em São Paulo.',
  },
];

interface FaqSectionProps {
  className?: string;
}

const FaqSection = ({ className }: FaqSectionProps) => {
  return (
    <section id='faq' className={cn('py-32', className)}>
      <div className='container'>
        <div>
          <Badge className='text-xs font-medium'>FAQ</Badge>
          <h1 className='mt-4 text-4xl font-semibold'>Perguntas Frequentes</h1>
          <p className='mt-6 font-medium text-muted-foreground'>
            Tem dúvidas sobre psiquiatria ou sobre como funciona o atendimento?
            Veja as respostas mais comuns.
          </p>
        </div>
        <div className='mt-12'>
          <Accordion type='single' collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-b-0'
              >
                <AccordionTrigger className='hover:text-foreground/60 hover:no-underline'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Separator className='my-12' />
        <div className='flex flex-col justify-between gap-12 md:flex-row md:items-end'>
          <div className='lg:col-span-2'>
            <h1 className='mt-4 text-2xl font-semibold'>Ainda tem dúvidas?</h1>
            <p className='mt-6 font-medium text-muted-foreground'>
              Entre em contato pelo WhatsApp e responderemos com prazer.
            </p>
          </div>
          <div className='flex md:justify-end'>
            <a
              href='https://wa.me/5511913259328?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20atendimento.'
              className='flex items-center gap-2 hover:underline'
            >
              Falar pelo WhatsApp
              <ChevronRight className='h-auto w-4' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FaqSection };
