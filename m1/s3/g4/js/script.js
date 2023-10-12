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

let input = document.querySelector(".inputs input");
let firstButton = document.getElementById("start");
let target = document.querySelector(".giocatore");

firstButton.addEventListener("click", () => {
    if (input.value > 0 && input.value <= 5) {
        for (let i = 1; i <= input.value; i++) {
            let cartella = document.createElement("div");
            let primaFascia = document.createElement("div");
            let caselle = [];

            cartella.classList.add("cartella")
            primaFascia.innerText = `Cartella ${i}`;
            primaFascia.classList.add("div1");

            target.append(cartella);
            cartella.append(primaFascia);

            for (let j = 0; j < 3; j++) {
                let secondaFascia = document.createElement("div");
                secondaFascia.classList.add("div2");
                
                for (let k = 0; k < 8; k++) {
                    let casella = document.createElement("div");
                    secondaFascia.append(casella);
                    caselle.push(casella);
                    casella.innerText = ((k + 1) + (8 * j));
                }

                cartella.append(secondaFascia);
            }
        }
    }

    input.value = '';
});

let random = document.getElementById("random");
let numeri = [];
for (let n = 1; n <= 76; n++) numeri[n] = n;

random.addEventListener("click", () => {
    let numeroEstratto = estrazione(numeri);
    let cartelle = document.querySelectorAll(".div2");
    let numero = document.querySelectorAll(".numero");
    let nuovoNumero = document.querySelector(".cartelle h2");

    nuovoNumero.innerText = `Ultimo numero estratto: ${estrazione}`;

    for (let n of numero) {
        let div = n.querySelector("div");
        if (n.innerText == numeroEstratto) div.classList.add("check");

    }

    for (let cartella of cartelle) {
        let caselle = document.querySelectorAll("div");
        for (casella of caselle) {
            if (casella.innerText == numeroEstratto) casella.classList.add("estratto");
        }
    }

    function estrazione (arr) {
        do {
            let nuovoNumero = Math.floor(Math.random() * 76) + 1;
        } while (arr[arr.indexOf[nuovoNumero]] == 0);
        arr[nuovoNumero] = 0;
    
        return nuovoNumero;
    }
});
