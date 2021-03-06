import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../state/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private authService: SessionService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit(): void {
    if (this.loginForm.valid) {
      console.log(`LoginComponent: Trying to sign in with: ${this.loginForm.value.email} and password: ${this.loginForm.value.password}.`);
      this.authService.login(this.loginForm.value).subscribe(() => {
        console.log('LoginComponent: Subscribed to session.')
      })
    }
  }
}
