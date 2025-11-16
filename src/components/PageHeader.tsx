import { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

export default function PageHeader() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const mobileMenuId = "mobile-navigation";

	return (
		<header className="sticky top-0 z-30 border-b border-border bg-background backdrop-blur-sm">
			<Navbar
				mobileMenuId={mobileMenuId}
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>

			{mobileMenuOpen && (
				<SideMenu
					mobileMenuId={mobileMenuId}
					setMobileMenuOpen={setMobileMenuOpen}
				/>
			)}
		</header>
	);
}
