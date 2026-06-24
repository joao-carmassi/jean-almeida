import getZapLink from '@/utils/get-zap-link';
import navigationLinks from '@/utils/navgation-links';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const navigation = [
    ...navigationLinks,
    {
      label: 'Agendar Consulta',
      href: 'https://wa.me/5511913259328?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.',
    },
  ];

  const social = [{ name: 'WhatsApp', href: getZapLink() }];

  return (
    <section className='flex flex-col items-center py-12 lg:pb-0 dark bg-card text-foreground'>
      <nav className='container flex flex-col items-center gap-4'>
        <ul className='flex flex-wrap items-center justify-center gap-6'>
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-medium transition-opacity hover:opacity-75'
              >
                {item.label}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75'
              >
                {item.name} <ArrowUpRight className='size-4' />
              </a>
            </li>
          ))}
        </ul>
        <p className='text-center text-sm text-muted-foreground'>
          © 2026 Dr. Jean Almeida — Psiquiatra em São Paulo. CRM 127.207. Todos
          os direitos reservados.
        </p>
        <p className='text-center text-xs text-muted-foreground max-w-xl'>
          ⚠️ As informações deste site são de caráter informativo e não
          substituem consulta médica.
        </p>
      </nav>
      <h2 className='font-handwriting text-[13vw] font-black hidden lg:block'>
        Jean Almeida
      </h2>
    </section>
  );
};

export { Footer };
