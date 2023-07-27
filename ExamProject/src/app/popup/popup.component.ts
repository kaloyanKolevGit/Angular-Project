import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
@Input('popUp') popUp = ''
@Input('activeTodos') todoList: string[] = ['']
@Input('errMessage') errMessage: string = ''
@Input('popUpName') popUpName: string = ''
@Output() updateTodo = new EventEmitter<string>();
@Output() cancelEdit = new EventEmitter<string>();

onUpdate (event: any) {
  this.updateTodo.emit(event.target.parentElement.children[1].value)
  console.log(event.target.parentElement.children[1]);
  
}
onCancel () {
  this.cancelEdit.emit()
}
}
