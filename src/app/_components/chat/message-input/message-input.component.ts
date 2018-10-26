import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent {
  message: string;
  @Output()
  valueChange = new EventEmitter();

  valueChanged() {
    this.valueChange.emit(this.message);
    this.message = '';
  }
}
