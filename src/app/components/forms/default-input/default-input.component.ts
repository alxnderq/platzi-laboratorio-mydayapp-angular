import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-default-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './default-input.component.html',
  styleUrls: ['./default-input.component.css']
})
export class DefaultInputComponent {

  @Input() placeholder: string;
  @Output() valueChanged: EventEmitter<string>;

  myTask: string;

  constructor() {
    this.placeholder = '';
    this.myTask = '';
    this.valueChanged = new EventEmitter<string>();
  }

  writeChanges(value: string) {
    this.myTask = '';
    this.valueChanged.emit(value);
  }

  onEnter(value: string) {
    const valueTrim: string = value.trim();
    const valueChanged: boolean = value.length === valueTrim.length;
    if (valueChanged) {
      this.writeChanges(value);
    }
  }


}
