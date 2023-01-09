import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultInputComponent} from "../../forms/default-input/default-input.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DefaultInputComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor() { }

  onInputValueChanged(value: string) {
    console.log("value: ", value)
  }


}
