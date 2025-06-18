import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Documents',
  },
  {
    name: 'Documents',
    url: '/documents',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Template',
    url: '/template',
    iconComponent: { name: 'cil-pencil' },
  },
  {
    name: 'Contacts',
    title: true,
  },
  {
    name: 'Contacts',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/create-contact',
  },

  {
    name: 'Team',
    url: '/team',
    iconComponent: { name: 'cil-calculator' },
  },
  {
    name: 'API',
    url: '/api',
    iconComponent: { name: 'cil-calculator' },
  },
  {
    name: 'Admin',
    url: '/admin',
    iconComponent: { name: 'cil-calculator' },
  },
  {
    name: 'Support',
    url: '/support',
    iconComponent: { name: 'cil-calculator' },
  },
  {
    name: 'Setting',
    url: '/setting',
    iconComponent: { name: 'cil-calculator' },
  },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'nav-icon-bullet',
  //     },
  //   ],
  // },
];
