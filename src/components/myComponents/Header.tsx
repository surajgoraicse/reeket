import { Navbar } from "./Navbar";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b w-full shadow-xs  ">
			<Navbar />
		</header>
	);
};

export default Header;
