import { Component, ElementRef, ViewChild } from '@angular/core';
import { SignInBoxComponent } from '../sign-in-box/sign-in-box.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInBoxComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titleMessage: string = "Sign in";
  inputMessage: string = "Email or mobile phone number";
  usernameEntered: boolean = false;

  @ViewChild('createAccountButton') createAccountButton!: ElementRef;
  @ViewChild('otherInfoMessage') otherInfoMessage!: ElementRef;

  submit() {
    if (this.inputMessage == "Email or mobile phone number") {
      // inputting email: stay on this page, switch to password
      this.inputMessage = "Password";
    } else {
      this.titleMessage = "Uh oh.";
      this.inputMessage = "You just fell for a phishing scam. :(";
    }
  }

  createAccount() {
    if (this.titleMessage == "Sign in") {
      this.titleMessage = "Register";
      this.otherInfoMessage.nativeElement.textContent="Already have an account?";
      this.createAccountButton.nativeElement.textContent = "Sign in";
    } else {
      this.titleMessage = "Sign in";
      this.otherInfoMessage.nativeElement.textContent= "New to Amazon?";
      this.createAccountButton.nativeElement.textContent = "Create your Amazon account";
    }
  }
}