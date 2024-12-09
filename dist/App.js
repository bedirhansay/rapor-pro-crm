import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/not-found';
import { NonLayout } from './layouts/non-layout';
import { RootLayout } from './layouts/root-layout';
import { authRoutes, userRoutes } from './lib/routes/all-routes';
export const App = () => {
    return (_jsxs(Routes, { children: [authRoutes.map((route, idx) => (_jsx(Route, { path: route.path, element: _jsx(NonLayout, { children: route.component }) }, idx + 'auth'))), userRoutes.map((route, idx) => (_jsx(Route, { path: route.path, element: _jsx(RootLayout, { children: route.component }) }, idx + 'user'))), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }));
};
