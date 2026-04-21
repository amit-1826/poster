import { Component, inject, input, output, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Highlight } from '../../../../common/directives/highlight';
import { RelativeTimePipe } from '../../../../common/pipes/relative-time-pipe';
import { AbbreviateNumberPipe } from '../../../../common/pipes/abbreviate-number.pipe';
import { IPost } from '../../../../common/models/post.model';

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
