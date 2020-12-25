import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @Input() Size: string;
  constructor() {}

  ngOnInit(): void {}
  get logoSize() {
    switch (this.Size) {
      case LogoSize.BigSize:
        return 'BigSize';
      default:
        return 'SmallSize';
    }
  }
}
enum LogoSize {
  BigSize = 'BigSize',
}
