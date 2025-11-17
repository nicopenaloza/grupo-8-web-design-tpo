import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Servicios = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold text-text sm:text-4xl">
          Servicios
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Descubrí todos los servicios que Galería Urbana tiene para ofrecerte
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Servicios;

