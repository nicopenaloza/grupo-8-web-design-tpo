import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'guided-tours',
    name: 'Recorridos guiados',
    description:
      'Descubrí las instalaciones y conocé la historia detrás de cada espacio con nuestros especialistas.',
    icon: 'MapPinIcon',
  },
  {
    id: 'coworking',
    name: 'Coworking creativo',
    description:
      'Espacios flexibles con wifi de alta velocidad, lockers y salas de reunión para equipos híbridos.',
    icon: 'BriefcaseIcon',
  },
  {
    id: 'wellness',
    name: 'Wellness & relax',
    description:
      'Zona de descanso con ambientación natural, sesiones express de spa urbano y meditación guiada.',
    icon: 'SparklesIcon',
  },
  {
    id: 'gourmet',
    name: 'Experiencia gourmet',
    description:
      'Curaduría gastronómica con menús de autor, cafeterías de especialidad y opciones plant-based.',
    icon: 'BuildingStorefrontIcon',
  },
  {
    id: 'kids',
    name: 'Espacios Kids',
    description:
      'Áreas de juego supervisadas, talleres creativos y espectáculos familiares durante todo el año.',
    icon: 'UsersIcon',
  },
  {
    id: 'parking',
    name: 'Estacionamiento inteligente',
    description:
      'Gestión digital de acceso, cargadores para vehículos eléctricos y seguridad 24/7.',
    icon: 'TruckIcon',
  },
];

