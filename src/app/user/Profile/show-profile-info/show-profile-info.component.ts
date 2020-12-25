import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { UserFacade } from '../../UserFacade';
import { UserForm } from '../../store/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-profile-info',
  templateUrl: './show-profile-info.component.html',
  styleUrls: ['./show-profile-info.component.css'],
})
export class ShowProfileInfoComponent implements OnInit {
  userInfo: UserForm;
  UserInfo$ = this.userFacade.UserInfo$.subscribe(
    (res: UserForm) => (this.userInfo = res)
  );
  constructor(public dialog: MatDialog, private userFacade: UserFacade) {
    this.userFacade.getUserInfo();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  ngOnInit(): void {}
}
