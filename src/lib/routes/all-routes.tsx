import { LoginPage } from '@/pages/auth/login/login-page';
import { DashboardPage } from '@/pages/dasboard/dasboard-page';

export const authRoutes = [{ path: '/login', component: <LoginPage /> }];
export const userRoutes = [{ path: '/', component: <DashboardPage /> }];
