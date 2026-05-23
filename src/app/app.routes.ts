import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        loadChildren: () => import('./components/post/posts.routes').then((featureRoute) => featureRoute.POST_ROUTES)
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found').then((c) => c.NotFound)
    }
];
