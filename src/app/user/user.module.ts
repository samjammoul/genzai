import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './Profile/profile-page/profile-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ProfileImageComponent } from './Profile/profile-image/profile-image.component';

import { MatIconModule } from '@angular/material/icon';
import { ShowProfileInfoComponent } from './Profile/show-profile-info/show-profile-info.component';
import { EditProfileInfoComponent } from './Profile/edit-profile-info/edit-profile-info.component';
import { MatButtonModule } from '@angular/material/button';
import { ChangePasswordDialogComponent } from './Profile/show-profile-info/change-password-dialog/change-password-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../core/authentication/Store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from '../core/authentication/Store/auth.effect';
import { UserReducer } from './store/user.reducer';
import { AuthFacade } from '../core/authentication/auth.facade';
import { UserFacade } from './UserFacade';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileImageComponent,
    ShowProfileInfoComponent,
    EditProfileInfoComponent,
    ChangePasswordDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatGridListModule,
    MatToolbarModule,
    FlexModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forFeature('userStore', UserReducer),
    EffectsModule.forFeature([]),
    ReactiveFormsModule,
  ],
  exports: [ProfileImageComponent],
  providers: [[UserFacade], HttpClient],
})
export class UserModule {}
