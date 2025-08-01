import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
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

  isClickedState = false;

  inputText = '';

  @Input() childMessage = '';

  @Output() messageFromChild = new EventEmitter<string>();

  getFullName() {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = true;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('I am your son!');
  }
}
