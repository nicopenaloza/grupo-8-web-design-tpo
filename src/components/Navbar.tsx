import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import logoGaleria from "../assets/logo-galeria.svg";
import { navigation } from "../router";

type NavbarProps = {
	mobileMenuId: string;
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (value: boolean) => void;
};

export default function Navbar({
	mobileMenuId,
	mobileMenuOpen,
	setMobileMenuOpen,
}: NavbarProps) {
	const location = useLocation();

	const isActive = (path: string) => {
		if (path === "/") {
			return location.pathname === "/";
		}
		return location.pathname.startsWith(path);
	};

	return (
		<nav
			className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
			aria-label="Navegación principal"
		>
			<div className="flex items-center gap-8">
				<Link
					to="/"
					className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
				>
					<img
						src={logoGaleria}
						alt="Galería Urbana"
						className="h-8 w-auto"
						loading="eager"
					/>
					<span className="hidden text-lg font-semibold text-text sm:inline">
						Galería Urbana
					</span>
				</Link>

				<div className="hidden gap-1 lg:flex">
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
								isActive(item.href)
									? "bg-primary/10 text-primary"
									: "text-text-muted hover:bg-muted hover:text-text"
							}`}
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>

			<button
				type="button"
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				className="lg:hidden"
				aria-label={
					mobileMenuOpen
						? "Cerrar menú de navegación"
						: "Abrir menú de navegación"
				}
				aria-expanded={mobileMenuOpen}
				aria-controls={mobileMenuId}
			>
				{mobileMenuOpen ? (
					<XMarkIcon className="h-6 w-6 text-text" />
				) : (
					<Bars3Icon className="h-6 w-6 text-text" />
				)}
			</button>
		</nav>
	);
}
