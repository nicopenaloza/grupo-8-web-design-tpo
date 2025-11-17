import { Outlet } from "react-router-dom";
import ChatWidget from "../components/Faq/ChatWidget";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const MainLayout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<PageHeader />

			<main className="flex-1">
				<Outlet />
			</main>

			<Footer />
			<ChatWidget />
		</div>
	);
};

export default MainLayout;
