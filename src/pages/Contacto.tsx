import { useState } from 'react';
import toast from 'react-hot-toast';
import MapEmbed from '../components/MapEmbed';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('¡Mensaje enviado! Te responderemos pronto.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-semibold text-text sm:text-4xl">
          Contacto
        </h1>
        <p className="mt-4 text-lg text-text-muted">
          Estamos aquí para ayudarte. Enviános tu consulta y te responderemos a
          la brevedad.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoFocus
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-border bg-muted/60 px-4 py-2.5 text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-border bg-muted/60 px-4 py-2.5 text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-border bg-muted/60 px-4 py-2.5 text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Tu mensaje..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>

          <div className="mt-12 space-y-6 rounded-xl border border-border bg-surface p-6 shadow-subtle">
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
                Teléfono
              </h3>
              <a
                href="tel:+541123456789"
                className="text-text transition-colors hover:text-primary"
              >
                +54 11 2345-6789
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Email
              </h3>
              <a
                href="mailto:info@galeriaurbana.com"
                className="text-text transition-colors hover:text-primary"
              >
                info@galeriaurbana.com
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Horarios
              </h3>
              <dl className="space-y-1 text-sm text-text">
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
          </div>
        </div>

        <div>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
};

export default Contacto;

