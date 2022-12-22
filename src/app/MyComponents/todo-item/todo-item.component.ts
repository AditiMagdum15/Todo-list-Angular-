import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from "src/app/Todos"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }

  onCheckBoxClick(todo){
    this.todoCheckBox.emit(todo);
  }
}
