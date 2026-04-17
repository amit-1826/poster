import { Routes } from '@angular/router';
import { Postlist } from './components/postlist/postlist';
import { CreatePost } from './components/create-post/create-post';
import { NotFound } from './components/not-found/not-found';
import { PostDetail } from './post-detail/post-detail';
import { Post } from './post/post';

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
