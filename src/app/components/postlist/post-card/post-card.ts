import { Component, input, output } from '@angular/core';
import { IPost } from '../../../common/post.model';
import { Highlight } from '../../../directives/highlight';
import { DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [
    Highlight,
    TitleCasePipe,
    DecimalPipe,
    DatePipe
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
