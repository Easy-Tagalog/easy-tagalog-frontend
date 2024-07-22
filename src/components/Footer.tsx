import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center gap-8 px-2 border-t py-2 bg-ph-yellow/90">
      <Link href="/" className="transition-all hover:text-red-600">
        <Logo />
      </Link>

      <p className="text-xs sm:text-sm">
        2023 Easy Tagalog. All rights reserved.
      </p>
    </footer>
  );
}
