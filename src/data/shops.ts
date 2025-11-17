import { shopLogos } from '../assets/placeholders';
import type { Shop } from '../types';

const logo = (key: keyof typeof shopLogos) => shopLogos[key];

export const shopCategories = [
  { value: 'indumentaria', label: 'Indumentaria' },
  { value: 'calzado', label: 'Calzado' },
  { value: 'comida', label: 'Gastronomía' },
  { value: 'hogar', label: 'Hogar & deco' },
  { value: 'tecnologia', label: 'Tecnología' },
  { value: 'servicios', label: 'Servicios' },
  { value: 'entretenimiento', label: 'Entretenimiento' },
] as const;

export const shops: Shop[] = [
  {
    id: 'frezia-amapola',
    name: 'Frezia Amapola Indumentaria',
    logo: logo('frezia-amapola'),
    category: 'indumentaria',
    location: 'Nivel 1 · Local 108',
    shortDescription:
      'Diseño de autor, tejidos naturales y cápsulas hechas en colaboración con artistas.',
    tags: ['sustentable', 'slow-fashion', 'exclusivo'],
  },
  {
    id: 'hard-tech',
    name: 'HardTech',
    logo: logo('hard-tech'),
    category: 'tecnologia',
    location: 'Nivel 2 · Local 215',
    shortDescription:
      'Componentes para computadoras, perifericos y tecnología.',
    tags: ['perifericos', 'tecnología', 'pc'],
  },
  {
    id: 'aura-tech',
    name: 'Aura Tech',
    logo: logo('aura-tech'),
    category: 'comida',
    location: 'Nivel 2 · Local 216',
    shortDescription:
      'Componentes para computadoras, perifericos y tecnología.',
    tags: ['perifericos', 'tecnología', 'pc'],
  },
  {
    id: 'greenshot-golf-store',
    name: 'Greenshot Golf Store',
    logo: logo('greenshot-golf-store'),
    category: 'indumentaria',
    location: 'Nivel 1 · Local 109',
    shortDescription:
      'Indumentaria deportiva especializada en golf de marcas reconocidas.',
    tags: ['golf', 'deportiva', 'ropa deportiva'],
  },
];

