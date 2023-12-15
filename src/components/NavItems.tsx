"use client"; // Makes this a client side component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

import { NAVBAR_LINKS } from "@/config";

export default function NavItems() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4 h-fit w-full items-start lg:h-full lg:flex-row">
      {NAVBAR_LINKS.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li key={link.label}>
            <Link
              href={link.route}
              className={buttonVariants({
                variant: isActive ? "secondary" : "ghost",
              })}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
