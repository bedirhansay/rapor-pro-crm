import { jsx as _jsx } from "react/jsx-runtime";
import { LoginPage } from '@/pages/auth/login/login-page';
import { DashboardPage } from '@/pages/dasboard/dasboard-page';
export const authRoutes = [{ path: '/login', component: _jsx(LoginPage, {}) }];
export const userRoutes = [{ path: '/', component: _jsx(DashboardPage, {}) }];
