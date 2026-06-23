import { Button } from '@/components/ui/button';
import getZapLink from '@/utils/get-zap-link';

const stats = [
  { title: 'CRM', value: '127.207 — Psiquiatra' },
  { title: '⭐ 5.0', value: 'Avaliação no Google' },
  { title: '2', value: 'Idiomas de Atendimento (PT / ES)' },
  { title: 'Av.', value: 'Paulista, São Paulo — SP' },
];
const StatsSection = () => {
  return (
    <section className='bg-accent py-12 lg:py-24 dark'>
      <div className='container flex flex-col items-start text-left'>
        <div className='mb-12 w-full md:mb-16'>
          <h2 className='mb-6 text-3xl font-bold md:text-4xl lg:text-5xl max-w-4xl text-foreground'>
            Cuidado humanizado para sua saúde mental
          </h2>
          <div className='flex flex-col justify-start gap-2 sm:flex-row'>
            <Button className='w-full sm:w-auto' asChild>
              <a
                href={getZapLink('Ola, gostaria de agendar uma consulta.')}
                target='_blank'
                rel='noopener noreferrer'
              >
                Agendar Consulta
              </a>
            </Button>
            <Button
              variant='outline'
              className='w-full sm:w-auto text-foreground'
              asChild
            >
              <a href='#sobre'>Saiba Mais</a>
            </Button>
          </div>
        </div>
        <div className='grid w-full md:grid-cols-2 gap-12 sm:w-fit lg:grid-cols-4 lg:gap-16'>
          {stats.map((item, index) => (
            <div key={index} className='w-full'>
              <div className='mb-2 text-3xl font-bold md:text-4xl lg:text-5xl text-foreground font-handwriting'>
                {item.title}
              </div>
              <div className='text-balance text-muted-foreground lg:text-xl'>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { StatsSection };
