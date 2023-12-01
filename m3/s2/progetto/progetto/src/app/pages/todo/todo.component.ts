import { ITodo } from '../../models/itodo';
import { TodosService } from './../../services/todos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  constructor(protected todosService:TodosService){}

  todos:ITodo[] = [];
  newTodoTitle:string = "";
  emptyTodos:boolean = false;
  loaderShow!:boolean;

  ngOnInit(){
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.getAll().then(res => {
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
      this.loaderShow = this.todosService.loaderStop();
    })
  }

  creaTodo():void{
    let newTodo:Partial<ITodo> = {
      title: this.newTodoTitle,
      completed: false,
      creationDate: new Date().getTime(),
      completionDate: null,
    }

    if (newTodo.title) {
      this.emptyTodos = false;
      this.loaderShow = this.todosService.loaderStart();
      this.todosService.create(newTodo).then(res => {
        this.todos.push(res);
        this.loaderShow = this.todosService.loaderStop();
        this.newTodoTitle = "";
        this.emptyTodos = false;
      });
    }
  }

  deleteTodo(id:number):void{
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.delete(id).then(res => {
      this.todos = this.todos.filter(t => t.id != id);
      if (this.todos.length == 0) this.emptyTodos = true;
      this.loaderShow = this.todosService.loaderStop();
    })
  }
}
