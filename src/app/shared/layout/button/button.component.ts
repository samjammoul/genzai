import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() buttonType: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event) {
    this.onClick.emit(event);
  }
  ngOnInit(): void {}
  get btnType() {
    switch (this.buttonType) {
      case ButtonType.LongBtnG:
        return 'btn longBtnG';
      case ButtonType.LongBtnW:
        return 'btn longBtnW';
      default:
        return 'btn';
    }
  }
}

enum ButtonType {
  LongBtnG = 'longBtnG',
  LongBtnW = 'longBtnW',
}
