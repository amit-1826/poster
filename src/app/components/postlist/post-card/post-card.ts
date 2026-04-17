import { Component, inject, input, output, signal } from '@angular/core';
import { IPost } from '../../../common/post.model';
import { Highlight } from '../../../directives/highlight';
import { TitleCasePipe } from '@angular/common';
import { AbbreviateNumberPipe } from '../../../common/abbreviate-number.pipe';
import { RelativeTimePipe } from '../../../common/pipes/relative-time-pipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [
    Highlight,
    TitleCasePipe,
    RelativeTimePipe,
    AbbreviateNumberPipe
  ],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard {
  post = input.required<IPost>();
  like = output<number>();

  router = inject(Router);
  route = inject(ActivatedRoute);

  likePost(event: Event) {
    event.stopPropagation();
    this.like.emit(this.post().id);
  }

  viewDetail() {
    this.router.navigate(['posts', this.post().id]);
  }
}
