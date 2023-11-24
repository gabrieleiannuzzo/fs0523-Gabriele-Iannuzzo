"use strict";
class TaxCalculator {
    constructor(codredd, redditoAnnuoLordo) {
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = 20;
        this.tasseIrpef = 10;
        this.tassabile = redditoAnnuoLordo * codredd / 100;
    }
    get getUtileTasse() {
        const utile = (this.redditoAnnuoLordo - (this.tassabile * (this.tasseInps + this.tasseIrpef) / 100)) * 100 / this.redditoAnnuoLordo;
        return utile;
    }
    get getTasseInps() {
        const tasse = this.tassabile * this.tasseInps / 100;
        return tasse;
    }
    get getTasseIrpef() {
        const tasse = this.tassabile * this.tasseIrpef / 100;
        return tasse;
    }
    get getRedditoAnnuoNetto() {
        const reddito = this.tassabile - (this.tassabile * (this.tasseInps + this.tasseIrpef) / 100);
        return reddito;
    }
}
class WebDeveloper extends TaxCalculator {
    constructor(redditoAnnuoLordo) {
        super(78, redditoAnnuoLordo);
    }
}
class AgenteImmobiliare extends TaxCalculator {
    constructor(redditoAnnuoLordo) {
        super(86, redditoAnnuoLordo);
    }
}
class Commercialista extends TaxCalculator {
    constructor(redditoAnnuoLordo) {
        super(62, redditoAnnuoLordo);
    }
}
class Imprenditore extends TaxCalculator {
    constructor(redditoAnnuoLordo) {
        super(67, redditoAnnuoLordo);
    }
}
class Ristoratore extends TaxCalculator {
    constructor(redditoAnnuoLordo) {
        super(40, redditoAnnuoLordo);
    }
}
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const select = document.querySelector("select");
    const nome = inputs[0].value;
    const cognome = inputs[1].value;
    let professione = "";
    if (select)
        professione = select.value;
    let persona = new Imprenditore(100000);
    switch (professione) {
        case "web-developer":
            new WebDeveloper(100000);
            break;
        case "agente-immobiliare":
            new AgenteImmobiliare(100000);
            break;
        case "commercialista":
            new Commercialista(100000);
            break;
        case "imprenditore":
            new Imprenditore(100000);
            break;
        case "ristoratore":
            new Ristoratore(100000);
            break;
        default:
    }
    console.log(persona.getUtileTasse);
    console.log(persona.getTasseInps);
    console.log(persona.getTasseIrpef);
    console.log(persona.getRedditoAnnuoNetto);
    inputs.forEach(input => input.value = "");
    if (select)
        select.value = "";
});
