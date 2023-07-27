import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTodos: string[] = ['Go to the shop', 'Clear', 'Walk the dog', 'Laundry'];
  popUp: string = '';
  popUpName: string = ''
  arrLength: number = 0
  errMessage: string = ''
  addItem(newItem: string) {
    if(newItem.length > 0) {
      this.activeTodos.push(newItem);
    } else {
      alert('You must fill the input field')
    }
    console.log(this.activeTodos);
  }

  deleteTodo(todo: string): void {
    this.activeTodos.splice(this.activeTodos.indexOf(todo), 1) 
  }

  editTodo(todo: string): void {
    this.popUpName = todo
    this.popUp = 'flex';  
    this.arrLength = this.activeTodos.length
  }

  updateTodo(todo: string): void {
    if(this.activeTodos.length < this.arrLength) {
      this.popUp = 'none'
      return
    }
    if(todo.length < 1) {
      this.errMessage = 'Please fill in the field'
      return
    }
    
    this.activeTodos.splice(this.activeTodos.indexOf(this.popUpName), 1, todo) 
    this.popUp = 'none'
    this.errMessage = ''
  }
  cancelEdit() {
    this.popUp = 'none'
    this.errMessage = ''
  }
}
