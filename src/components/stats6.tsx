import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StatsSectionProps {
  className?: string;
}

const StatsSection = ({ className }: StatsSectionProps) => {
  return (
    <section className={cn('bg-accent py-32', className)}>
      <div className='container flex flex-col items-start text-left'>
        <div className='mb-12 w-full md:mb-16'>
          <h2 className='mb-8 w-full max-w-[24rem] text-3xl font-bold text-pretty sm:text-4xl md:max-w-[30rem] lg:max-w-[37rem] lg:text-5xl'>
            Cuidado humanizado para sua saúde mental
          </h2>
          <div className='flex flex-col justify-start gap-2 sm:flex-row'>
            <Button className='w-full sm:w-auto' asChild>
              <a href='https://wa.me/5511913259328?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'>
                Agendar Consulta
              </a>
            </Button>
            <Button variant='outline' className='w-full sm:w-auto' asChild>
              <a href='#sobre'>Saiba Mais</a>
            </Button>
          </div>
        </div>
        <div className='grid w-full grid-cols-2 gap-12 sm:w-fit sm:grid-cols-4 lg:gap-16'>
          <div className='w-full'>
            <div className='mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl'>
              CRM
            </div>
            <div className='text-base leading-6 text-muted-foreground lg:text-lg'>
              127.207 — Psiquiatra
            </div>
          </div>
          <div className='w-full'>
            <div className='mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl'>
              ⭐ 5.0
            </div>
            <div className='text-base leading-6 text-muted-foreground lg:text-lg'>
              Avaliação no Google
            </div>
          </div>
          <div className='w-full'>
            <div className='mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl'>
              2
            </div>
            <div className='text-base leading-6 text-muted-foreground lg:text-lg'>
              Idiomas de Atendimento (PT / ES)
            </div>
          </div>
          <div className='w-full'>
            <div className='mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl'>
              Av.
            </div>
            <div className='text-base leading-6 text-muted-foreground lg:text-lg'>
              Paulista, São Paulo — SP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StatsSection };
