import Link from 'next/link';

import MaxWidthWrapper from './MaxWidthWrapper';
import Logo from './Logo';
import SearchBar from './SearchBar';
import MobileNav from './MobileNav';
import AuthNav from './AuthNav';

export default function Navbar() {
  // Test user
  const user = null;

  return (
    <header className="relative bg-white z-50 top-0 inset-x-0 h-16">
      <MaxWidthWrapper>
        <nav className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="transition-all hover:text-red-600">
                <Logo />
              </Link>

              <div className="hidden lg:block">
                <SearchBar className="w-80" />
              </div>
            </div>

            <div className="flex gap-4">
              <MobileNav />

              <div className="hidden lg:block">
                {user === null && <AuthNav />}
              </div>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}
