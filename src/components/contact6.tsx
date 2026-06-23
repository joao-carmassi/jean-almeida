'use client';
import { Mail, MapPin, MessagesSquare, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href: string;
  badge?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className='size-6' />,
    title: 'E-mail',
    description: 'Resposta em até 24 horas',
    value: 'drjean.psiquiatria@gmail.com',
    href: 'mailto:drjean.psiquiatria@gmail.com',
    badge: 'Recomendado',
  },
  {
    icon: <MessagesSquare className='size-6' />,
    title: 'WhatsApp',
    description: 'Atendimento rápido e direto',
    value: '(11) 91325-9328',
    href: 'https://wa.me/5511913259328?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.',
    badge: 'Disponível',
  },
  {
    icon: <Phone className='size-6' />,
    title: 'Telefone',
    description: 'Segunda a Sexta, 9h às 19h',
    value: '(11) 91325-9328',
    href: 'tel:+5511913259328',
  },
  {
    icon: <MapPin className='size-6' />,
    title: 'Endereço',
    description: 'Metrô Consolação / Trianon-MASP',
    value: 'Av. Paulista, 2494 — cj. 94, Bela Vista, São Paulo — SP',
    href: 'https://maps.google.com/?q=Av.+Paulista,+2494,+S%C3%A3o+Paulo',
  },
];

const ContactSection = () => {
  return (
    <section className='py-12 md:py-24' id='contact'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto'>
          <div className='mb-12 text-center'>
            <h2 className='mb-6 text-3xl font-bold md:text-4xl lg:text-5xl'>
              Entre em Contato — Agende Sua Consulta
            </h2>
            <p className='mx-auto text-balance text-muted-foreground lg:text-xl'>
              Estamos prontos para receber você. Escolha a forma mais
              conveniente de entrar em contato.
            </p>
          </div>

          <div className='grid gap-6 lg:grid-cols-2 w-full'>
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className='border-0 bg-muted shadow-none w-full dark'
              >
                <CardContent>
                  <div className='flex items-start gap-4'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted'>
                      {info.icon}
                    </div>
                    <div className='min-w-0 flex-1'>
                      <div className='mb-1 flex items-center gap-2'>
                        <h3 className='font-semibold'>{info.title}</h3>
                      </div>
                      <p className='mb-2 text-sm text-muted-foreground'>
                        {info.description}
                      </p>
                      <a
                        href={info.href}
                        className='text-sm font-medium transition-colors hover:underline'
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.350498473113!2d-46.66499162467!3d-23.555852078803603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582d0e86e945%3A0xc911c4449bf6cde0!2sAv.%20Paulista%2C%202494%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-300!5e0!3m2!1spt-BR!2sbr!4v1782254913622!5m2!1spt-BR!2sbr'
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
              className='w-full aspect-3/1 col-span-2 rounded-4xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
