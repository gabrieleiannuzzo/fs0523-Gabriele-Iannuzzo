// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
function checkArray (array) {
    let sum = 0;

    for (let i of array) {
        if (i > 5) {
            console.log('The number ' + i + ' is larger than 5');
            sum += i;
        } else {
            console.log('The number ' + i + ' is lower than 5');
        }
    }

    return sum;
}

console.log('The sum of the numbers larger than 5 is: ' + checkArray(result));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function shoppingCartTotal (shoppingCart) {
    let total = 0;

    for (let i of shoppingCart) {
        total += i.quantity * i.price;
    }

    return total;
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let addToShoppingCart = (array, object) => {
    array.push(object);

    return array.length;
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let maxShoppingCart = (array) => {
    let max = 0, index;

    for (let i of array) {
        if (i.price > max) {
            max = i.price;
            index = array.indexOf[i];
        }
    }

    return array[index];
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let latestShoppingCart = array => array[array.length - 1];

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil (n) {
    if (n < 0 || n > 9) {
        console.error('You must insert a number between 0 and 9');
        return;
    }

    let number, counter = 0;
    do {
        number = Math.floor(Math.random() * 10);
        console.log(number);

        if(number > n) {
            counter += 1;
        } else {
            counter = 0;
        }
    } while (counter < 3);
}

loopUntil(0);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let average = array => {
    let sum = 0, counter = 0;

    for (let i of array) {
        if (typeof i != 'number') {
            counter += 0;
        } else {
            sum += i;
            counter += 1;
        }
    }

    return sum /= counter;
}

console.log(average([1, 'a', 2]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function longest (array) {
    let maxLength = 0, index;

    for (let stringa of array) {
        if (stringa.length > maxLength) {
            maxLength = stringa.length;
            index = array.indexOf(stringa);
        }
    }
    
    console.log('The longest string is: ' + array[index]);
}

longest(['ciao', 'come stai?', 'wow']);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let emailFilter = emailContent => {
    let email = emailContent.toUpperCase();

    if (email.indexOf('SPAM') == -1 && email.indexOf('SCAM') == -1) {
        return true;
    } else {
        return false;
    }
}

console.log(emailFilter('questa non è una mail di spam'));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function time (date) {
    date = new Date(date);
    let today = new Date();
    let difference = (today.getTime() - date.getTime()) / 86400000;

    console.log('It\'s been ' + Math.floor(difference) + ' days since ' + date.toLocaleDateString());
}

time("2020-10-5");

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator (x, y) {
    let matrix=[], decina, unità;

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            decina = i.toString();
            unità = j.toString();
            matrix.push(decina + unità);
        }
    }

    console.log(matrix);
}

matrixGenerator(3, 4);