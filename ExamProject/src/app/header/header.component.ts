import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  onClick(event: any,value: string): void {
    this.newItemEvent.emit(value);  
    event.target.parentElement.children[1].value = ''
  }
  onBtnPress(event: any,value: string): void {
    this.newItemEvent.emit(value);
    event.target.value = ''
  }
}
