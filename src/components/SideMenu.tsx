import { Link, useLocation } from "react-router-dom";
import { navigation } from "../router";

type MenuProps = {
	mobileMenuId: string;
	setMobileMenuOpen: (value: boolean) => void;
};
export default function SideMenu({
	mobileMenuId,
	setMobileMenuOpen,
}: MenuProps) {
	const location = useLocation();

	const isActive = (path: string) => {
		if (path === "/") {
			return location.pathname === "/";
		}
		return location.pathname.startsWith(path);
	};

	return (
		<div
			className="border-t border-border bg-surface lg:hidden"
			id={mobileMenuId}
		>
			<div className="space-y-1 px-4 pb-4 pt-2">
				{navigation.map((item) => (
					<Link
						key={item.name}
						to={item.href}
						onClick={() => setMobileMenuOpen(false)}
						className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
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
	);
}
