abstract class TaxCalculator {
    protected tasseInps:number = 20;
    protected tasseIrpef:number = 10;
    protected tassabile:number;

    constructor(
        protected codredd:number,
        protected redditoAnnuoLordo:number,
    ){
        this.tassabile = redditoAnnuoLordo * codredd / 100;
    }

    get getUtileTasse():number{
        const utile:number = (this.redditoAnnuoLordo - (this.tassabile * (this.tasseInps + this.tasseIrpef) / 100)) * 100 / this.redditoAnnuoLordo; 
        return utile;
    }

    get getTasseInps():number{
        const tasse:number = this.tassabile * this.tasseInps / 100;
        return tasse;
    }

    get getTasseIrpef():number{
        const tasse:number = this.tassabile * this.tasseIrpef / 100;
        return tasse;
    }

    get getRedditoAnnuoNetto():number{
        const reddito:number = this.tassabile - (this.tassabile * (this.tasseInps + this.tasseIrpef) / 100); 
        return reddito;
    }
}

class WebDeveloper extends TaxCalculator {
    constructor (redditoAnnuoLordo:number) {
        super(78, redditoAnnuoLordo);
    }
}

class AgenteImmobiliare extends TaxCalculator {
    constructor (redditoAnnuoLordo:number) {
        super(86, redditoAnnuoLordo);
    }
}

class Commercialista extends TaxCalculator {
    constructor (redditoAnnuoLordo:number) {
        super(62, redditoAnnuoLordo);
    }
}

class Imprenditore extends TaxCalculator {
    constructor (redditoAnnuoLordo:number) {
        super(67, redditoAnnuoLordo);
    }
}

class Ristoratore extends TaxCalculator {
    constructor (redditoAnnuoLordo:number) {
        super(40, redditoAnnuoLordo);
    }
}

const button:HTMLButtonElement|null = document.querySelector("button");
button?.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const select:HTMLSelectElement|null = document.querySelector("select");

    const nome:string = inputs[0].value;
    const cognome:string = inputs[1].value;
    let professione:string = "";
    if (select) professione = select.value;

    let persona:TaxCalculator = new Imprenditore(100000);
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
    if (select) select.value = "";
});