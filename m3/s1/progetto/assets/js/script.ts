class Phone {
    static telephoneNumber:HTMLParagraphElement|null = document.querySelector("#number p");

    static activatePhone (telefono:Smartphone) {
        const numbers:NodeList = document.querySelectorAll("#telephone > div > div");
        const cancBtn:HTMLElement|null = document.querySelector("#number i");

        numbers.forEach((num) => {
            const numElement = num as HTMLDivElement;
            num?.addEventListener("click", () => {
                if (this.telephoneNumber) {
                    if (this.telephoneNumber.innerText.length < 12) {
                        this.telephoneNumber.innerText += numElement.innerText;
                    }
                }
            })
        });

        cancBtn?.addEventListener("click", () => {
            if (this.telephoneNumber) this.telephoneNumber.innerText = this.telephoneNumber.innerText.slice(0, -1);
        });

        this.call(telefono);
        this.charge(telefono);
        this.showCredit(telefono);
    }

    private static call (telefono:Smartphone) {
        const callBtn:HTMLElement|null = document.getElementById("call-btn");

        callBtn?.addEventListener("click", () => {
            telefono.chiamata(Math.floor(Math.random() * 7) + 2); // inserisco un numero random di minuti compreso tra 2 e 8 perchè la durata delle chiamate con i call center si può aggirare intorno a questo intervallo, in base all'interesse verso il servizio
            if (this.telephoneNumber) this.telephoneNumber.innerText = "";
            new Table(telefono)
        })
    }

    private static charge (telefono:Smartphone) {
        const chargeBtn:HTMLButtonElement|null = document.querySelector("header button");
        const chargeAmount:HTMLInputElement|null = document.querySelector("header input");

        chargeBtn?.addEventListener("click", () => {
            if (chargeAmount) {
                if (chargeAmount.value) {
                    telefono.ricarica(Number(chargeAmount.value));
                    chargeAmount.value = "";
                }
            }
        })
    }

    private static showCredit (telefono:Smartphone) {
        const creditBtn:HTMLButtonElement|null = document.querySelector("#credit-div button");
        const credit:HTMLParagraphElement|null = document.querySelector("#credit-div p") as HTMLParagraphElement|null;
        
        creditBtn?.addEventListener("mouseenter", () => {
            if (credit) credit.innerText = telefono.numero404().replace("Credito residuo: ", "");
            credit?.classList.remove("d-none");
        })

        creditBtn?.addEventListener("mouseleave", () => {
            credit?.classList.add("d-none");
        })
    }
}

interface ISim {
    numeroChiamate:number;
    costoMinuto:number;
    carica:number;

    ricarica(euro:number):void;
    numero404():string;
    get getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

type Chiamata = {
    id:number,
    durata:number,
    dataEOra:number,
}

class Smartphone implements ISim {
    numeroChiamate:number = 0;
    costoMinuto:number = 0.20;
    private registroChiamate:Chiamata[] = [];

    constructor (public carica:number){}

    public ricarica(euro:number):void {
        this.carica += euro;
    }

    public numero404():string {
        return ("Credito residuo: " + this.carica.toFixed(2) + "€").replace(".", ",");
    }

    public get getNumeroChiamate():number {
        return this.numeroChiamate;
    }

    public chiamata(min:number):void {
        if (this.carica >= 0.20) {
            this.numeroChiamate++;
            if ((min * this.costoMinuto) > this.carica) {
                min = Math.floor(this.carica / this.costoMinuto);
            }

            const costoChiamata:number = min * this.costoMinuto;
            this.carica -= costoChiamata;
    
            const obj:Chiamata = {
                id: this.numeroChiamate,
                durata: min,
                dataEOra: new Date().getTime(),
            }
            this.registroChiamate.push(obj);
        }
    }

    public azzeraChiamate():void {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }

    public mostraRegistroChiamate():Chiamata[] {
        return this.registroChiamate;
    }

    public filtraChiamatePerDataOra(data1:Date, data2:Date):Chiamata[] {
        const timeStamp1:number = data1.getTime();
        const timeStamp2:number = data2.getTime();
        const arrayFiltrato:Chiamata[] = this.registroChiamate.filter(chiamata => chiamata.dataEOra >= timeStamp1 && chiamata.dataEOra <= timeStamp2);
        return arrayFiltrato;
    }
}

class Table {
    public tbody:HTMLTableSectionElement|null = document.querySelector("tbody");

    constructor (public mobile:Smartphone){
        this.HTMLInit(this.mobile.mostraRegistroChiamate());
        this.buttonsHandle();
    }

    HTMLInit (array:Chiamata[]) {
        if (this.tbody) this.tbody.innerHTML = "";

        const chiamate:Chiamata[] = array;

        chiamate.forEach(chiamata => {
            const tr:HTMLTableRowElement = document.createElement("tr");
            const idTd:HTMLTableCellElement = document.createElement("td");
            const durationTd:HTMLTableCellElement = document.createElement("td");
            const dataTd:HTMLTableCellElement = document.createElement("td");
            const oraTd:HTMLTableCellElement = document.createElement("td");

            idTd.innerText = String(chiamata.id);
            durationTd.innerText = String(chiamata.durata);
            const dataEOra = new Date(chiamata.dataEOra);
            const giorno:string = numeriCorretti(dataEOra.getDate());
            const mese:string = numeriCorretti(dataEOra.getMonth() + 1);
            const anno:string = numeriCorretti(dataEOra.getFullYear());
            const ore:string = numeriCorretti(dataEOra.getHours());
            const minuti:string = numeriCorretti(dataEOra.getMinutes());
            const secondi:string = numeriCorretti(dataEOra.getSeconds());
            dataTd.innerText = `${giorno}-${mese}-${anno}`;
            oraTd.innerText = `${ore}:${minuti}:${secondi}`;

            tr.append(idTd, durationTd, dataTd, oraTd);
            this.tbody?.append(tr);
        })
    }

    buttonsHandle () {
        const saveBtn:HTMLElement|null = document.getElementById("save-btn");
        const resetBtn:HTMLElement|null = document.getElementById("reset-btn");
        const clearBtn:HTMLElement|null = document.getElementById("clear-btn");
        const date1:HTMLInputElement|null = document.getElementById("date1") as HTMLInputElement;
        const date2:HTMLInputElement|null = document.getElementById("date2") as HTMLInputElement;

        saveBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            if (date1 && date2) {
                if (date1.value && date2.value) {
                    this.HTMLInit(this.mobile.filtraChiamatePerDataOra(new Date(date1.value), new Date(date2.value)))
                }
            }
        });

        resetBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            if (date1) date1.value = "";
            if (date2) date2.value = "";
        });

        clearBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            this.mobile.azzeraChiamate();
            this.HTMLInit(this.mobile.mostraRegistroChiamate());
        })
    }
}

function numeriCorretti (numero:number):string {
    if (numero < 10) return "0" + numero;
    return numero.toString();
}

const telefono = new Smartphone(2);

Phone.activatePhone(telefono);

new Table(telefono);