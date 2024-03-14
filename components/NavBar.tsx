"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
  const path = usePathname();
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
            className={classnames({
              "text-white": link.href === path,
              "text-muted-foreground": link.href !== path,
              "hover:text-primary transition-colors": link.href !== path,
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
