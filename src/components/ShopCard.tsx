import { MapPinIcon } from '@heroicons/react/24/outline';
import type { Shop } from '../types';

type ShopCardProps = {
  shop: Shop;
  onViewMap?: (shop: Shop) => void;
};

const ShopCard = ({ shop, onViewMap }: ShopCardProps) => {
  return (
    <article id={shop.id} className="group overflow-hidden rounded-xl border border-border bg-surface shadow-subtle transition-all duration-200 hover:border-primary/50 hover:shadow-lg flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={shop.logo}
          alt={`Logo de ${shop.name}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-text">{shop.name}</h3>
          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {shop.category}
          </span>
        </div>
        <p className="mb-3 text-sm text-text-muted line-clamp-2">
          {shop.shortDescription}
        </p>
        <div className="mb-3 flex items-center gap-1.5 text-xs text-text-muted">
          <MapPinIcon className="h-4 w-4 shrink-0" aria-hidden />
          <span>{shop.location}</span>
        </div>
        {shop.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {shop.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {onViewMap && (
          <button
            type="button"
            onClick={() => onViewMap(shop)}
            className="w-full rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary mt-auto"
          >
            Ver en mapa
          </button>
        )}
      </div>
    </article>
  );
};

export default ShopCard;

