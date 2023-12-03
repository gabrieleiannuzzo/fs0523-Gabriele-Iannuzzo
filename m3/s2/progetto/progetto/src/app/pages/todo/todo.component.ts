import { IMicrotask } from '../../models/imicrotask';
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
  newMicrotaskObj:IMicrotask = {
    title: "",
    completed: false
  }
  newTodoMicrotasks:string[] = [];
  emptyTodos:boolean = false;
  loaderShow!:boolean;
  microtasksShow:boolean[] = [false, false, false, false];
  microtasksDivShow:boolean[] = [];

  ngOnInit(){
    this.loaderShow = this.todosService.loaderStart();
    this.todosService.getAll().then(res => {
      this.todos = res;
      this.loaderShow = this.todosService.loaderStop();
      // variabile per mostrare il messaggio che non sono presenti todo
      if (this.todos.length == 0) this.emptyTodos = true;
      for (let t of this.todos) this.microtasksDivShow.push(false);
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

  creaTodo():void{
    const microtasksArray:IMicrotask[] = [];

    for (let m of this.newTodoMicrotasks) {
      this.newMicrotaskObj.title = m;
      const newMicrotask:IMicrotask = {...this.newMicrotaskObj};
      microtasksArray.push(newMicrotask);
    }

    const newTodo:Partial<ITodo> = {
      title: this.newTodoTitle,
      completed: false,
      microtasks: microtasksArray,
      creationDate: new Date().getTime(),
      completionDate: null,
    }

    let microtasksDivs:number = 0;
    let allMicrotasksNames:boolean = true;
    for (let m of this.microtasksShow) {
      if (m) microtasksDivs++;
    }
    for (let i = 0; i < microtasksDivs; i++) {
      if (!this.newTodoMicrotasks[i]) allMicrotasksNames = false;
    }

    if (newTodo.title && allMicrotasksNames) {
      this.emptyTodos = false;
      this.loaderShow = this.todosService.loaderStart();
      this.todosService.create(newTodo).then(res => {
        this.todos.push(res);
        this.loaderShow = this.todosService.loaderStop();
        this.newTodoTitle = "";
        this.newTodoMicrotasks = [];
        this.microtasksShow = this.microtasksShow.map(m => m = false);
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

  deleteMicrotask(todoIndex:number, microtaskIndex:number):void{
    this.loaderShow = this.todosService.loaderStart();
    this.todos[todoIndex].microtasks.splice(microtaskIndex, 1);
    this.todosService.update(this.todos[todoIndex]).then(res => {
      this.loaderShow = this.todosService.loaderStop();
    })
  }

  addMicroTask(i:number):void{
    this.microtasksShow[i] = true;
  }

  removeMicroTask(i:number):void{
    let microtasksDivs:number = 0;

    for (let m of this.microtasksShow) {
      if (m) microtasksDivs++
    }
    this.microtasksShow[i] = false;
    if (this.newTodoMicrotasks.length == microtasksDivs) this.newTodoMicrotasks.pop();
  }

  toggleShowMicrotasks(i:number):void{
    this.microtasksDivShow[i] = !this.microtasksDivShow[i];
  }
}

// dire a michele della scelta di non mettere il completamento
// chiedere a michele dei path
