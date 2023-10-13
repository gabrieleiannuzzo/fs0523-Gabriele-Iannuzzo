generaTombola();
generaCartelle();
funzionamento();

// FUNZIONE PER GENERARE LA TOMBOLA
function generaTombola() {
    let tombola = document.querySelector(".estrazione");
    
    for (let i = 1; i <= 76; i++) {
        let numero = document.createElement("div");
        let p = document.createElement("p");
        let check = document.createElement("div");
        p.innerText = i;
        numero.classList.add("numero");
        if (i % 5 == 0 && i % 10 != 0) numero.classList.add("multiplo5");
        tombola.append(numero);
        numero.append(p);
        numero.append(check);
    }
};

// FUNZIONE PER GENERARE LE CARTELLE
function generaCartelle() {
    let input = document.querySelector(".inputs input");
    let firstButton = document.getElementById("start");
    let target = document.querySelector(".giocatore");

    firstButton.addEventListener("click", () => {
        if (input.value > 0 && input.value <= 5) {
            for (let i = 1; i <= input.value; i++) {
                let cartella = document.createElement("div");
                let primaFascia = document.createElement("div");
                
                cartella.classList.add("cartella")
                primaFascia.innerText = `Cartella ${i}`;
                primaFascia.classList.add("div1");
                
                target.append(cartella);
                cartella.append(primaFascia);
                
                let array = [];
                
                for (let j = 0; j < 3; j++) {
                    let secondaFascia = document.createElement("div");
                    secondaFascia.classList.add("div2");
                    
                    for (let k = 0; k < 8; k++) {
                        let casella = document.createElement("div");
                        secondaFascia.append(casella);

                        casella.innerText = random(array);
                    }
                    
                    cartella.append(secondaFascia);
                }
            }
        }
        
        input.value = '';
    });
}

// FUNZIONE PER GENERARE RANDOMICAMENTE I NUMERI DELLE CARTELLE E DELLA TOMBOLA
function random(arr) {
    let numeroRandom = Math.floor(Math.random() * 76) + 1;
    if (!arr.includes(numeroRandom)) {
        arr.push(numeroRandom);
        return numeroRandom;
    }

    return random(arr);
}

// FUNZIONE CHE GESTISCE IL FUNZIONAMENTO DEL TABELLONE E DELLE CARTELLE ALL'ESTRAZIONE DI UN NUMERO
function funzionamento () {
    let numeriTombola = [];
    let button = document.getElementById("random");

    button.addEventListener("click", () => {
        let numeroRandom = random(numeriTombola);
        let estratto = document.querySelector(".cartelle h2");
        let numeri = document.querySelectorAll(".numero");
        let cartelle = document.querySelectorAll(".cartella");
        
        estratto.innerText = `Ultimo numero estratto: ${numeroRandom}`;
        
        for (let n of numeri) {
            if (n.innerText == numeroRandom) n.querySelector("div").classList.add("check");
        }

        for (let cartella of cartelle) {
            let caselle = document.querySelectorAll(".div2 div");
        
            for (let casella of caselle) {
                if (casella.innerText == numeroRandom) casella.classList.add("estratto");
            }
        }
    });
}