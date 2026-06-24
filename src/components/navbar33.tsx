'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import getZapLink from '@/utils/get-zap-link';
import navigationLinks from '@/utils/navgation-links';

interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
}

interface Navbar33Props {
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  items?: NavItem[];
  loginHref?: string;
}

const Navbar = ({
  logo = {
    src: '/favicon-96x96.png',
    alt: 'Dr. Jean Almeida — Psiquiatra em São Paulo',
    href: '#hero',
  },
  items = [...navigationLinks],
  loginHref = getZapLink(
    'Olá, gostaria de agendar uma consulta com o Dr. Jean Almeida.',
  ),
}: Navbar33Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className='fixed left-1/2 -translate-x-1/2 z-50 w-full container top-5 lg:top-12'>
      <div className='w-full rounded-4xl border bg-background/70 backdrop-blur-md transition-all duration-300'>
        <div className='flex items-center justify-between p-3'>
          <div className='flex items-center gap-3'>
            <button
              className='relative flex size-8 text-muted-foreground lg:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              <div className='absolute top-1/2 left-1/2 block w-4.5 -translate-x-1/2 -translate-y-1/2'>
                <span
                  aria-hidden='true'
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                  )}
                />
                <span
                  aria-hidden='true'
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen && 'opacity-0',
                  )}
                />
                <span
                  aria-hidden='true'
                  className={cn(
                    'absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out',
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                  )}
                />
              </div>
            </button>
            <a
              href={logo.href || '#hero'}
              className='flex shrink-0 items-center gap-2'
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className='h-8 w-auto dark:invert'
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <NavigationMenu className='max-lg:hidden'>
            <NavigationMenuList className='gap-3'>
              {items.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className='bg-transparent px-1.5 data-[state=open]:bg-accent/50'>
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='w-100 space-y-2 p-4'>
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className='group flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                              >
                                <div className='space-y-1.5 transition-transform duration-300 group-hover:translate-x-1'>
                                  <div className='text-sm leading-none font-medium'>
                                    {item.title}
                                  </div>
                                  <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem asChild key={link.label}>
                    <Button variant={'outline'} asChild>
                      <a href={link.href}>{link.label}</a>
                    </Button>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Auth Buttons */}
          <div className='flex items-center gap-2.5'>
            <Button asChild variant='default'>
              <a href={loginHref}>
                <span className='relative z-10'>Agendar Consulta</span>
              </a>
            </Button>
            {/* Hamburger Menu Button (Mobile Only) */}
          </div>
        </div>
        {/* Mobile Menu Navigation */}
        <div
          className={cn(
            'fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden',
            isMenuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-4 opacity-0',
          )}
        >
          <nav className='flex flex-1 flex-col divide-y divide-border'>
            {items.map((link) =>
              link.dropdownItems ? (
                <div key={link.label} className='py-4 first:pt-0 last:pb-0'>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label,
                      )
                    }
                    className='flex w-full items-center justify-between text-base font-medium text-primary'
                  >
                    {link.label}
                    <ChevronRight
                      className={cn(
                        'size-4 transition-transform duration-200',
                        openDropdown === link.label && 'rotate-90',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openDropdown === link.label
                        ? 'mt-4 max-h-250 opacity-100'
                        : 'max-h-0 opacity-0',
                    )}
                  >
                    <div className='space-y-3 rounded-lg bg-muted/50 p-4'>
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className='group block rounded-md p-2 transition-colors hover:bg-accent'
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <div className='transition-transform duration-200 group-hover:translate-x-1'>
                            <div className='font-medium text-primary'>
                              {item.title}
                            </div>
                            <p className='mt-1 text-sm text-muted-foreground'>
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className='py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
