import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITodo } from '../../models/itodo';
import { IMicrotask } from '../../models/imicrotask';

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

  todo:ITodo = {
    id: 0,
    title: '',
    microtasks: [],
    completed: false,
    creationDate: 0,
    completionDate: null
  };
  newTodoTitle:string = "";
  loaderShow!:boolean;
  microtasksShow:boolean[] = [false, false, false, false];
  newTodoMicrotasks:string[] = [];
  newMicrotaskObj:IMicrotask = {
    title: "",
    completed: false
  }
  microtasksDivShow:boolean = true;


  ngOnInit(){
    this.loaderShow = this.todoService.loaderStart();
    this.route.params.subscribe((params:any) => {
      this.todoService.getById(params.id).then(res => {
        this.todo = res;
        // salvo il numero delle microtask in una variabile
        const microtasksNumber = this.todo.microtasks.length;
        // aggiorno subito la proprietà newTodoTitle in maniera tale da vedere il nome nel form
        this.newTodoTitle = this.todo.title;
        // faccio la stessa cosa con le microtask in maniera tale che appiano già gli input delle microtask riempiti con i loro titles
        for (let i = 0; i < microtasksNumber; i++) {
          this.newTodoMicrotasks[i] = this.todo.microtasks[i].title;
          this.microtasksShow[i] = true;
        }
        this.loaderShow = this.todoService.loaderStop();
      })
    })
  }

  completedToggle(todo:ITodo){
    // se sto segnando il todo come completato gli aggiungo la data, altrimenti gliela tolgo
    if (todo.completed) {
      todo.completionDate = null;
    } else {
      todo.completionDate = new Date().getTime();
      for (let m of todo.microtasks) m.completed = true;
    }
    todo.completed = !todo.completed;
    this.loaderShow = this.todoService.loaderStart();
    this.todoService.update(todo).then(res => {
      this.loaderShow = this.todoService.loaderStop();
    })
  }

  completedMicrotaskToggle(todo:ITodo, microtask:IMicrotask){
    this.loaderShow = this.todoService.loaderStart();
    // disattivo la possibilità di cambiare lo stato di una microtask se tutto il todo è completato
    microtask.completed = !microtask.completed;
    if (!microtask.completed) {
      this.todo.completed = false;
      this.todo.completionDate = null;
    }
    this.todoService.update(this.todo).then(res => {
      this.loaderShow = this.todoService.loaderStop();
    });
  }

  updateTodo():void{
    const microtasksArray:IMicrotask[] = [];
    // utilizzo una variabile temporanea perchè altrimenti il two way data binding mi renderebbe il nome di tutte le microtask uguale all'ultima dichiarata
    const newTodo = {...this.todo};
    newTodo.title = this.newTodoTitle;
    for (let i = 0; i < this.newTodoMicrotasks.length; i++) {
      // separo il caso in cui la microtask è già presente nell'array della todo perchè non posso sapere se è stata completata o no, e quindi devo lasciare invariata la rispettiva proprietà
      if (this.todo.microtasks[i]) {
        // cambio solo il title della microtask in maniera tale che la proprietà sul completamento rimanga invariata, poi pusho l'oggetto nell'array
        this.todo.microtasks[i].title = this.newTodoMicrotasks[i];
        microtasksArray.push(this.todo.microtasks[i]);
      } else {
        // qui creo l'oggetto da 0
        this.newMicrotaskObj.title = this.newTodoMicrotasks[i];
        const newMicrotask:IMicrotask = {...this.newMicrotaskObj};
        microtasksArray.push(newMicrotask);
      }
    }
    // aggiorno le microtask con il nuovo array
    newTodo.microtasks = microtasksArray;

    // imposto la variabile che controlla se tutti gli input delle microtask sono riempiti

    // IMPORTANTE: questo controllo impedisce al form di essere inviato se è visibile uno o più input di una microtask e non sono riempiti. Questo è il funzionamento che voglio inserire per evitare che ci siano degli input riempiti a salti (quindi il primo e il terzo ad esempio). Questo però impedisce al form di essere inviato anche se gli ultimi input sono visibili ma nessuno selezionato (dunque anche se non ci sono problemi di input saltati). Per questioni di tempo non ho potuto sistemare anche questo ulteriore controllo, ma lo avrei gestito inserendo un for (con una variabile j) all'interno dell'if alla riga 114 che controlla tutti gli input successivi a quello vuoto preso in esame se la condizione dell'if viene soddisfatta, e se sono vuoti non rende false la variabile "allMicrotasksNames". Probabilmente questo però renderebbe visibili nel sito l'input e il div relativi alla microtask in questione (ma vuoti, perchè l'array verrebbe comunque inviato con delle stringhe vuote). In questo caso aggiungerei un controllo aggiuntivo prima di eseguire l'update (che mi elimina le stringhe vuote nell'array delle microtask prima che venga inviato)

    // IMPORTANTE: questo controllo impedisce al form di essere inviato se è visibile uno o più input di una microtask e non sono riempiti. Questo è il funzionamento che voglio inserire per evitare che ci siano degli input riempiti a salti (quindi il primo e il terzo ad esempio). Questo però impedisce al form di essere inviato anche se gli ultimi input sono visibili ma nessuno selezionato (dunque anche se non ci sono problemi di input saltati). Per questioni di tempo non ho potuto sistemare anche questo ulteriore controllo, ma lo avrei gestito inserendo un for (con una variabile j) all'interno dell'if alla riga 114 che controlla tutti gli input successivi a quello vuoto preso in esame se la condizione dell'if viene soddisfatta, e se sono vuoti non rende false la variabile "allMicrotasksNames". Probabilmente questo però renderebbe visibili nel sito l'input e il div relativi alla microtask in questione (ma vuoti, perchè l'array verrebbe comunque inviato con delle stringhe vuote). In questo caso aggiungerei un controllo aggiuntivo prima di eseguire l'update (che mi elimina le stringhe vuote nell'array delle microtask prima che venga inviato)

    // IMPORTANTE: questo controllo impedisce al form di essere inviato se è visibile uno o più input di una microtask e non sono riempiti. Questo è il funzionamento che voglio inserire per evitare che ci siano degli input riempiti a salti (quindi il primo e il terzo ad esempio). Questo però impedisce al form di essere inviato anche se gli ultimi input sono visibili ma nessuno selezionato (dunque anche se non ci sono problemi di input saltati). Per questioni di tempo non ho potuto sistemare anche questo ulteriore controllo, ma lo avrei gestito inserendo un for (con una variabile j) all'interno dell'if alla riga 114 che controlla tutti gli input successivi a quello vuoto preso in esame se la condizione dell'if viene soddisfatta, e se sono vuoti non rende false la variabile "allMicrotasksNames". Probabilmente questo però renderebbe visibili nel sito l'input e il div relativi alla microtask in questione (ma vuoti, perchè l'array verrebbe comunque inviato con delle stringhe vuote). In questo caso aggiungerei un controllo aggiuntivo prima di eseguire l'update (che mi elimina le stringhe vuote nell'array delle microtask prima che venga inviato)

    // IMPORTANTE: questo controllo impedisce al form di essere inviato se è visibile uno o più input di una microtask e non sono riempiti. Questo è il funzionamento che voglio inserire per evitare che ci siano degli input riempiti a salti (quindi il primo e il terzo ad esempio). Questo però impedisce al form di essere inviato anche se gli ultimi input sono visibili ma nessuno selezionato (dunque anche se non ci sono problemi di input saltati). Per questioni di tempo non ho potuto sistemare anche questo ulteriore controllo, ma lo avrei gestito inserendo un for (con una variabile j) all'interno dell'if alla riga 114 che controlla tutti gli input successivi a quello vuoto preso in esame se la condizione dell'if viene soddisfatta, e se sono vuoti non rende false la variabile "allMicrotasksNames". Probabilmente questo però renderebbe visibili nel sito l'input e il div relativi alla microtask in questione (ma vuoti, perchè l'array verrebbe comunque inviato con delle stringhe vuote). In questo caso aggiungerei un controllo aggiuntivo prima di eseguire l'update (che mi elimina le stringhe vuote nell'array delle microtask prima che venga inviato)

    // IMPORTANTE: questo controllo impedisce al form di essere inviato se è visibile uno o più input di una microtask e non sono riempiti. Questo è il funzionamento che voglio inserire per evitare che ci siano degli input riempiti a salti (quindi il primo e il terzo ad esempio). Questo però impedisce al form di essere inviato anche se gli ultimi input sono visibili ma nessuno selezionato (dunque anche se non ci sono problemi di input saltati). Per questioni di tempo non ho potuto sistemare anche questo ulteriore controllo, ma lo avrei gestito inserendo un for (con una variabile j) all'interno dell'if alla riga 114 che controlla tutti gli input successivi a quello vuoto preso in esame se la condizione dell'if viene soddisfatta, e se sono vuoti non rende false la variabile "allMicrotasksNames". Probabilmente questo però renderebbe visibili nel sito l'input e il div relativi alla microtask in questione (ma vuoti, perchè l'array verrebbe comunque inviato con delle stringhe vuote). In questo caso aggiungerei un controllo aggiuntivo prima di eseguire l'update (che mi elimina le stringhe vuote nell'array delle microtask prima che venga inviato)
    let microtasksDivs:number = 0;
    let allMicrotasksNames:boolean = true;
    for (let m of this.microtasksShow) {
      if (m) microtasksDivs++;
    }
    for (let i = 0; i < microtasksDivs; i++) {
      if (!this.newTodoMicrotasks[i]) allMicrotasksNames = false;
    }

    // controllo se gli input siano tutti riempiti e aggiorno il todo
    if (newTodo.title && allMicrotasksNames) {
      this.loaderShow = this.todoService.loaderStart();
      this.todoService.update(newTodo).then(res => {
        console.log(res);
        this.todo = res;
        this.newTodoTitle = this.todo.title;
        const microtasksNumber = this.todo.microtasks.length;
        for (let i = 0; i < microtasksNumber; i++) {
          this.newTodoTitle = this.todo.title;
          this.newTodoMicrotasks[i] = this.todo.microtasks[i].title;
          this.microtasksShow[i] = true;
        }
        this.loaderShow = this.todoService.loaderStop();
      });
    }
  }

  deleteTodo(id:number):void{
    this.loaderShow = true;
    this.loaderShow = this.todoService.loaderStart();
    this.todoService.delete(id).then(res => {
      this.router.navigate(['/']);
    })
  }

  deleteMicrotask(microtaskIndex:number):void{
    this.loaderShow = this.todoService.loaderStart();
    // rimuovo la microtask dall'array locale associato
    this.todo.microtasks.splice(microtaskIndex, 1);
    this.todoService.update(this.todo).then(res => {
      this.todo = res;
      // resetto graficamente il form con gli stessi controlli effettuati nell'ngOnInit
      const microtasksNumber = this.todo.microtasks.length;
      this.newTodoTitle = this.todo.title;
      this.microtasksShow = [false, false, false, false];
      this.newTodoMicrotasks = [];
      for (let i = 0; i < microtasksNumber; i++) {
        this.newTodoMicrotasks[i] = this.todo.microtasks[i].title;
        this.microtasksShow[i] = true;
      }
      this.loaderShow = this.todoService.loaderStop();
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
    //controllo che non mi faccia il pop nel caso in cui l'ultimo (o gli ultimi) input non fosse riempito, perchè altrimenti mi toglierebbe l'ultima microtask scritta, anche se fosse inserita in un altro input
    if (this.newTodoMicrotasks.length == microtasksDivs) this.newTodoMicrotasks.pop();
  }

  toggleShowMicrotasks():void{
    this.microtasksDivShow = !this.microtasksDivShow;
  }
}
