import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  faCoffee = 'faCoffee';
  logoSize = 'Size';
  activeSideNav = false;
  opened = false;

  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showBigNav = false;

  ngOnInit(): void {}

  showSideNav() {
    this.activeSideNav = !this.activeSideNav;
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
