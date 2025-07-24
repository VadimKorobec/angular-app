import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  title = 'This is an interpolation.';
  firstName = 'Cat';
  lastName = 'Simple';

  isEnabled = false;

  isActive = true;
  isDisabled = false;

  getFullName() {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }
}
