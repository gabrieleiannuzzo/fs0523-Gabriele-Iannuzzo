// APPARIZIONE INPUT DI TESTO
let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("hide");
});

// CAROSELLI
const carouselContainer = document.querySelector(".carousel-container");
const carousels = document.querySelectorAll(".carousel");
const width = carousels[0].firstElementChild.offsetWidth;
const previousMovie = []; // ARRAY DEI TASTI "INDIETRO" DI OGNI CAROSELLO
const nextMovie = []; // ARRAY DEI TASTI "AVANTI" DI OGNI CAROSELLO
const translate = []; // ARRAY CHE TIENE IN MEMORIA LO STATO DELLO SPOSTAMENTO DI OGNI CAROSELLO
const moviesNumber = []; // ARRAY CHE TIENE CONTO DELLA QUANTITA DI FILM DI OGNI CATEGORIA (PER RENDELO DINAMICO IN CASO OGNI CATEGORIA AVESSE UN NUMERO DIVERSO DI FILM)
const scrollX = [];
let movies, containerWidth, max, touchStart, touchEnd; // DICHIARO QUI LE VARIABILI CHE USO AD OGNI ITERAZIONE PER EVITARE DI DOVERLE DICHIARE OGNI VOLTA CON LET ALL'INTERNO DEL FOR
let layoutButton1 = document.getElementById("layout-button1");
let layoutButton2 = document.getElementById("layout-button2"); // DICHIARO QUI I BOTTONI CHE SERVIRANNO PER IL LAYOUT IN MANIERA TALE DA METTERE UN CONTROLLO SULLA FUNZIONE DEL TOUCH SCREEN, CHE SI DEVE ATTIVARE SOLO SE LA VISUALIZZAZIONE è SOTTO FORMA DI CAROSELLO


for (let i = 0; i < carousels.length; i++) {
    previousMovie[i] = carousels[i].previousElementSibling; // SALVO IN MEMORIA IL TASTO "INDIETRO" DI QUESTO CAROSELLO
    nextMovie[i] = carousels[i].nextElementSibling; // SALVO IN MEMORIA IL TASTO "AVANTI" DI QUESTO CAROSELLO
    translate[i] = 0; // SALVO IN MEMORIA LO STATO DELLA POSIZIONE DI QUESTO CAROSELLO
    moviesNumber[i] = carousels[i].querySelectorAll("img").length; // SALVO IN MEMORIA IL NUMERO DEI FILM DI QUESTA CATEGORIA PER USARLO NELLA VARIABILE "MAX" ALLA RIGA 34 E STABILIRE QUANTO AVANTI PUO ANDARE AL MASSIMO IL CAROSELLO
    scrollX[i] = carousels[i].scrollX;
    
    previousMovie[i].addEventListener("click", () => {
        translate[i] -= (width + 4);
        if (translate[i] < 0) translate[i] = 0;
        carousels[i].style.transform = `translateX(-${translate[i]}px)`;
    });
    
    nextMovie[i].addEventListener("click", () => {
        containerWidth = carouselContainer.offsetWidth; // LO METTO QUI DENTRO COSI SE L'UTENTE GIRA LO SCHERMO OPPURE CAMBIA DIMENSIONE DELLO SCHERMO, AD OGNI CLICK JAVASCRIPT RICONOSCE LA NUOVA DIMENSIONE DELLA FINESTRA
        translate[i] += (width + 4);
        max = (moviesNumber[i]*width) + (4*(moviesNumber[i]-2)) - containerWidth;
        if (translate[i] > max) translate[i] = max;
        carousels[i].style.transform = `translateX(-${translate[i]}px)`;
    });

    carousels[i].addEventListener("touchstart", (e) => {
        if (layoutButton1.classList.contains("layout-selection")) {
            touchStart = e.touches[0].clientX;
        }
    });

    carousels[i].addEventListener("touchmove", (e) => {
        if (layoutButton1.classList.contains("layout-selection")) {
            touchEnd = e.touches[0].clientX;
            delta = touchEnd - touchStart;
            translate[i] -= delta * 1.2;
            containerWidth = carouselContainer.offsetWidth;
            
            max = (moviesNumber[i]*width) + (4*(moviesNumber[i]-2)) - containerWidth;
            if (translate[i] > max) translate[i] = max;
            if (translate[i] < 0) translate[i] = 0;
    
            carousels[i].style.transform = `translateX(-${translate[i]}px)`;
        }
    });
    
    // CON QUESTA FUNZIONE EVITO CHE, SE IL CAROSELLO SI TROVA ALL'ULTIMA FOTO, ALL'AUMENTARE DELLA LARGHEZZA DELLO SCHERMO APPAIA DELLO SPAZIO NERO. cON QUESTA FUNZIONE IL CAROSELLO, SE SI TROVA ALLE ULTIME FOTO, VERRA SPOSTATO SEMPRE IN MANIERA TALE DA COPRIRE TUTTO LO SCHERMO
    window.addEventListener("resize", () => {
        containerWidth = carouselContainer.offsetWidth;
        max = (moviesNumber[i]*width) + (4*(moviesNumber[i]-2)) - containerWidth;
        if (translate[i] > max) {
            translate[i] = max;
            carousels[i].style.transform = `translateX(-${translate[i]}px)`;
        }
    });
}

