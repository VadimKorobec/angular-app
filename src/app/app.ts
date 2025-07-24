import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './components/test/test';

@Component({
  selector: 'app-root',
  imports: [Test],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  messageFromParent = 'I am your father!!!';
  protected readonly title = signal('my-app');
}
