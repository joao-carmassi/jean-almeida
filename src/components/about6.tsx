import img1 from '@/assets/clinica/LCM_1611.jpg';
import img2 from '@/assets/clinica/LCM_1629.jpg';
import img3 from '@/assets/clinica/LCM_1630.jpg';
import img4 from '@/assets/clinica/LCM_1631.jpg';
import img5 from '@/assets/clinica/LCM_1632.jpg';
import img6 from '@/assets/clinica/LCM_1633.jpg';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section id='sobre' className={cn('py-32', className)}>
      <div className='container'>
        <div className='flex flex-col items-center justify-start gap-6 lg:flex-row'>
          <div className='flex w-full flex-col items-start justify-start gap-24 lg:w-1/2'>
            <div className='pr-6'>
              <h1 className='mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl'>
                Acompanhamento Psiquiátrico com Escuta e Profundidade
              </h1>
              <p className='mb-9 text-muted-foreground lg:text-xl'>
                Meu nome é Jean Almeida, sou médico com atuação em psiquiatria,
                registrado no CRM 127.207. Meu trabalho é construído sobre a
                escuta cuidadosa e o acompanhamento longitudinal — atenção não
                apenas aos sintomas, mas à história de vida, aos padrões
                emocionais e ao contexto singular de cada pessoa. Atuo com uma
                abordagem que integra a psiquiatria clínica à compreensão
                psicodinâmica: o diagnóstico é um ponto de partida, não uma
                conclusão.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
              <img
                src={img1.src}
                alt='Consultório Dr. Jean Almeida — Av. Paulista, São Paulo'
                className='aspect-[0.7] w-full rounded-lg object-cover md:w-1/2'
              />
              <div className='flex w-full flex-col items-center justify-center gap-6 md:w-1/2'>
                <img
                  src={img2.src}
                  alt='Sala de atendimento psiquiátrico'
                  className='aspect-[1.1] rounded-lg object-cover'
                />
                <img
                  src={img3.src}
                  alt='Ambiente acolhedor do consultório'
                  className='aspect-[0.7] rounded-lg object-cover'
                />
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48'>
            <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
              <img
                src={img4.src}
                alt='Detalhe do espaço de consulta'
                className='aspect-[0.9] w-full rounded-lg object-cover md:w-1/2'
              />
              <div className='flex w-full flex-col items-center justify-center gap-6 md:w-1/2'>
                <img
                  src={img5.src}
                  alt='Interior do consultório psiquiátrico'
                  className='aspect-[0.8] rounded-lg object-cover'
                />
                <img
                  src={img6.src}
                  alt='Espaço de escuta e cuidado'
                  className='aspect-[0.9] rounded-lg object-cover'
                />
              </div>
            </div>
            <div className='px-8'>
              <h1 className='mb-8 text-2xl font-semibold lg:mb-6'>
                Nosso Consultório
              </h1>
              <p className='mb-9 lg:text-xl'>
                O consultório está localizado na Av. Paulista, 2494 — conjunto
                94, no coração de São Paulo, com fácil acesso pelo metrô
                (estação Consolação ou Trianon-MASP).
              </p>
              <p className='text-muted-foreground'>
                Muitas pessoas que chegam ao consultório funcionam bem por fora
                — trabalham, cumprem compromissos, mantêm relações. Mas carregam
                um sofrimento interno que o desempenho cotidiano não apaga. Se
                isso ressoa com o que você está vivendo, estou disponível para
                conversar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
