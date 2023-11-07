class User {
    constructor (firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this. location = location;
    }

    compareAge = function (x) {
        let person1 = this.age > x.age ? this.firstName : x.firstName;
        let person2 = this.age > x.age ? x.firstName : this.firstName;
        return `${person1} è più vecchio di ${person2}`;
    }
}

class Pet {
    constructor (petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner = function (x) {
        if (this.ownerName === x.ownerName) return true;
        return false;
    }
}

class formHandle {
    constructor () {
        this.form = null;
        this.petNameInput = null;
        this.ownerNameInput = null;
        this.speciesInput = null;
        this.breedInput = null;
        this.button = null;
        this.HTMLinit();
        this.arrayHandle();
    }

    HTMLinit () {
        const names = ["", "petName", "ownerName", "species", "breed", ""];
        const types = ["form", "Input", "Input", "Input", "Input", "button"];

        for (let i = 0; i < names.length; i++) this.create.call(this, names[i], types[i]);

        this.button.innerText = "SUBMIT";

        this.form.append(this.petNameInput, this.ownerNameInput, this.speciesInput, this.breedInput, this.button);
        this.petNameInput.placeholder = "pet name";
        this.ownerNameInput.placeholder = "owner name";
        this.speciesInput.placeholder = "species";
        this.breedInput.placeholder = "breed";
        this.button.type = "button";
        document.body.append(this.form);
    }

    create (name, type) {
        this[name + type] = document.createElement(type.toLowerCase());
    }

    arrayHandle () {
        const petArray = [];

        this.button.addEventListener("click", () => {
            let pet = new Pet(this.petNameInput.value, this.ownerNameInput.value, this.speciesInput.value, this.breedInput.value);
            petArray.push(pet);
            console.log(petArray);
            this.formReset();
        });
    }

    formReset () {
        const inputs = this.form.querySelectorAll("input");
        for (let input of inputs) input.value = "";
    }
}

new formHandle();