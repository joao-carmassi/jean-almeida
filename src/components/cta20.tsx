import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import getZapLink from '@/utils/get-zap-link';

const CtaSection = () => {
  return (
    <section className='py-12'>
      <div className='container'>
        <div>
          <p className='text-center text-sm'>
            Às vezes, o mais difícil não é pedir ajuda — é encontrar um espaço
            onde você realmente possa ser escutado.
          </p>
          <div className='mt-4 flex items-center justify-between gap-4'>
            <Separator className='shrink' />
            <Button asChild size='lg'>
              <a href={getZapLink('Ola, gostaria de agendar uma consulta.')}>
                Quero Agendar Minha Consulta
              </a>
            </Button>
            <Separator className='shrink' />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CtaSection };
