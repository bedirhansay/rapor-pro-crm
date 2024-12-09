import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/not-found';
import { NonLayout } from './layouts/non-layout';
import { RootLayout } from './layouts/root-layout';
import { authRoutes, userRoutes } from './lib/routes/all-routes';

export const App = () => {
  return (
    <Routes>
      {authRoutes.map((route, idx) => (
        <Route path={route.path} element={<NonLayout>{route.component}</NonLayout>} key={idx + 'auth'} />
      ))}

      {userRoutes.map((route, idx) => (
        <Route path={route.path} element={<RootLayout>{route.component}</RootLayout>} key={idx + 'user'} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
