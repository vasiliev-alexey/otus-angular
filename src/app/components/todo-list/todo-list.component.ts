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
      {
        id: 1,
        text: 'delectus aut autem',
      },
      {
        id: 2,
        text: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      },
      {
        id: 3,
        text: 'lorem20',
      },
      {
        id: 4,
        text: 'delectus aut autem',
      }
    );
  }

  onItemRemove(id: number) {
    this.items = this.items.filter(todo => todo.id !== id);
  }

  onItemAdd(text: string) {
    const id =
      this.items.length === 0
        ? 1
        : this.items.reduce((prev, current) => (prev.id > current.id ? prev : current)).id + 1;
    this.items = [{ text, id }, ...this.items];
  }
}
