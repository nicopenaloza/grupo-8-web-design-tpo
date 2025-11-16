import {
  BriefcaseIcon,
  BuildingStorefrontIcon,
  MapPinIcon,
  SparklesIcon,
  TruckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

const iconMap: Record<string, typeof MapPinIcon> = {
  MapPinIcon,
  BriefcaseIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  TruckIcon,
};

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || MapPinIcon;

  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-subtle transition-all duration-200 hover:border-primary/50 hover:shadow-lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text">{service.name}</h3>
      <p className="mb-4 text-sm text-text-muted">{service.description}</p>
      <Link
        to="/contacto"
        className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
      >
        Consultar
        <span className="ml-1" aria-hidden>
          →
        </span>
      </Link>
    </article>
  );
};

export default ServiceCard;

