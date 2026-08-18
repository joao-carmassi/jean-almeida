import type { Person } from 'schema-dts';
import authorPhoto from '@/assets/je/02333E68-9007-4BDF-B8A0-081B765F130C.png';
import { getBasePath, getCanonicalUrl } from '@/utils/env';

const homeUrl = getCanonicalUrl('/');

/** Perfis externos que comprovam a identidade do autor. */
export const profiles = [
  { name: 'Instagram', url: 'https://www.instagram.com/drjeanalmeida/' },
  {
    name: 'Doctoralia',
    url: 'https://www.doctoralia.com.br/jean-almeida/psiquiatra/sao-paulo',
  },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jean-almeida-a06258b6/' },
];

/**
 * `sameAs` do Schema.org: só as URLs. Consumido tanto pelo nó `Person` daqui
 * quanto pelo `Physician` da home, para que os dois declarem a mesma identidade.
 */
export const sameAs = profiles.map((profile) => profile.url);

export const author = {
  name: 'Dr. Jean Almeida',
  jobTitle: 'Médico Psiquiatra',
  crm: 'CRM 127.207',
  crmNumber: '127.207',
  url: homeUrl,
  /** Nó estável reaproveitado por todos os schemas que citam o autor. */
  id: `${homeUrl}#author`,
  photo: authorPhoto,
  photoAlt:
    'Dr. Jean Almeida, médico psiquiatra, no consultório na Avenida Paulista, em São Paulo',
  bio: 'O Dr. Jean Almeida é médico psiquiatra e atende adultos na Av. Paulista, em São Paulo. Acompanha quadros de depressão, ansiedade, TDAH e burnout, com avaliação individualizada e tratamento ajustado à história de cada paciente. Escreve sobre saúde mental para tornar mais claro o que costuma gerar dúvida antes da primeira consulta.',
  areasOfExpertise: ['Depressão', 'Ansiedade', 'TDAH em adultos', 'Burnout'],
  profiles,
};

export const authorPersonSchema: Person = {
  '@type': 'Person',
  '@id': author.id,
  name: author.name,
  jobTitle: author.jobTitle,
  url: author.url,
  image: `${getBasePath().replace(/\/+$/, '')}${author.photo.src}`,
  knowsAbout: author.areasOfExpertise,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'CRM',
    value: author.crmNumber,
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: author.crm,
    credentialCategory: 'Registro profissional médico',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Conselho Regional de Medicina do Estado de São Paulo',
      url: 'https://www.cremesp.org.br/',
    },
  },
  sameAs,
};
