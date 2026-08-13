import { Button } from '@/components/ui/button';
import getZapLink from '@/utils/get-zap-link';

const Cta12 = () => {
  return (
    <section className='pt-12'>
      <div className='mx-auto'>
        <div className='mx-auto rounded-lg bg-accent p-8 md:rounded-xl lg:p-12'>
          <div className='flex flex-col gap-4 text-center lg:gap-6'>
            <h2 className='text-2xl font-semibold tracking-tight md:text-4xl'>
              Cuide da sua saúde mental com acompanhamento especializado
            </h2>

            <p className='mx-auto max-w-2xl text-muted-foreground lg:text-lg'>
              Agende uma consulta com o Dr. Jean Almeida, psiquiatra em São
              Paulo, e receba uma avaliação cuidadosa para ansiedade, depressão,
              TDAH, burnout e outros sofrimentos emocionais.
            </p>

            <div className='mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4'>
              <Button size='lg' className='w-full sm:w-auto' asChild>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={getZapLink(
                    'Olá, gostaria de agendar uma consulta com o Dr. Jean Almeida.',
                  )}
                >
                  Agendar consulta
                </a>
              </Button>

              <Button
                variant='outline'
                size='lg'
                className='w-full sm:w-auto'
                asChild
              >
                <a href='/blog/'>Ver conteúdos sobre saúde mental</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta12 };
