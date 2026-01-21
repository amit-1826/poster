import { Component, input, OnInit } from '@angular/core';
import { IPost } from '../../../common/post.model';
import { NgClass } from '@angular/common';
import { Highlight } from '../../../directives/highlight';

@Component({
  selector: 'app-post-card',
  imports: [
    NgClass,
    Highlight
  ],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard {
  post = input.required<IPost>();
}
