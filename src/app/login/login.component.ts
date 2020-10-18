import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../state/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(/*private authService: SessionService, private router: Router*/) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit(): void {
    /*if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(() => {
        this.router.navigateByUrl('');
      })
    }*/
  }
}
