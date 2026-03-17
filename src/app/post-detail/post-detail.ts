import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.scss'
})
export class PostDetail implements OnInit {
  id = input();

  ngOnInit(): void {
    console.log('Post ID:', this.id());
  }
}
