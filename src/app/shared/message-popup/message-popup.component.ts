import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent implements OnInit {
  @Output() emitMsg = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  setEmitMsg() {
    this.emitMsg.emit(true);
  }

  setMsgPopup() {
    this.emitMsg.emit(false);
  }
}
