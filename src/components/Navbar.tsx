// Use inset-x-0 so it spans all the way from the left to the right

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  // Test user
  const user = null;

  return (
    <header className="relative bg-white z-50 top-0 inset-x-0 h-16">
      <MaxWidthWrapper>
        <nav className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* TODO: Mobile nav */}

            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden md:flex lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? null : (
                  <Link
                    href="sign-in"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Sign in
                  </Link>
                )}

                {user ? null : (
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                )}

                {user ? (
                  <p></p>
                ) : (
                  <Link
                    href="/sign-up"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Create Account
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
