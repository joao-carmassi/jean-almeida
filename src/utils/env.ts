import { parsePhoneNumber } from 'libphonenumber-js';

export const getBasePath = () => {
  const env = import.meta.env.PUBLIC_BASE_PATH;
  if (!env) {
    throw new Error(
      'PUBLIC_BASE_PATH is not defined in the environment variables',
    );
  }
  return env;
};

/**
 * Builds an absolute URL that matches exactly what the server responds with.
 *
 * The site is built with Astro's `directory` format and hosted on GitHub Pages,
 * so every route is served at `/path/` and `/path` answers with a 301. A
 * canonical tag pointing at the slash-less form therefore points at a redirect,
 * which splits indexing signals across both URLs. Always emit the trailing
 * slash so canonical, sitemap and served URL agree.
 */
export const getCanonicalUrl = (path = '/') => {
  const base = getBasePath().replace(/\/+$/, '');
  const normalizedPath = `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;
  return normalizedPath === '/' ? `${base}/` : `${base}${normalizedPath}/`;
};

export const getZapNumber = () => {
  const env = import.meta.env.PUBLIC_ZAP_NUMBER;
  if (!env) {
    throw new Error(
      'PUBLIC_ZAP_NUMBER is not defined in the environment variables',
    );
  }
  return env;
};

export const getPhoneNumber = () => {
  const env = import.meta.env.PUBLIC_PHONE_NUMBER;
  if (!env) {
    throw new Error(
      'PUBLIC_PHONE_NUMBER is not defined in the environment variables',
    );
  }
  return env;
};

export const getEmail = () => {
  const env = import.meta.env.PUBLIC_EMAIL;
  if (!env) {
    throw new Error('PUBLIC_EMAIL is not defined in the environment variables');
  }
  return env;
};

export const formatPhoneNumber = () => {
  const phone = getPhoneNumber();
  const phoneNumber = parsePhoneNumber(`+55${phone}`);
  return phoneNumber.formatNational();
};
