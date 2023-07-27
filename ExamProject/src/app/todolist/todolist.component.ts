import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input('activeTodos') todoList: string[] = ['']
  @Output() deleteTodo = new EventEmitter<string>();
  @Output() completeTodo = new EventEmitter<string>();
  @Output() editTodo = new EventEmitter<string>();
  onComplete (event: any) {
    event.target.parentElement.parentElement.classList.toggle('completed')
  }
  onEdit (event: any) {
    this.editTodo.emit(event.target.parentElement.parentElement.id)
  }

  onDelete (event: any) {
    this.deleteTodo.emit(event.target.parentElement.parentElement.id)
  }
}
