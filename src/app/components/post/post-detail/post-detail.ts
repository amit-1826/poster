import { Component, inject, input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DUMMY_POSTS } from '../../../dummy-posts';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.scss'
})
export class PostDetail implements OnInit {

  private titleService = inject(Title);

  id = input();

  ngOnInit(): void {
    const currentPost = DUMMY_POSTS.find((element) => element.id == this.id());
    if (currentPost) {
      // Note: this is the recommended way to set the title for a specific page/component dynamically, instead of using the title strategy
      this.titleService.setTitle(`${currentPost.title} | Poster App`);
    }
  }
}
