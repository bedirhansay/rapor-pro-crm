import { BarChart2, Calendar, Edit, FileText, LayoutGrid, LogIn, Table, UserPlus } from 'lucide-react';

export const sidebarItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <LayoutGrid size={20} />,
    activePaths: ['/', '/dashboard'],
  },

  {
    title: 'Form Layout',
    path: '/forms/form-layout',
    icon: <FileText size={20} />,
    activePaths: ['/forms/form-layout'],
  },
  {
    title: 'Form Elements',
    path: '/forms/form-elements',
    icon: <Edit size={20} />,
    activePaths: ['/forms/form-elements'],
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <Calendar size={20} />,
    activePaths: ['/calendar'],
  },
  {
    title: 'Tables',
    path: '/tables',
    icon: <Table size={20} />,
    activePaths: ['/tables'],
  },
  {
    title: 'Chart',
    path: '/chart',
    icon: <BarChart2 size={20} />,
    activePaths: ['/chart'],
  },

  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: <UserPlus size={20} />,
    activePaths: ['/auth/signup'],
  },
  {
    title: 'Sign In',
    path: '/auth/signin',
    icon: <LogIn size={20} />,
    activePaths: ['/auth/signin'],
  },
];

export default sidebarItems;
