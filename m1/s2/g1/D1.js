/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeri = "il datatype numero esprime un valore numerico, senza inserire caratteri letterali e/o numerici, e senza inserire apici. Un esempio è riportato nel prossimo console.log()";
let numeriEsempio = 9;

console.log(numeri);
console.log(numeriEsempio);

let stringhe = "il datatype stringa è una sequenza di caratteri, che si dichiara utilizzando gli apici (singoli o doppi) al cui interno si inserisce la stringa desiderata. Un esempio è riportato nel prossimo console.log()";
let stringheEsempio = "Hello World!";

console.log(stringhe);
console.log(stringheEsempio);

let booleani = "il datatype booleano è un dato che può assumere solo i valori vero o falso, e si utilizza principalmente per definire lo stato di una particolare condizione che deve essere soddisfatta o meno, al fine di avviare particolari costrutti logici. Un esempio è riportato nel prossimo console.log()"
let booleaniEsempio = true;

console.log(booleani);
console.log(booleaniEsempio);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome = "Gabriele";

console.log(nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;

console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
nome = "Iannuzzo";

console.log(nome);

const name = "Gabriele";
//name = "Iannuzzo"; (restituisce: "Assignment to constant variable.")

console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;

console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John"

console.log(name1 != name2);
console.log(name1.toLowerCase == name2.toLowerCase);