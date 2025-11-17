import { promotionImages } from '../assets/placeholders';
import type { Promotion } from '../types';

const image = (index: keyof typeof promotionImages) => promotionImages[index];

export const promotions: Promotion[] = [
  {
    id: 'frezia-amapola',
    title: '2x1 en Frezia Amapola Indumentaria',
    image: image('ropa'),
    url: '/locales',
    dateRange: 'Nov 01 — Nov 24',
    description:
      '2x1 en la compra de cualquier prenda en Frezia Amapola Indumentaria hasta el lunes 24 de Noviembre',
  },
  {
    id: 'gourmet-week',
    title: 'Gourmet Week: maridajes urbanos',
    image: image('gourmet'),
    url: '/locales',
    dateRange: 'FEB 17 — FEB 23',
    description:
      'Restaurantes del tercer piso presentan menús degustación con 20% de descuento exclusivo.',
  },
  {
    id: 'tech-experience',
    title: 'Tech Experience: retail inmersivo',
    image: image('hackaton'),
    url: '/eventos',
    dateRange: 'ABR 05 — ABR 14',
    description:
      'Pop-ups de realidad aumentada, talleres de UX y lanzamientos de gadgets sustentables.',
  },
  {
    id: 'fashion-night',
    title: 'Fashion Night Out',
    image: image('ropa2'),
    dateRange: 'MAR 22 (20:00)',
    description:
      'Desfile colaborativo con diseñadores independientes y styling en vivo en el patio central.',
  },
  {
    id: 'musica-en-vivo',
    title: 'Ciclo Música en vivo',
    image: image('jazz'),
    dateRange: 'Todos los viernes 19:30',
    description:
      'Bandas acústicas y DJ sets con curaduría de artistas urbanos latinoamericanos.',
  },
  {
    id: 'cine-al-aire',
    title: 'Cine al aire libre',
    image: image('cine'),
    dateRange: 'ABR Últimos viernes · 21:00',
    description:
      'Proyección de cine independiente con mantas, food trucks y experiencias immersivas.',
  },
];

