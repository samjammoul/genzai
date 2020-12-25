import { Guard } from '../core/authentication/guard/guard.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard-mainLayout/dashboard.component';
import { ProfilePageComponent } from '../user/Profile/profile-page/profile-page.component';

import { DevicesListComponent } from '../device/devices-list/devices-list.component';
import { DevicePageComponent } from '../device/device-page/device-page.component';
import { MapBoxComponent } from './map/map-box/map-box.component';

export const dashboardRouters = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [Guard],
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'devices', component: DevicesListComponent },
      { path: 'device', component: DevicePageComponent },
      { path: 'map', component: MapBoxComponent },
      { path: '**', redirectTo: '/dashboard' },
    ],
  },
];
