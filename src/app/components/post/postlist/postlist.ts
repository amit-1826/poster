import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostCard } from "./post-card/post-card";
import { AutoFocus } from '../../../common/directives/auto-focus';
import { IPost } from '../../../common/models/post.model';
import { DUMMY_POSTS } from '../../../dummy-posts';

@Component({
  selector: 'app-postlist',
  imports: [FormsModule, AutoFocus, PostCard],
  templateUrl: './postlist.html',
  styleUrl: './postlist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Postlist {

  searchTerm = signal<string>('');

  postList = signal<IPost[]>(
    DUMMY_POSTS
  )

  filteredPosts = computed(() => {

    const search = this.searchTerm().toLowerCase();
    if (!search) {
      return this.postList();
    }

    return [...this.postList()].filter(post =>
      post.title.toLowerCase().includes(search)
    );
  })


  onInputChange($event: Event) {
    const input = ($event.target as HTMLInputElement).value.toLowerCase();
    this.searchTerm.set(input);
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
