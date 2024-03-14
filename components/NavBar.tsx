import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex min-w-screen gap-12 p-4 border-b-[1px] border-b-accent-foreground mb-5 text-xs items-center">
      <Link href="/">
        <FaBug className="hover:text-primary transistion-all ease-in-out duration-150" />
      </Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li
            key={link.label}
            className="text-muted-foreground hover:text-primary transistion-all ease-in-out duration-150"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
