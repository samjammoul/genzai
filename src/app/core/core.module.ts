import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentication/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { coreRouters } from './authentication/guard/Routing/app.Routing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffect } from './authentication/Store/auth.effect';
import { authReducer } from './authentication/Store/auth.reducer';
import { AuthFacade } from './authentication/auth.facade';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  _MatMenuDirectivesModule,
  MatMenuModule,
} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [[AuthFacade], HttpClientModule, FormBuilder],
  declarations: [LoginComponent, RegistrationComponent],
  exports: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(coreRouters),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffect]),
    MatInputModule,
    FlexModule,
    MatCardModule,
    MatToolbarModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class CoreModule {}
