let box = document.querySelector(".box2");

let form = new Form(box);

let nameInput = new Input("text", "name").HTMLinit();
let surnameInput = new Input("text", "surname").HTMLinit();

form.inputHandle(surnameInput, nameInput);

// let counter = new Counter();

const counter = {
    storedCounter: sessionStorage.getItem("counter"),
    value: this.storedCounter ? parseInt(this.storedCounter, 10) : 0,

    startCounter: function () {
        setInterval(() => {
            this.value += 1;
            sessionStorage.setItem("counter", this.value);
        }, 1000);
    }
}
counter.startCounter();