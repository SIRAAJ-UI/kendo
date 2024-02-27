import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages-module/pages-module.component').then(m => m.PagesModuleComponent)
    }
];
