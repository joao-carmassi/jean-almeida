import { getZapNumber } from './env';

const getZapLink = (message?: string) => {
  const phoneNumber = getZapNumber();
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message ?? '')}`;
};

export default getZapLink;
