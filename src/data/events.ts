import dayjs from 'dayjs';
import { eventBanners } from '../assets/placeholders';
import type { Event } from '../types';

const banner = (index: keyof typeof eventBanners) => eventBanners[index];
const baseDate = dayjs().startOf('month');

export const events: Event[] = [
  {
    id: 'workshop-foto',
    title: 'Workshop fotografía urbana',
    date: baseDate.add(15, 'day').hour(17).toISOString(),
    time: '17:00',
    place: 'Lab Creativo · Nivel -1',
    description:
      'Recorrido guiado, tips de composición y edición mobile con práctica en exteriores.',
    banner: banner('fotografia'),
  },
  {
    id: 'hackaton-retail',
    title: 'Hackatón retail inteligente',
    date: baseDate.add(20, 'day').hour(9).toISOString(),
    time: '09:00',
    place: 'Cowork Labs · Nivel 2',
    description:
      'Equipos multidisciplinarios idean soluciones para experiencias phygital. Premios en créditos.',
    banner: banner('hackaton'),
  },
  {
    id: 'after-office-jazz',
    title: 'After office jazz',
    date: baseDate.add(23, 'day').hour(19).toISOString(),
    time: '19:00',
    place: 'Sky Bar · Nivel 4',
    description:
      'Jam session al atardecer con coctelería de autor y menú finger food.',
    banner: banner('jazz'),
  },
  {
    id: 'club-lectura',
    title: 'Club de lectura contemporánea',
    date: baseDate.add(26, 'day').hour(18).toISOString(),
    time: '18:00',
    place: 'Biblioteca Urbana · Nivel 1',
    description:
      'Encuentro mensual con escritores invitados, selección independiente y firma de ejemplares.',
    banner: banner('lectura')
  },
  {
    id: 'cine-foro',
    title: 'Cine foro: arquitectura y ciudad',
    date: baseDate.add(29, 'day').hour(19).toISOString(),
    time: '19:00',
    place: 'Microcine · Nivel -1',
    description:
      'Proyección de documental internacional y debate moderado por urbanistas locales.',
    banner: banner('cine')
  },
  {
    id: 'feria-editorial',
    title: 'Feria editorial independiente',
    date: baseDate.add(32, 'day').hour(13).toISOString(),
    time: '13:00',
    place: 'Galería prismática · Nivel 1',
    description:
      'Sellos emergentes, charlas de autor y espacios de firma. Acceso libre con cupo.',
    banner: banner('firma-libros')
  },
];

