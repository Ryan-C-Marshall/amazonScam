import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-sign-in-box',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-box.component.html',
  styleUrl: './sign-in-box.component.css'
})
export class SignInBoxComponent {
  @Input() titleMessage!:string;
  @Input() inputMessage!:string;
  @Output() submitted = new EventEmitter<string>();
  
  submit(inputBox: HTMLInputElement) {
    inputBox.value = "";
    this.submitted.emit();
    inputBox.type = "password";
  }
}
