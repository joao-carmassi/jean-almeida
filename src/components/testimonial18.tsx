import { Star } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface TestimonialSectionProps {
  className?: string;
}

const TestimonialSection = ({ className }: TestimonialSectionProps) => {
  return (
    <section id='depoimentos' className={cn('py-32', className)}>
      <div className='container'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-1 text-sm font-semibold'>
            <Star className='h-6 w-auto fill-amber-500 stroke-amber-500' />
            Avaliação 5.0 no Google
          </div>
          <h2 className='text-center text-3xl font-semibold lg:text-4xl'>
            O Que os Pacientes Dizem
          </h2>
          <p className='text-center text-muted-foreground lg:text-lg'>
            Depoimentos de quem encontrou um espaço de escuta e cuidado genuíno.
          </p>
        </div>
        <div className='mx-auto mt-20 max-w-5xl rounded-2xl bg-muted p-6 md:p-20'>
          <div className='mb-6 flex gap-1'>
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
          </div>
          <q className='text-2xl font-semibold md:text-4xl'>
            Dr. Jean é uma pessoa incrível. Já passei com outros médicos antes,
            mas nenhum com o qual me conectasse desta forma.
          </q>
          <p className='mt-6 text-muted-foreground'>
            Ele é muito gentil, compreensivo e dedicado. O atendimento é
            humanizado e a escuta é genuína. Recomendo de coração para quem
            busca um acompanhamento psiquiátrico de qualidade em São Paulo.
          </p>
          <div className='mt-6 flex gap-4'>
            <Avatar className='size-14 rounded-full ring-1 ring-input'>
              <AvatarImage
                src='https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp'
                alt='Barbara da Luz'
              />
            </Avatar>
            <div>
              <p className='font-medium'>Barbara da Luz Gonçalves dos Santos</p>
              <p className='text-sm text-muted-foreground'>
                Paciente, São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };
