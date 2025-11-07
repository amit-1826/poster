import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postlist',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './postlist.html',
  styleUrl: './postlist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Postlist {
  postList: { id: number, title: string, type: string, content: string | null, image: string }[] = [
    {
      id: 1,
      title: 'Post Title 1',
      content: null,
      type: 'Private',
      image: 'https://picsum.photos/200?random=1'
    },
    {
      id: 2,
      title: 'Post Title 2',
      type: 'Public',
      content: "This is the content of the post 2.",
      image: 'https://picsum.photos/200?random=2'
    }
  ]
}
