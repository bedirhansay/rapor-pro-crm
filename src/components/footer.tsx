import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white absolute rounded-lg bottom-0  w-full shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logosu" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CarInspect</span>
          </NavLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pr-4">
            <li>
              <NavLink to="/hakkinda" className="hover:underline me-4 md:me-6">
                Hakkında
              </NavLink>
            </li>
            <li>
              <NavLink to="/gizlilik-politikasi" className="hover:underline me-4 md:me-6">
                Gizlilik Politikası
              </NavLink>
            </li>
            <li>
              <NavLink to="/lisanslama" className="hover:underline me-4 md:me-6">
                Lisanslama
              </NavLink>
            </li>
            <li>
              <NavLink to="/iletisim" className="hover:underline">
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <NavLink to="/" className="hover:underline">
            CarInpect
          </NavLink>
          . Tüm Hakları Saklıdır.
        </span>
      </div>
    </footer>
  );
};
