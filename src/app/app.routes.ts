import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./views/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./views/pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout').then((m) => m.DefaultLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/routes').then((m) => m.routes),
      },
      {
        path: '',
        loadChildren: () =>
          import('./views/document-layout/routes').then(
            (r) => r.DocumentRoutes
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./views/template-layout/routes').then(
            (r) => r.TemplateRoutes
          ),
      },
      {
        path: 'create-contact',
        loadComponent: () =>
          import('./views/create-contact/create-contact.component').then(
            (c) => c.CreateContactComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./views/pages/page404/page404.component').then(
        (c) => c.Page404Component
      ),
  },
];
