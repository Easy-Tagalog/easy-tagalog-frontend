"use client";

import { NAVBAR_LINKS } from "@/config";
import { Button } from "./ui/button";

type NavbarLink = (typeof NAVBAR_LINKS)[number];

interface NavItemProps {
  link: NavbarLink;
  handleOpen: () => void;
  isOpen: boolean;
}

export default function NavItem({ link, handleOpen, isOpen }: NavItemProps) {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {link.label}
        </Button>
      </div>
    </div>
  );
}
