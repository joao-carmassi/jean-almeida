import { Star } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

const TestimonialSection = () => {
  return (
    <section id='depoimentos' className='py-12 md:py-24'>
      <div>
        <div className='container flex flex-col items-center gap-6'>
          <div className='flex items-center gap-1 text-sm font-semibold'>
            <Star className='h-6 w-auto fill-amber-500 stroke-amber-500' />
            Avaliação 5.0 no Google
          </div>
          <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
            O Que os Pacientes Dizem
          </h2>
          <p className='text-balance text-muted-foreground lg:text-xl'>
            Depoimentos de quem encontrou um espaço de escuta e cuidado genuíno.
          </p>
        </div>
        <div className='container mx-auto mt-12 rounded-2xl bg-muted p-6 md:p-20'>
          <div className='mb-6 flex gap-1'>
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
            <Star className='size-5 fill-amber-500 text-amber-500' />
          </div>
          <q className='text-2xl font-bold md:text-3xl lg:text-4xl font-handwriting'>
            Dr. Jean é uma pessoa incrível. Já passei com outros médicos antes,
            mas nenhum com o qual me conectasse desta forma.
          </q>
          <p className='mt-6 text-balance text-muted-foreground lg:text-xl'>
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
