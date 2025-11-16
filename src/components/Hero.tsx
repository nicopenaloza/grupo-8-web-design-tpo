import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import heroTexture from "../assets/logo-galeria.svg";
import { heroImage } from "../assets/placeholders";

const Hero = () => {
	return (
		<section
			className="relative isolate overflow-hidden rounded-3xl bg-surface shadow-subtle"
			aria-labelledby="hero-heading"
		>
			<div className="absolute inset-0">
				<img
					src={heroImage}
					alt="Vista panorámica del interior de Galería Urbana"
					className="h-full w-full object-cover"
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-[#2a1f16]/55 mix-blend-multiply" />
			</div>

			<div className="relative grid gap-8 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-center lg:py-20">
				<div className="max-w-xl space-y-5 text-white">
					<span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
						Galería Urbana
					</span>
					<h1
						id="hero-heading"
						className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
					>
						Cultura, diseño y gastronomía en el corazón de la
						ciudad.
					</h1>
					<p className="text-lg text-white/80">
						Explorá experiencias urbanas en nuestros espacios
						modulables, propuestas gastronómicas de autor y una
						agenda viva de eventos.
					</p>
					<div className="flex flex-wrap items-center gap-4">
						<Link
							to="/locales"
							className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-subtle transition hover:bg-white hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
						>
							Ver locales
							<ArrowRightIcon
								className="h-4 w-4"
								aria-hidden
							/>
						</Link>
						<Link
							to="/eventos"
							className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
						>
							Agenda de eventos
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex">
					<div className="relative w-full overflow-hidden rounded-3xl bg-surface p-6 shadow-xl backdrop-blur-lg">
						<img
							src={heroTexture}
							alt="Isotipo Galería Urbana"
							className="h-12 w-auto"
							loading="lazy"
						/>
						<dl className="mt-8 space-y-4 text-sm text-secondary">
							<div className="flex justify-between border-b border-border pb-4">
								<dt className="font-medium">Espacio total</dt>
								<dd>38.000 m²</dd>
							</div>
							<div className="flex justify-between border-b border-border pb-4">
								<dt className="font-medium">Locales activos</dt>
								<dd>+180 propuestas</dd>
							</div>
							<div className="flex justify-between">
								<dt className="font-medium">Próximo evento</dt>
								<dd>Arte vivo · 5 de este mes</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
