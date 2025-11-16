import type { FC } from 'react';

type MapEmbedProps = {
  address?: string;
  embedUrl?: string;
};

const MapEmbed: FC<MapEmbedProps> = ({
  address = 'Av. Corrientes 1234, C1043 CABA, Argentina',
  embedUrl,
}) => {
  const defaultEmbedUrl = embedUrl || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276847!2d-58.38157042344336!3d-34.60373887295403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf425c8e4f%3A0x1c557e5f8f8f8f8f!2sAv.%20Corrientes%201234%2C%20C1043%20CABA!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar`;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-subtle">
      <div className="aspect-video w-full overflow-hidden">
        <iframe
          src={defaultEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ubicación: ${address}`}
          aria-label={`Mapa interactivo mostrando la ubicación en ${address}`}
        />
      </div>
      <div className="border-t border-border bg-muted/30 p-4">
        <p className="text-sm text-text-muted">
          <strong className="text-text">Dirección:</strong> {address}
        </p>
      </div>
    </div>
  );
};

export default MapEmbed;

