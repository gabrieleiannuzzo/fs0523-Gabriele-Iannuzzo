import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ITodo } from '../../models/itodo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  constructor(protected todosService:TodosService){}

  todos:ITodo[] = [];
  newTodoTitle:string = "";
  emptyTodos:boolean = false;

  loaderShow!:boolean;

  ngOnInit(){
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.getAllCompleted().then(res => {
      this.todos = res;
      this.loaderShow = this.todosService.loaderStop();
      if (this.todos.length == 0) this.emptyTodos = true;
    });
  }

  completedToggle(todo:ITodo){
    if (todo.completed) {
      todo.completionDate = null;
    } else {
      todo.completionDate = new Date().getTime();
    }
    todo.completed = !todo.completed;
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.update(todo).then(res => {
      this.todos = this.todos.filter(t => t.id != todo.id);
      this.loaderShow = this.todosService.loaderStop();
    })
  }

  deleteTodo(id:number):void{
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.delete(id).then(res => {
      this.todos = this.todos.filter(t => t.id != id);
      this.loaderShow = this.todosService.loaderStop();
    })
  }
}
