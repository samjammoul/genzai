import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  loginLabel = 'Login';
  signUpLabel = 'Sign up';
  loginBtnClass = 'longBtnG';
  singUpBtnClass = 'longBtnW';
  editAble = false;
  constructor() {}
  functioncall(event) {}
  ngOnInit(): void {}
}
