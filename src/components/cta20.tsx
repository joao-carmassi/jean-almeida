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

type Cta20Props = CtaDividerProps;
type Props = Partial<Cta20Props>;

const defaultProps: Cta20Props = {
  heading: 'Transform your business today.',
  buttons: {
    primary: {
      text: 'Get Started',
      url: 'https://shadcnblocks.com',
    },
  },
};

const Cta20 = (props: Props) => {
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

export { Cta20 };
