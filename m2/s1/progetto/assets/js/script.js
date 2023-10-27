let header = document.querySelector("header");
let headerButton = document.querySelector("header nav button");

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    if (top >= 380) {
        header.classList.add("white");
        headerButton.classList.add("green");
    } else {
        header.classList.remove("white");
        headerButton.classList.remove("green");
    }
});

let gs = document.querySelectorAll(".g-pattern > g");
let max = gs.length;
let array = [];

fill();
console.log(array)
setInterval(() => {
    hide();
    show();
}, 3500);

function fill () {
    for (let i = 0; i < 30; i++) {
        let random;

        do {
            random = Math.floor(Math.random() * max);
        } while (array.includes(random));

        array.push(random);
    }
}

function hide () {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            gs[array[i]].style.opacity = "0";
        }, 50 + 50*i);
    }
}

function show () {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            gs[array[i]].style.opacity = "1";
        }, 1600 + 50*i);
    }
}