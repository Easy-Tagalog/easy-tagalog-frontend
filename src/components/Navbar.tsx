import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "./Logo";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import AuthNav from "./AuthNav";

export default function Navbar() {
  // Test user
  const user = null;

  return (
    <header className="relative bg-white z-50 top-0 inset-x-0 h-16">
      <MaxWidthWrapper>
        <nav className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" className="transition-all hover:text-red-600">
                <Logo />
              </Link>
            </div>

            <div className="hidden lg:block">
              <NavItems />
            </div>

            <div className="flex gap-4">
              <MobileNav />

              <div className="hidden md:block">
                {user === null && <AuthNav />}
              </div>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
