import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ITodo } from '../../models/itodo';
import { IMicrotask } from '../../models/imicrotask';

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
  microtasksDivShow:boolean[] = [];

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
      for (let m of todo.microtasks) m.completed = true;
    }
    todo.completed = !todo.completed;
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.update(todo).then(res => {
      this.loaderShow = this.todosService.loaderStop();
    })
  }

  completedMicrotaskToggle(todoIndex:number, microtask:IMicrotask){
    this.loaderShow = this.todosService.loaderStart();
      microtask.completed = !microtask.completed;
      if (!microtask.completed) {
        this.todos[todoIndex].completed = false;
        this.todos[todoIndex].completionDate = null;
      }
      this.todosService.update(this.todos[todoIndex]).then(res => {
        this.loaderShow = this.todosService.loaderStop();
      });
  }

  deleteTodo(id:number):void{
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.delete(id).then(res => {
      this.todos = this.todos.filter(t => t.id != id);
      this.loaderShow = this.todosService.loaderStop();
    })
  }

  deleteMicrotask(todoIndex:number, microtaskIndex:number):void{
    this.loaderShow = this.todosService.loaderStart();
    this.todos[todoIndex].microtasks.splice(microtaskIndex, 1);
    this.todosService.update(this.todos[todoIndex]).then(res => {
      this.loaderShow = this.todosService.loaderStop();
    })
  }

  toggleShowMicrotasks(i:number):void{
    this.microtasksDivShow[i] = !this.microtasksDivShow[i];
  }
}
