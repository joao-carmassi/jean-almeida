import type { OptimizedPicture } from '@/utils/get-picture-image';
import { Picture } from './ui/picture';

const AboutSection = ({ images }: { images: OptimizedPicture[] }) => {
  return (
    <section id='sobre' className='py-12 lg:py-24'>
      <div className='container'>
        <div className='flex flex-col items-center justify-start gap-6 lg:flex-row'>
          <div className='flex w-full flex-col items-start justify-start lg:w-1/2'>
            <div className='pr-6'>
              <h2 className='mb-6 lg:mb-10 text-4xl font-bold md:text-5xl lg:text-6xl'>
                Acompanhamento Psiquiátrico com Escuta e Profundidade
              </h2>
              <p className='mb-6 lg:mb-10 text-balance text-muted-foreground lg:text-xl'>
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
              <Picture
                src={images[0]}
                alt='Consultório Dr. Jean Almeida — Av. Paulista, São Paulo'
                className='aspect-[0.7] w-full rounded-lg object-cover'
              />
              <div className='flex w-full flex-col items-center justify-center gap-6'>
                <Picture
                  src={images[1]}
                  alt='Sala de atendimento psiquiátrico'
                  className='aspect-[1.1] rounded-lg object-cover'
                />
                <Picture
                  src={images[2]}
                  alt='Ambiente acolhedor do consultório'
                  className='aspect-[0.7] rounded-lg object-cover'
                />
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48'>
            <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
              <Picture
                src={images[3]}
                alt='Detalhe do espaço de consulta'
                className='aspect-[0.9] w-full rounded-lg object-cover'
              />
              <div className='flex w-full flex-col items-center justify-center gap-6'>
                <Picture
                  src={images[4]}
                  alt='Interior do consultório psiquiátrico'
                  className='aspect-[0.8] rounded-lg object-cover'
                />
                <Picture
                  src={images[5]}
                  alt='Espaço de escuta e cuidado'
                  className='aspect-[0.9] rounded-lg object-cover'
                />
              </div>
            </div>
            <div>
              <h3 className='mb-6 lg:mb-10 text-2xl font-semibold'>
                Nosso Consultório
              </h3>
              <p className='mb-6 lg:mb-10 max-w-5xl text-balance text-muted-foreground lg:text-xl'>
                O consultório está localizado na Av. Paulista, 2494 — conjunto
                94, no coração de São Paulo, com fácil acesso pelo metrô
                (estação Consolação ou Trianon-MASP).
              </p>
              <p className='max-w-5xl text-balance text-muted-foreground lg:text-xl'>
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
