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
hide();
show();

setInterval(() => {
    hide();
    show();
}, 5500);

function fill () {
    for (let i = 0; i < 50; i++) {
        let random;

        do {
            random = Math.floor(Math.random() * max);
        } while (array.includes(random));

        array.push(random);
    }
}

function hide () {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            gs[array[i]].style.opacity = "0";
        }, 50 + 50*i);
    }
}

function show () {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            gs[array[i]].style.opacity = "1";
        }, 2550 + 50*i);
    }
}

let buttons = document.querySelectorAll("#hero-section button, header button");
let popup = document.getElementById("popup");
let close = document.getElementById("close");
let panel = document.getElementById("panel");

for (b of buttons) {
    b.addEventListener("click", () => {
        popup.style.display = "flex";
        panel.style.display = "block";
    });
}

close.addEventListener("click", () => {
    popup.style.display = "none";
    panel.style.display = "none";
})