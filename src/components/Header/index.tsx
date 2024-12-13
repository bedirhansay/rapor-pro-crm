import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, PlusCircle } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import LogoIcon from '../../images/icon/logo-icon.png';
import BaseSidebar from '../Sidebar/base-sidebar';
import { Button } from '../ui/button';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full  drop-shadow-1  bg-gray-100 dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Button aria-controls="sidebar" className=" lg:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="z-999">
              <BaseSidebar />
            </SheetContent>
          </Sheet>

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img className=" rounded-lg h-8" src={LogoIcon} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <NavLink to="/new-expertise">
            <Button>
              Yeni Rapor Başlat
              <PlusCircle />
            </Button>
          </NavLink>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
            <DropdownMessage />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
