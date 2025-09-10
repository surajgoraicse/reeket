"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaUserAlt, FaUserGraduate, FaYoutube } from "react-icons/fa";
import { FaHeartPulse, FaSquareFacebook } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Badge } from "../ui/badge";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function MobileView() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="">
					<HiMenuAlt1 size={24} color="black" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						<span className="inline-flex items-center gap-2">
							<Image
								alt="profile"
								className="rounded-full h-10 w-10"
								width={100}
								height={100}
								src={
									"https://i.pinimg.com/736x/0c/c5/e2/0cc5e2a8fd8d7cd62089a8efa15d9713.jpg"
								}
							/>
							Hey Suraj
						</span>
					</SheetTitle>
					<SheetDescription>
						Fresh looks, anytime, anywhere.
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col gap-4 px-5">
					<h4 className="scroll-m-20 mb-2 text-sm font-semibold tracking-tight border-b pb-2">
						SHOP IN
					</h4>
					<Link href={"#"}>
						<span className="inline-flex items-center   gap-4">
							<FaUserGraduate size={20} />
							<p className="text-sm font-normal">MEN</p>
						</span>
					</Link>
					<Link href={"#"}>
						<span className="inline-flex items-center   gap-4">
							<FaUserGraduate size={20} />
							<p className="text-sm font-normal">WOMEN</p>
						</span>
					</Link>
					<Link href={"#"}>
						<span className="inline-flex items-center   gap-4">
							<FaUserGraduate size={20} />
							<p className="text-sm font-normal">KIDS</p>
						</span>
					</Link>
				</div>
				<div className="px-5 flex flex-col gap-4 mt-5">
					<h4 className="uppercase  scroll-m-20 mb-2 text-sm font-semibold tracking-tight border-b pb-2">
						profile
					</h4>
					<section className="flex justify-between ">
						<Link
							href={"#"}
							className="flex flex-col gap-2  items-center "
						>
							<div className="inline-flex border-gray-300 border p-2 bg-gray-50 shadow-xs rounded-xl">
								<FaUserAlt size={30} color="black" />
							</div>
							<p className="text-xs font-semibold">My Account</p>
						</Link>
						<Link
							href={"#"}
							className="flex flex-col gap-2  items-center "
						>
							<div className="inline-flex border-gray-300 border p-2 bg-gray-50 shadow-xs rounded-xl">
								<FaHeartPulse size={30} color="red" />
							</div>
							<p className="text-xs font-semibold">My Wishlist</p>
						</Link>
						<Link
							href={"#"}
							className="flex flex-col gap-2  items-center "
						>
							<div className="inline-flex border-gray-300 border p-2 bg-gray-50 shadow-xs rounded-xl">
								<TbTruckDelivery size={30} color="green" />
							</div>
							<p className="text-xs font-semibold">My Order</p>
						</Link>
					</section>
				</div>
				<div className="px-5 flex flex-col gap-4 mt-5">
					<h4 className="uppercase  scroll-m-20 mb-2 text-sm font-semibold tracking-tight border-b pb-2">
						CONTACT US
					</h4>
					<Link className="text-sm" href={"#"}>
						Help & Support
					</Link>
					<Link className="text-sm" href={"#"}>
						Feedback & Suggestions
					</Link>
					<div className="flex justify-around">
						<Badge variant="outline" className="p-2 rounded-full">
							<FaSquareFacebook size={25} color="blue" />
						</Badge>
						<Badge variant="outline" className="p-2 rounded-full">
							<AiFillInstagram size={25} color="blue" />
						</Badge>
						<Badge variant="outline" className="p-2 rounded-full">
							<AiFillTikTok size={25} color="#FE2C55" />
						</Badge>
						<Badge variant="outline" className="p-2 rounded-full">
							<FaYoutube size={25} color="#FF0000" />
						</Badge>
					</div>
				</div>

				<SheetFooter>
					<SheetClose asChild>
						<Button variant="outline">Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b w-full shadow-xs">
			<nav className=" flex px-4 md:px-6 max-w-screen-xl mx-auto py-2  justify-between items-center">
				<NavigationMenu viewport={false} className=" ">
					<NavigationMenuList>
						<section className="group flex flex-1 list-none items-center justify-center gap-1">
							<NavigationMenuItem className="lg:hidden">
								<MobileView />
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									<Link href="/">LOGO</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<section className="hidden lg:flex group flex-1 list-none items-center justify-center gap-1">
								<NavigationMenuItem>
									<NavigationMenuTrigger>
										MEN
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
											<li className="row-span-3">
												<NavigationMenuLink asChild>
													<a
														className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
														href="/"
													>
														<div className="mt-4 mb-2 text-lg font-medium">
															shadcn/ui
														</div>
														<p className="text-muted-foreground text-sm leading-tight">
															Beautifully designed
															components built
															with Tailwind CSS.
														</p>
													</a>
												</NavigationMenuLink>
											</li>
											<ListItem
												href="/docs"
												title="Introduction"
											>
												Re-usable components built using
												Radix UI and Tailwind CSS.
											</ListItem>
											<ListItem
												href="/docs/installation"
												title="Installation"
											>
												How to install dependencies and
												structure your app.
											</ListItem>
											<ListItem
												href="/docs/primitives/typography"
												title="Typography"
											>
												Styles for headings, paragraphs,
												lists...etc
											</ListItem>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger>
										WOMEN
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											{components.map((component) => (
												<ListItem
													key={component.title}
													title={component.title}
													href={component.href}
												>
													{component.description}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger>
										KIDS
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
											{components.map((component) => (
												<ListItem
													key={component.title}
													title={component.title}
													href={component.href}
												>
													{component.description}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</section>
						</section>
					</NavigationMenuList>
				</NavigationMenu>
				<NavigationMenu viewport={false}>
					<NavigationMenuList>
						<section className="group flex flex-1 list-none items-center justify-center gap-1">
							<NavigationMenuItem>
								<Input
									placeholder="Search"
									type="search"
									className="hidden lg:flex"
								/>
							</NavigationMenuItem>
							<NavigationMenuItem className="hidden md:flex">
								<NavigationMenuTrigger>
									<User
										color="black"
										size={16}
										strokeWidth={2.25}
									/>
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[200px] gap-4">
										<li>
											<NavigationMenuLink asChild>
												<Link href="#">Components</Link>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<Link href="#">
													Documentation
												</Link>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<Link href="#">Blocks</Link>
											</NavigationMenuLink>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									<Link href="/docs">
										<Heart color="black" />
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									<Link href="/docs">
										<MdShoppingCart color="black" />
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</section>
					</NavigationMenuList>
				</NavigationMenu>
			</nav>
		</header>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="text-sm leading-none font-medium">
						{title}
					</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
