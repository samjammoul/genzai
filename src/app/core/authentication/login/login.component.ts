import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../auth.facade';
import { LoginForm } from '../Store/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginLabel = 'Login';
  signUpLabel = 'Sign up';
  loginBtnClass = 'longBtnG';
  singUpBtnClass = 'longBtnW';
  logoSize = 'BigSize';
  loginForm: FormGroup;
  error$ = this.authFacade.error$;
  isAuthenticated = false;
  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

  functioncall(event) {
    this.loginUser();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  loginUser() {
    const loginInformation: LoginForm = {
      userName: this.userName.value,
      password: this.password.value,
    };
    this.authFacade.loginUser(loginInformation);
    this.loginForm.reset();
  }
  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
