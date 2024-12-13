import { useLocation } from 'react-router-dom';
import BaseSidebar from './base-sidebar';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="hidden lg:flex">
      <BaseSidebar />
    </div>
  );
};

export default Sidebar;
