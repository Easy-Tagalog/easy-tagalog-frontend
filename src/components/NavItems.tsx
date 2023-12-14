"use client"; // Makes this a client side component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

import { NAVBAR_LINKS } from "@/config";

export default function NavItems() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 h-full items-center">
      {NAVBAR_LINKS.map((link, i) => {
        const isOpen = pathname === link.value;

        return (
          <Link
            href={link.value}
            className={buttonVariants({
              variant: isOpen ? "secondary" : "ghost",
            })}
            key={link.label}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
