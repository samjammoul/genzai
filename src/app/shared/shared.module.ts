import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ButtonComponent } from './layout/button/button.component';
import { LogoComponent } from './layout/Logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ButtonComponent,
    LogoComponent,
  ],
  exports: [ButtonComponent, LogoComponent, NavbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    FlexModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class SharedModule {}
