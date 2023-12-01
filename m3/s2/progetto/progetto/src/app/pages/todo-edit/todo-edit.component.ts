import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from '../../models/itodo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss'
})
export class TodoEditComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected todoService:TodosService
    ){}

  todo!:ITodo;
  newTodoTitle:string = "";
  loaderShow!:boolean;


  ngOnInit(){
    this.loaderShow = this.todoService.loaderStart();
    this.route.params.subscribe((params:any) => {
      this.todoService.getById(params.id).then(res => {
        this.todo = res;
        this.loaderShow = this.todoService.loaderStop();
      })
    })
  }

  completedToggle(todo:ITodo){
    if (todo.completed) {
      todo.completionDate = null;
    } else {
      todo.completionDate = new Date().getTime();
    }
    todo.completed = !todo.completed;
    this.loaderShow = this.todoService.loaderStart();
    this.todoService.update(todo).then(res => {
      this.loaderShow = this.todoService.loaderStop();
    })
  }

  updateTodo():void{
    let newTodo = {...this.todo};
    newTodo.title = this.newTodoTitle;

    if (newTodo.title) {
      this.loaderShow = this.todoService.loaderStart();
      this.todoService.update(newTodo).then(res => {
        console.log(res);

        this.todo = res;
        this.loaderShow = this.todoService.loaderStop();
        this.newTodoTitle = "";
      });
    }
  }

  deleteTodo(id:number):void{
    this.loaderShow = true;
    this.loaderShow = this.todoService.loaderStart();
    this.todoService.delete(id).then(res => {
      this.router.navigate(['/todo']);
    })
  }
}
