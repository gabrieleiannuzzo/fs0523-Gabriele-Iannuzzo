let box = document.querySelector(".box2");

let form = new Form(box);

let nameInput = new Input("text", "name").HTMLinit();
let surnameInput = new Input("text", "surname").HTMLinit();
let emailInput = new Input("email", "email").HTMLinit();
let passwordInput = new Input("password", "password").HTMLinit();

form.inputHandle(passwordInput, emailInput, surnameInput, nameInput);

let counter = new Counter();