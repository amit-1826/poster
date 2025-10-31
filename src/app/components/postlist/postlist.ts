import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postlist',
  imports: [FormsModule],
  templateUrl: './postlist.html',
  styleUrl: './postlist.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Postlist {
  title = signal('Initial Title');
  postObject = {
    title: 'Post Title',
    content: 'This is the content of the post.',
    image: 'https://picsum.photos/200'
  }

  fetchingData = signal(false);

  changeTitle() {
    this.title.set('Title Changed!');
  }
}
