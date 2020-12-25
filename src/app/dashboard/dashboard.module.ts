import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard-mainLayout/dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRouters } from './dashboard.routing';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserModule } from '../user/user.module';
import { DeviceModule } from '../device/device.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MapBoxComponent } from './map/map-box/map-box.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MapFacade } from './map/map.facade';
import { BrpZoneComponent } from './map/Layers/brp-zone/brp-zone.component';
import { SoilScanComponent } from './map/Layers/soil-scan/soil-scan.component';
import { TreeWidthComponent } from './map/Layers/tree-width/tree-width.component';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [MapFacade],
  declarations: [
    HomeComponent,
    DashboardComponent,
    MapBoxComponent,
    BrpZoneComponent,
    SoilScanComponent,
    TreeWidthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(dashboardRouters),
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    FlexModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    UserModule,
    DeviceModule,
    MatIconModule,
    MatButtonModule,
    NgxMapboxGLModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiZGFua2F0YWJheW5vdiIsImEiOiJjazduMnlmeXMwanhiM2ZwYXMzMXhpanZwIn0.XwuOeWhp7nqAF_Q_imCdwQ',
    }),
    MatButtonToggleModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatSliderModule,
  ],
})
export class DashboardModule {}
