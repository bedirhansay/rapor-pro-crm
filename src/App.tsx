import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import { NotFound } from './components/not-found';
import DefaultLayout from './layout/DefaultLayout';
import { NonLayout } from './layout/non-layout';
import { authRoutes, userRoutes } from './lib/routes';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {authRoutes.map((route, idx) => (
        <Route path={route.path} element={<NonLayout>{route.component}</NonLayout>} key={idx + 'auth'} />
      ))}

      {userRoutes.map((route, idx) => (
        <Route path={route.path} element={<DefaultLayout>{route.component}</DefaultLayout>} key={idx + 'user'} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
