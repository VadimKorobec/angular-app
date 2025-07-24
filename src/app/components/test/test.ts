import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  title = 'This is an interpolation.';
  firstName = 'Cat';
  lastName = 'Simple';

  isEnabled = false;

  getFullName() {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }
}
