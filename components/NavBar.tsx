"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";
import { Button } from "./ui/button";

const NavBar = () => {
  const path = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex sticky min-w-screen p-4 px-96 justify-center border-b-[1px] border-b-accent-foreground mb-5 text-[1rem] items-center">
      <div className="flex gap-4 flex-1 items-center max-w-[40vw]">
        <Link href="/">
          <FaBug className="hover:text-primary-foreground transistion-all ease-in-out duration-150" />
        </Link>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li
              key={link.label}
              className={classnames({
                "text-white": link.href === path,
                "text-muted-foreground": link.href !== path,
                "hover:text-primary-foreground transition-colors":
                  link.href !== path,
              })}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button
          variant={"default"}
          className="rounded-[3px] max-h-[25px] text-[10px]"
          size={"sm"}
        >
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
