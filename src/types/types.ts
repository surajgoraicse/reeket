export type NavItem = {
	label: string;
	href?: string; // if absent, it’s a parent (has children)
	external?: boolean; // open in new tab
	children?: NavItem[]; // dropdown items
};
export type NavbarProps = {
	items: NavItem[];
	logo?: React.ReactNode;
};