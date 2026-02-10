import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocus } from '../../directives/auto-focus';
import { IPost } from '../../common/post.model';
import { PostCard } from "./post-card/post-card";

@Component({
  selector: 'app-postlist',
  imports: [FormsModule, AutoFocus, PostCard],
  templateUrl: './postlist.html',
  styleUrl: './postlist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Postlist {
  postList = signal<IPost[]>(
    [
      {
        id: 1,
        title: 'Post Title 1',
        content: null,
        type: 'Private',
        image: 'https://picsum.photos/200?random=1',
        likes: 0
      },
      {
        id: 2,
        title: 'Post Title 2',
        type: 'Public',
        content: "This is the content of the post 2.",
        image: 'https://picsum.photos/200?random=2',
        likes: 1
      }
    ]
  )

  filteredPosts = this.postList();


  filterPosts($event: Event) {
    const input = ($event.target as HTMLInputElement).value.toLowerCase();
    this.filteredPosts = this.postList().filter(post =>
      post.title.toLowerCase().includes(input)
    );
  }

  likePost(id: number) {
    this.postList.update((prevState) => {
      return prevState.map((post) => {
        if (post.id === id) {
          post.likes++;
        }
        return post;
      })
    })
  }
}
