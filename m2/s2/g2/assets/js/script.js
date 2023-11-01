// FUNZIONE CHE CAMBIA TESTO NEI BOTTONI
let buttons = document.querySelectorAll(".bottone");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText == "Nascondi sezione") {
            button.innerText = "Mostra sezione";
        } else {
            button.innerText = "Nascondi sezione";
        }
    });
});

// FUNZIONE PER SCRITTA "HOT" NELLE CARDS
let hotCards = document.querySelectorAll(".hot-card");

hotCards.forEach(card => {
    let template = document.querySelector("template");
    let clone = document.importNode(template.content, true);
    card.append(clone);
});

// FUNZIONE PER CONTEGGIO VIAGGI
let travelsButton = document.getElementById("travels-button");
let travels = document.querySelectorAll(".viaggio");

travelsButton.addEventListener("click", () => {
    let counter = 0;

    travels.forEach(el => {
        if (el.clientHeight!=0) counter += 1;
    });

    alert(`Numero di viaggi: ${counter}`);
});

// FUNZONE PER RIMOZIONE CARDS
let cardsButton = document.getElementById("cards-button");
let cards = document.querySelectorAll(".card");

cardsButton.addEventListener("click", () => {
    cards.forEach(el => {
        el.style.display = "none";
    });
});