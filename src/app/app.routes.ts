import { Routes } from '@angular/router';
import { CreatePost } from './components/post/create-post/create-post';
import { NotFound } from './components/not-found/not-found';
import { Post } from './components/post/post';
import { PostDetail } from './components/post/post-detail/post-detail';
import { Postlist } from './components/post/postlist/postlist';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: Post,
        children: [
            {
                path: '',
                component: Postlist,
                title: 'PostsList'
            },
            {
                path: 'add',
                component: CreatePost,
                title: 'Add Post'
            },
            {
                path: ':id',
                component: PostDetail
            },
        ]
    },
    {
        path: '**',
        component: NotFound
    }
];
