export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Promotion = {
  id: string;
  title: string;
  image: string;
  url?: string;
  dateRange: string;
  description?: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  time?: string;
  place: string;
  description: string;
  banner?: string;
};

export type ShopCategory =
  | 'indumentaria'
  | 'calzado'
  | 'comida'
  | 'hogar'
  | 'tecnologia'
  | 'servicios'
  | 'entretenimiento';

export type Shop = {
  id: string;
  name: string;
  logo: string;
  category: ShopCategory;
  location: string;
  shortDescription: string;
  tags: string[];
};

