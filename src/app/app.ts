import { Component, signal } from '@angular/core';

import { HeaderComponent } from './components/header/header';
import { Postlist } from "./components/postlist/postlist";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, Postlist],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('poster');
}