// GESTIONE LAYOUT
let genres = document.querySelectorAll("section h2");
let buttons = document.querySelectorAll(".previous-movie i, .next-movie i");
let lengths = [];
let films;
let originalLength = carousels[0].querySelectorAll("a").length;

// SALVO NELL'ARRAY LENGTHS IL NUMERO DI FILM DI OGNI CAROSELLO
for (let i = 1; i < carousels.length; i++) {
    films = carousels[i].querySelectorAll("a");
    lengths[i] = films.length;
}

// GESTIONE LAYOUT A LISTA
layoutButton1.addEventListener("click", () => {
    handleClasses (layoutButton1, layoutButton2, carousels[0], genres, buttons);
    films = Array.from(carousels[0].querySelectorAll("a"));

    for (let i = 0; i < carousels.length; i++) {
        carousels[i].parentElement.classList.remove("height-auto");
        for (let j = 0; j < lengths[i]; j++) {
            carousels[i].append(films[originalLength]);
            films.splice(originalLength, 1);
        }
    }
});

// GESTIONE LAYOUT A GRIGLIA
layoutButton2.addEventListener("click", () => {
    handleClasses (layoutButton1, layoutButton2, carousels[0], genres, buttons, false);

    for (i = 1; i < carousels.length; i++) {
        carousels[i].parentElement.classList.add("height-auto");
        films = carousels[i].querySelectorAll("a");
        for (let film of films) carousels[0].append(film);
    }
    
});

// CON QUESTA FUNZIONE VADO A FARE CLASSLIST.ADD O CLASSLIST.REMOVE AGLI STESSI ELEMENTI IN BASE AL BOTTONE CHE CLICCO
function handleClasses (layoutButton1, layoutButton2, carousel, genres, buttons, list = true) {
    action1 = list ? "remove" : "add";
    action2 = list ? "add" : "remove";

    layoutButton1.classList[action2]("layout-selection");
    layoutButton2.classList[action1]("layout-selection");

    carousel.classList[action1]("flex-wrap");
    carousel.classList[action1]("justify-content-center");
    carousel.parentElement.classList[action1]("height-auto");
    carousel.parentElement.parentElement.classList[action1]("overflow-visible");

    for (let genre of genres) genre.classList[action1]("hide");
    for (let button of buttons) button.classList[action1]("hide");
}

// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com
// PER VEDERE IL SITO DA MOBILE https://www.gabrieleiannuzzo.com