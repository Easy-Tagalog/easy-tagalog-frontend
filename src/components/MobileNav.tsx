import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Separator } from './ui/separator';

import Logo from './Logo';
import AuthNav from './AuthNav';
import SearchBar from './SearchBar';

export default function MobileNav() {
  return (
    <nav className="lg:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="transition-all hover:text-ph-red" />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white lg:hidden">
          <Logo width={150} height={150} />
          <Separator className="border border-gray-50" />

          <SearchBar />
          <div className="lg:hidden">
            <AuthNav />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
