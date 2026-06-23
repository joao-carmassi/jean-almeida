import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

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

const FaqSection = () => {
  return (
    <section id='faq' className='py-12 md:py-24'>
      <div className='container'>
        <div>
          <Badge className='text-xs font-medium'>FAQ</Badge>
          <h2 className='mt-6 text-3xl font-bold md:text-4xl lg:text-5xl'>
            Perguntas Frequentes
          </h2>
          <p className='mt-6 text-balance text-muted-foreground lg:text-xl'>
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
      </div>
    </section>
  );
};

export { FaqSection };
