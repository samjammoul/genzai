import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  _MatMenuDirectivesModule,
  MatMenuModule,
} from '@angular/material/menu';
import { DevicePageComponent } from './device-page/device-page.component';
import { RouterModule } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [DevicesListComponent, DevicePageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    FlexModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [DevicesListComponent],
  providers: [HttpClient],
})
export class DeviceModule {}
