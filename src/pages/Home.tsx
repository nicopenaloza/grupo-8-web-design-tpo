import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import MapEmbed from '../components/MapEmbed';
import ServiceCard from '../components/ServiceCard';
import { events } from '../data/events';
import { promotions } from '../data/promotions';
import { services } from '../data/services';
import dayjs from 'dayjs';

const Home = () => {
  const upcomingEvents = events
    .filter((event) => dayjs(event.date).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-16">
        <Hero />

        <section aria-labelledby="promotions-heading">
          <h2 id="promotions-heading" className="sr-only">
            Promociones y novedades
          </h2>
          <Carousel promotions={promotions} autoplayDelay={5000} />
        </section>

        <section aria-labelledby="services-heading">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2
                id="services-heading"
                className="text-2xl font-semibold text-text sm:text-3xl"
              >
                Servicios
              </h2>
              <p className="mt-2 text-text-muted">
                Descubrí todo lo que Galería Urbana tiene para ofrecerte
              </p>
            </div>
            <Link
              to="/servicios"
              className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary sm:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              Ver todos
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary"
            >
              Ver todos los servicios
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        {upcomingEvents.length > 0 && (
          <section aria-labelledby="events-heading">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2
                  id="events-heading"
                  className="text-2xl font-semibold text-text sm:text-3xl"
                >
                  Próximos eventos
                </h2>
                <p className="mt-2 text-text-muted">
                  No te pierdas las actividades que tenemos preparadas
                </p>
              </div>
              <Link
                to="/eventos"
                className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary sm:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              >
                Ver todos
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="group overflow-hidden rounded-xl border border-border bg-surface shadow-subtle transition-all duration-200 hover:border-primary/50 hover:shadow-lg"
                >
                  {event.banner && (
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={event.banner}
                        alt={event.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                      {dayjs(event.date).format('DD MMM YYYY')}
                      {event.time && ` · ${event.time}`}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-text">
                      {event.title}
                    </h3>
                    <p className="mb-3 text-sm text-text-muted line-clamp-2">
                      {event.description}
                    </p>
                    <p className="text-xs text-text-muted">{event.place}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 text-center sm:hidden">
              <Link
                to="/eventos"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary"
              >
                Ver todos los eventos
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </section>
        )}

        <section
          aria-labelledby="location-heading"
          className="rounded-2xl border border-border bg-surface p-8 shadow-subtle"
        >
          <h2
            id="location-heading"
            className="mb-6 text-2xl font-semibold text-text sm:text-3xl"
          >
            Dónde estamos
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Dirección
                </h3>
                <p className="text-text">
                  Av. Corrientes 1234
                  <br />
                  C1043 CABA, Argentina
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Horarios de atención
                </h3>
                <dl className="space-y-1 text-text">
                  <div className="flex justify-between">
                    <dt>Lunes a Viernes</dt>
                    <dd>10:00 - 22:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sábados</dt>
                    <dd>10:00 - 23:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Domingos</dt>
                    <dd>12:00 - 22:00</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Contacto
                </h3>
                <p className="text-text">
                  <a
                    href="tel:+541123456789"
                    className="transition-colors hover:text-primary"
                  >
                    +54 11 2345-6789
                  </a>
                  <br />
                  <a
                    href="mailto:info@galeriaurbana.me"
                    className="transition-colors hover:text-primary"
                  >
                    info@galeriaurbana.me
                  </a>
                </p>
              </div>
            </div>
            <div>
              <MapEmbed />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

