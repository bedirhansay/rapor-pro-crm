import { LoginPage } from '@/pages/Authentication/login/login-page';

import PageTitle from '@/components/PageTitle';
import SignIn from '@/pages/Authentication/SignIn';
import SignUp from '@/pages/Authentication/SignUp';
import CalendarPage from '@/pages/Calendar';
import Chart from '@/pages/Chart';
import ECommerce from '@/pages/Dashboard/ECommerce';
import { NewExpertise } from '@/pages/expertise/expertise-page';
import FormElements from '@/pages/Form/FormElements';
import FormLayout from '@/pages/Form/FormLayout';

import Profile from '@/pages/Profile/index';
import Tables from '@/pages/Tables';
import { Settings } from 'lucide-react';

export const authRoutes = [
  {
    path: '/auth/signin',
    component: (
      <>
        <PageTitle title="Signin | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <SignIn />
      </>
    ),
  },
  {
    path: '/auth/signup',
    component: (
      <>
        <PageTitle title="Signup | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <SignUp />
      </>
    ),
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
];

export const userRoutes = [
  {
    path: '/',
    component: (
      <>
        <PageTitle title="eCommerce Dashboard | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <ECommerce />
      </>
    ),
  },
  {
    path: '/new-expertise',
    component: (
      <>
        <PageTitle title="Yeni Kayıt" />
        <NewExpertise />
      </>
    ),
  },
  {
    path: '/calendar',
    component: (
      <>
        <PageTitle title="Calendar | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <CalendarPage />
      </>
    ),
  },
  {
    path: '/profile',
    component: (
      <>
        <PageTitle title="Profile | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <Profile />
      </>
    ),
  },
  {
    path: '/forms/form-elements',
    component: (
      <>
        <PageTitle title="Form Elements | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <FormElements />
      </>
    ),
  },
  {
    path: '/forms/form-layout',
    component: (
      <>
        <PageTitle title="Form Layout | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <FormLayout />
      </>
    ),
  },
  {
    path: '/tables',
    component: (
      <>
        <PageTitle title="Tables | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <Tables />
      </>
    ),
  },
  {
    path: '/settings',
    component: (
      <>
        <PageTitle title="Settings | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <Settings />
      </>
    ),
  },
  {
    path: '/chart',
    component: (
      <>
        <PageTitle title="Basic Chart | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <Chart />
      </>
    ),
  },
];
