// APPARIZIONE INPUT DI TESTO
let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("hide");
});

// CAROSELLI
const carouselContainer = document.querySelector(".carousel-container");
const width = carousels[0].firstElementChild.offsetWidth;
let carousels = document.querySelectorAll(".carousel");
let previousMovie = []; // ARRAY DEI TASTI "INDIETRO" DI OGNI CAROSELLO
let nextMovie = []; // ARRAY DEI TASTI "AVANTI" DI OGNI CAROSELLO
let translate = []; // ARRAY CHE TIENE IN MEMORIA LO STATO DELLO SPOSTAMENTO DI OGNI CAROSELLO
let moviesNumber = []; // ARRAY CHE TIENE CONTO DELLA QUANTITA DI FILM DI OGNI CATEGORIA (PER RENDELO DINAMICO IN CASO OGNI CATEGORIA AVESSE UN NUMERO DIVERSO DI FILM)

for (let i = 0; i < carousels.length; i++) {
    previousMovie[i] = carousels[i].previousElementSibling; // SALVO IN MEMORIA IL TASTO "INDIETRO" DI QUESTO CAROSELLO
    nextMovie[i] = carousels[i].nextElementSibling; // SALVO IN MEMORIA IL TASTO "AVANTI" DI QUESTO CAROSELLO
    translate[i] = 0; // SALVO IN MEMORIA LO STATO DELLA POSIZIONE DI QUESTO CAROSELLO
    moviesNumber[i] = carousels[i].querySelectorAll("img").length; // SALVO IN MEMORIA IL NUMERO DEI FILM DI QUESTA CATEGORIA PER USARLO NELLA VARIABILE "MAX" ALLA RIGA 34 E STABILIRE QUANTO AVANTI PUO ANDARE AL MASSIMO IL CAROSELLO
    
    previousMovie[i].addEventListener("click", () => {
        translate[i] -= (width + 4);
        if (translate[i] < 0) translate[i] = 0;
        carousels[i].style.transform = `translateX(-${translate[i]}px)`;
    });
    
    nextMovie[i].addEventListener("click", () => {
        let containerWidth = carouselContainer.offsetWidth; // LO METTO QUI DENTRO COSI SE L'UTENTE GIRA LO SCHERMO OPPURE CAMBIA DIMENSIONE DELLO SCHERMO, AD OGNI CLICK JAVASCRIPT RICONOSCE LA NUOVA DIMENSIONE DELLA FINESTRA
        translate[i] += (width + 4);
        let max = (moviesNumber[i]*width) + (4*(moviesNumber[i]-1)) - containerWidth;
        if (translate[i] > max) translate[i] = max;
        carousels[i].style.transform = `translateX(-${translate[i]}px)`;
    });
}

// for (b of buttons) {
//     let translate = 0;
//     b.addEventListener("click", () => {
//         translate += width;
//         carousel.style.transform = `translateX(-${translate}px)`;
//     })
// }