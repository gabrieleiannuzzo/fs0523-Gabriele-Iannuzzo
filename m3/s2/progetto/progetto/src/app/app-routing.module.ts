import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
    title: "Todo | Todo List",
  },
  {
    path: "todo/edit/:id",
    component: TodoEditComponent,
    title: "Todo Edit | Todo List",
  },
  {
    path: "completed",
    component: CompletedComponent,
    title: "Completed | Todo List",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
