import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface CtaDividerProps {
  heading: string;
  buttons?: Buttons;
  className?: string;
}

type CtaSectionProps = CtaDividerProps;
type Props = Partial<CtaSectionProps>;

const defaultProps: CtaSectionProps = {
  heading:
    'Às vezes, o mais difícil não é pedir ajuda — é encontrar um espaço onde você realmente possa ser escutado.',
  buttons: {
    primary: {
      text: 'Quero Agendar Minha Consulta',
      url: 'https://wa.me/5511913259328?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20consulta.',
    },
  },
};

const CtaSection = (props: Props) => {
  const { heading, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn('py-32', className)}>
      <div className='container'>
        <div>
          <p className='text-center text-sm'>{heading}</p>
          <div className='mt-4 flex items-center justify-between gap-4'>
            <Separator className='shrink' />
            {buttons?.primary && (
              <Button size='lg'>{buttons.primary.text}</Button>
            )}
            <Separator className='shrink' />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CtaSection };
