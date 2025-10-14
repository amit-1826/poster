import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-postlist',
  imports: [],
  templateUrl: './postlist.html',
  styleUrl: './postlist.scss'
})
export class Postlist {
  postObject = {
    title: 'Post Title',
    content: 'This is the content of the post.',
    image: 'https://picsum.photos/200'
  }

  fetchingData = signal(false);

  inputChange(event: Event) {
    console.log('Input changed', (event.target as HTMLInputElement).value);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Submitted');
  }
}
