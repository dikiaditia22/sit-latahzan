"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/profile",
		label: "Profile",
	},
	{
		href: "/prestasi",
		label: "Prestasi",
	},
	{
		href: "/ppdb",
		label: "PPDB",
	},
];

const NavItem = ({ href, label }) => {
	return (
		<li key={label} className="group relative">
			<Link href={href}>{label}</Link>
			<div className="absolute w-full h-[2px] rounded bg-black scale-x-0 transition-transform group-hover:scale-x-100 origin-left" />
		</li>
	);
};

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full h-24 bg-transparent py-2">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex gap-1">
					<a
						href="https://jsit.id/"
						className="inline-flex h-20"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							width={1600}
							height={1483}
							src="/assets/jsit.png"
							alt="JSIT"
							className="w-full h-full object-cover"
						/>
					</a>
					<Link href="/" className="inline-flex h-20">
						<Image
							width={1600}
							height={1474}
							src="/assets/sit-latahzan.png"
							alt="SIT Latahzan"
							className="w-full h-full object-cover"
						/>
					</Link>
				</div>

				<nav>
					<ul className="flex items-center gap-6">
						{links.map((link, _) => (
							<NavItem key={link.label} {...link} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
