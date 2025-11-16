import { Link } from "react-router-dom";
import logoGaleria from "../assets/logo-galeria.svg";
import { navigation } from "../router";
import { useContext } from "react";
import { FaqWidgetProvider } from "../providers/FaqWidgetProvider";

export default function Footer() {
	const { setOpen } = useContext(FaqWidgetProvider);

	return (
		<footer className="border-t border-border bg-surface">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<img
							src={logoGaleria}
							alt="Galería Urbana"
							className="mb-4 h-8 w-auto"
							loading="lazy"
						/>
						<p className="text-sm text-text-muted">
							Cultura, diseño y gastronomía en el corazón de la
							ciudad.
						</p>
					</div>

					<div>
						<h3 className="mb-4 text-sm font-semibold text-text">
							Navegación
						</h3>
						<ul className="space-y-2 text-sm">
							{navigation.map((item) => (
								<li key={item.name}>
									<Link
										to={item.href}
										className="text-text-muted transition-colors hover:text-primary"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-sm font-semibold text-text">
							Información
						</h3>
						<ul className="space-y-2 text-sm text-text-muted">
							<li onClick={() => setOpen(true)} className="hover:cursor-pointer transition-colors hover:text-primary">
								Preguntas frecuentes
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t border-border pt-8 text-center text-sm text-text-muted">
					<p>
						&copy; {new Date().getFullYear()} Galería Urbana. Todos
						los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
