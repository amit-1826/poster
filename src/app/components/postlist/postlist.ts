import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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

  searchTerm = signal<string>('');

  postList = signal<IPost[]>(
    [
      {
        id: 1,
        title: 'first post',
        content: null,
        type: 'Private',
        image: 'https://picsum.photos/200?random=1',
        likes: 12345,
        publishedAt: new Date('2026-02-12')
      },
      {
        id: 2,
        title: 'SECOND POST',
        type: 'Public',
        content: "This is the content of the post 2.",
        image: 'https://picsum.photos/200?random=2',
        likes: 17895457,
        publishedAt: new Date()
      }
    ]
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
