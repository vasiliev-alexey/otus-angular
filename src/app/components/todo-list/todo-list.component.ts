import { Component, OnInit } from '@angular/core';
import { Todo } from '@interfaces/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  items: Todo[] = [];

  ngOnInit(): void {
    this.items.push(
      { title: 'task1', isCompete: false },
      { title: 'task2', isCompete: false },
      { title: 'task3', isCompete: false }
    );
  }
}
