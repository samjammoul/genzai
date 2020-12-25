import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppState } from '../../app';
import { Observable, Subscription } from 'rxjs';
import { AuthFacade } from '../authentication/auth.facade';
import validate = WebAssembly.validate;
import { RegistrationForm } from '../authentication/Store/auth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  loginLabel = 'Login';
  signUpLabel = 'Sign up';
  loginBtnClass = 'longBtnW';
  singUpBtnClass = 'longBtnG';
  logoSize = 'BigSize';
  signUpForm: FormGroup;
  // prettier-ignore
  validationPattern =
    '^[a-zA-Z0-9 .\'_àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]+$';
  registered: boolean;

  /*
        Getting data from facade layer
   */
  error$ = this.authFacade.error$;
  protected registered$: Subscription = this.authFacade.registered$.subscribe(
    (res: boolean) => (this.registered = res),
    (error) => {}
  );

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

  ngOnInit() {
    this.signUpForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
            Validators.pattern('^[a-zA-Z0-9._-]+$'),
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
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(50),
          ],
        ],
        firstName: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validationPattern),
            Validators.maxLength(30),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validationPattern),
            Validators.maxLength(30),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
      },
      { validator: this.checkPasswords }
    );
  }
  functioncall(event) {
    this.registerUser();
  }

  registerUser() {
    const singUpInformation: RegistrationForm = {
      userName: this.userName.value,
      password: this.password.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
    };
    /*call the registration methode from facade layer */
    this.authFacade.registerUser(singUpInformation);
    this.signUpForm.reset();
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  get userName() {
    return this.signUpForm.get('userName');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
}
