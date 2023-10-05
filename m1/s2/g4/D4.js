/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1, l2) => l1 * l2;

console.log(area(8, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (n1, n2) => {
    if (n1 == n2) {
        return 3 * (n1 + n2);
    } else {
        return n1 + n2;
    }
}

console.log(crazySum(4, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = a => {
    let diff = Math.abs(a - 19);

    if (a <= 19) {
        return diff;
    } else {
        return diff * 3;
    }
}

console.log(crazyDiff(18));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = n => {
    if ((n > 20 && n < 100) || n == 400) {
        return true;
    }
}

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify (string) {
    if (string.indexOf("EPICODE") == 0) {
        return string;
    } else {
        return "EPICODE " + string;
    }
}

console.log(epify('EPICODE ciao mondo'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 (n) {
    if (n < 0) {
        console.error('You must insert a positive number');
        return;
    }

    if (n % 3 == 0 || n % 7 == 0) {
        return 'The number is divisible by 3 or 7';
    } else {
        return 'The number is not divisible by 3 or 7';
    }
}

console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = (string) => {
    let newString = string.split('');
    newString = newString.reverse();
    newString = newString.join('');

    return newString;
}

console.log(reverseString('ciao'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst (string) {
    let newString = string.split(' ');
    let result = [];

    for (let i of newString) {
        result.push(i[0].toUpperCase() + i.substring(1));
    }

    result = result.join(' ');

    return result;
}

console.log(upperFirst('ciao mondo'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = string => {
    let newString = string.split('');
    newString.pop();
    newString.shift();
    newString = newString.join('');

    return newString;
}

console.log(cutString('ciao mondo'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = n => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 11));
    }

    return arr;
}

let result = giveMeRandom(5);
console.log(result);