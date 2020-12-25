import { Component, OnInit } from '@angular/core';
import { UserForm } from '../../store/user';
import { MatDialog } from '@angular/material/dialog';
import { UserFacade } from '../../UserFacade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-info',
  templateUrl: './edit-profile-info.component.html',
  styleUrls: ['./edit-profile-info.component.css'],
})
export class EditProfileInfoComponent implements OnInit {
  editUserInfoForm: FormGroup;
  userInfo: UserForm;
  UserInfo$ = this.userFacade.UserInfo$.subscribe(
    (res: UserForm) => (this.userInfo = res)
  );
  constructor(private userFacade: UserFacade, private fb: FormBuilder) {
    this.userFacade.getUserInfo();
  }

  get userName() {
    return this.editUserInfoForm.get('userName');
  }
  get email() {
    return this.editUserInfoForm.get('email');
  }
  get address() {
    return this.editUserInfoForm.get('address');
  }
  get companyName() {
    return this.editUserInfoForm.get('companyName');
  }
  get companyAddress() {
    return this.editUserInfoForm.get('companyAddress');
  }
  get bankAccount() {
    return this.editUserInfoForm.get('bankAccount');
  }
  get phoneNumber() {
    return this.editUserInfoForm.get('phoneNumber');
  }
  get billingAddress() {
    return this.editUserInfoForm.get('billingAddress');
  }

  ngOnInit() {
    this.editUserInfoForm = this.fb.group({
      userName: [
        this.userInfo.userName,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
      email: [this.userInfo.email, [Validators.required, Validators.email]],
      address: [
        this.userInfo.address,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
      companyName: [
        this.userInfo.companyName,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
      companyAddress: [
        this.userInfo.companyAddress,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
      bankAccount: [
        this.userInfo.bankAccount,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
      phoneNumber: [
        this.userInfo.phoneNumber,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
      billingAddress: [
        this.userInfo.billingAddress,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9._-]+$'), // must change it
        ],
      ],
    });
  }
}
