import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocus } from '../../directives/auto-focus';
import { IPost } from '../../common/post.model';
import { PostCard } from "./post-card/post-card";
import { Title } from '@angular/platform-browser';
import { DUMMY_POSTS } from '../../dummy-posts';

@Component({
  selector: 'app-postlist',
  imports: [FormsModule, AutoFocus, PostCard],
  templateUrl: './postlist.html',
  styleUrl: './postlist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Postlist implements OnInit {

  private titleService = inject(Title);

  searchTerm = signal<string>('');

  postList = signal<IPost[]>(
    DUMMY_POSTS
  )

  ngOnInit(): void {
    // this.titleService.setTitle('PostsList | Poster App');
  }

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
