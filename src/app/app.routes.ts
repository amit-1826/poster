import { Routes } from '@angular/router';
import { Postlist } from './components/postlist/postlist';
import { CreatePost } from './components/create-post/create-post';
import { NotFound } from './components/not-found/not-found';
import { PostDetail } from './post-detail/post-detail';

export const routes: Routes = [
    {
        path: '',
        component: Postlist
    },
    {
        path: 'add',
        component: CreatePost
    },
    {
        path: ':id',
        component: PostDetail
    },
    {
        path: '**',
        component: NotFound
    }
];
