import { Component, input, output } from '@angular/core';
import { IPost } from '../../../common/post.model';
import { Highlight } from '../../../directives/highlight';

@Component({
  selector: 'app-post-card',
  imports: [
    Highlight
  ],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard {
  post = input.required<IPost>();
  like = output<number>();

  likePost(event: Event) {
    event.stopPropagation();
    this.like.emit(this.post().id);
  }
}
