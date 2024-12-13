import { NavLink, useLocation } from 'react-router-dom';
import sidebarItems from './constant';

const BaseSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="p-2 px-6 h-screen bg-background">
      <div className="text-3xl p-4 flex flex-col gap-4 ">Logo</div>
      {sidebarItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={`group relative  my-2 flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-foreground duration-300 ease-in-out hover:bg-neutral-300  dark:hover:bg-gray-800 ${
            item.activePaths.includes(pathname) && 'bg-neutral-500  dark:bg-neutral-100'
          }`}
        >
          {item.icon}
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default BaseSidebar;
