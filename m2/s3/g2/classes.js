class Form {
    constructor (target) {
        this.form = null;
        this.submitButton = null;
        this.deleteButton = null;
        this.target = target;
        this.HTMLinit();
        this.formSubmit();
        this.deleteStorage();
    }

    HTMLinit () {
        this.form = document.createElement("form");
        this.submitButton = document.createElement("button");
        this.deleteButton = document.createElement("button");
        const name = localStorage.getItem("name");
        if (name) {
            const p = document.createElement("p");
            p.innerText = `Ciao ${name}`;
            this.target.append(p);
        }

        this.submitButton.innerText = "SUBMIT";
        this.deleteButton.innerText = "DELETE";

        this.form.append(this.submitButton);
        this.form.append(this.deleteButton);
        this.target.append(this.form);
    }

    inputHandle (...inputs) {
        for (let input of inputs) {
            this.form.prepend(input);
        }
    }

    formSubmit () {
        this.form.addEventListener("submit", () => {
            const inputs = this.form.querySelectorAll("input");

            for (let input of inputs) {
                localStorage.setItem(input.name, input.value);
            }
        })
    }

    deleteStorage () {
        this.deleteButton.addEventListener("click", () => {
            localStorage.clear();
        })
    }
}

class Input {
    constructor (type, name) {
        this.input = null;
        this.type = type;
        this.name = name;
    }

    HTMLinit () {
        this.input = document.createElement("input");
        this.input.type = this.type;
        this.input.name = this.name;
        this.input.placeholder = this.name;
        return this.input;
    }
}

// class Counter {
//     constructor () {
//         const storedCounter = sessionStorage.getItem("counter");
//         this.counter = storedCounter ? parseInt(storedCounter, 10) : 0;
//         this.startCounter();
//     }

//     startCounter () {
//         setInterval(() => {
//             this.counter += 1;
//             sessionStorage.setItem("counter", this.counter);
//         }, 1000);
//     }
// }