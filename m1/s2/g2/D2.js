/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function higher(a, b){
  if (a > b) {
    return 1;
  } else if (b > a) {
    return 2;
  } else {
    return 0;
  }
}

let a = 10;
let b = 9;

let high = higher(a, b);

if (high == 1) {
  console.log("The higher number among", a, "and", b, "is",  a);
} else if (high == 2) {
  console.log("The higher number among", a, "and", b, "is",  b);
} else {
  console.log("The numbers are equal");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function notEqual(c) {
  if (c != 5) {
    return 0;
  } else {
    return 1;
  }
}

let c = 3;

let equal = notEqual(c);

if (equal == 0) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function divisible(d) {
  if (d % 5 == 0) {
    return 1;
  } else {
    return 0;
  }
}

let d = 20;

let result = divisible(d);

if (result == 1) {
  console.log("divisible by 5");
} else {
  console.log("not divisible by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function eight(e, f) {
  if (e == 8 || f == 8) {
    if (e != 8) {
      return 1;
    } else if (f != 8) {
      return 2;
    } else {
      return 3;
    }
  } else {
    return 4;
  }
}

let e = 3;
let f = 8;

let number = eight(e, f);

if (number == 1) {
  console.log("The second number is equal to 8");
} else if (number == 2) {
  console.log("The first number is equal to 8");
} else if (number == 3) {
  console.log("Both numbers are equal to 8");
} else {
  console.log("None of the numbers is equal to 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function total(g) {
  if (g > 50) {
    return g;
  } else {
    return g + 10;
  }
}

let totalShoppingCart = 34;

console.log("The total amount is", total(totalShoppingCart));

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function total2(h) {
  if ((h * 0.8) > 50) {
    return h * 0.8;
  } else {
    return h * 0.8 + 10;
  }
}

let totalShoppingCart2 = 20;

console.log("The total amount is", total2(totalShoppingCart2));

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// METODO 1
function order(i, j, k) {
  if (i > j && i > k) {
    if (j > k) {
      return 1;
    } else {
      return 2;
    }
  } else if (j > i && j > k) {
    if (i > k) {
      return 3;
    } else {
      return 4;
    }
  } else {
    if (i > j) {
      return 5;
    } else {
      return 6;
    }
  }
}

let i = 20;
let j = 102;
let k = 10;

let list = order(i, j, k);

switch (list) {
  case 1: 
    console.log("The order is", i, j, k);
    break;

  case 2: 
    console.log("The order is", i, k, j);
    break;

  case 3: 
    console.log("The order is", j, i, k);
    break;

  case 4: 
    console.log("The order is", j, k, i);
    break;

  case 5: 
    console.log("The order is", k, i, j);
    break;

  case 6: 
    console.log("The order is", k, j, i);
    break;
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkNumber(l) {
  if (typeof l == "number") {
    return 1;
  } else {
    return 0;
  }
}

let l = 3;

let item = checkNumber(l);

if (item == 1) {
  console.log("It is a number");
} else {
  console.log("It's not a number");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function even(m) {
  if (m % 2 == 0) {
    return 1;
  } else {
    return 0;
  }
}

let m = 21;

let number2 = even(m);

if (number2 == 1) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10
if (val < 10 && val >= 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function fill(n) {
  for (let o = 0; o < 10; o++) {
    n[o] = o + 1;
  }
}

let n = [];

fill(n);

console.log(n);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
n[n.length - 1] = 100;

console.log(n);