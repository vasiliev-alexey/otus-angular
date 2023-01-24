import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoAddFormComponent, TodoHeaderComponent, TodoItemComponent, TodoListComponent } from '@components/index';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoItemComponent, TodoHeaderComponent, TodoAddFormComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
