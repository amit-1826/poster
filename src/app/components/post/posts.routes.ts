import { Routes } from "@angular/router";
import { Post } from "./post";

export const POST_ROUTES: Routes = [
    {
        path: '',
        component: Post,
        children: [
            {
                path: '',
                loadComponent: () => import('./postlist/postlist').then((c) => c.Postlist),
                title: 'PostsList'
            },
            {
                path: 'add',
                loadComponent: () => import('./create-post/create-post').then((c) => c.CreatePost),
                title: 'Add Post'
            },
            {
                path: ':id',
                loadComponent: () => import('./post-detail/post-detail').then((c) => c.PostDetail),
            },
        ]
    }
]