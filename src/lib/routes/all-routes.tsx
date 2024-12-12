import { LoginPage } from '@/pages/expertise/pages/auth/login/login-page';

import PageTitle from '@/components/PageTitle';
import SignIn from '@/pages/Authentication/SignIn';
import SignUp from '@/pages/Authentication/SignUp';
import ECommerce from '@/pages/Dashboard/ECommerce';
import FormElements from '@/pages/Form/FormElements';
import Profile from '@/pages/Profile';
import { Calendar, Settings } from 'lucide-react';
import Alerts from '@/pages/UiElements/Alerts';
import Buttons from '@/pages/UiElements/Buttons';
import Chart from '@/pages/Chart';
import Tables from '@/pages/Tables';
import FormLayout from '@/pages/Form/FormLayout';

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
    path: '/calendar',
    component: (
      <>
        <PageTitle title="Calendar | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <Calendar />
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
  {
    path: '/ui/alerts',
    component: (
      <>
        <PageTitle title="Alerts | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <Alerts />
      </>
    ),
  },
  {
    path: '/ui/buttons',
    component: (
      <>
        <PageTitle title="Buttons | Rapor Pro - Tailwind CSS Admin Dashboard Template" />
        <Buttons />
      </>
    ),
  },
];
