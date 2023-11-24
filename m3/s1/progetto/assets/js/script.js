"use strict";
class Phone {
    static activatePhone(telefono) {
        const numbers = document.querySelectorAll("#telephone > div > div");
        const cancBtn = document.querySelector("#number i");
        numbers.forEach((num) => {
            const numElement = num;
            num === null || num === void 0 ? void 0 : num.addEventListener("click", () => {
                if (this.telephoneNumber) {
                    if (this.telephoneNumber.innerText.length < 12) {
                        this.telephoneNumber.innerText += numElement.innerText;
                    }
                }
            });
        });
        cancBtn === null || cancBtn === void 0 ? void 0 : cancBtn.addEventListener("click", () => {
            if (this.telephoneNumber)
                this.telephoneNumber.innerText = this.telephoneNumber.innerText.slice(0, -1);
        });
        this.call(telefono);
    }
    static call(telefono) {
        const callBtn = document.getElementById("call-btn");
        callBtn === null || callBtn === void 0 ? void 0 : callBtn.addEventListener("click", () => {
            telefono.chiamata(Math.floor(Math.random() * 7) + 2); // inserisco un numero random di minuti compreso tra 2 e 8 perchè la durata delle chiamate con i call center si può aggirare intorno a questo intervallo, in base all'interesse verso il servizio
            if (this.telephoneNumber)
                this.telephoneNumber.innerText = "";
            new Table(telefono);
        });
    }
}
Phone.telephoneNumber = document.querySelector("#number p");
class Smartphone {
    constructor(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return "Credito residuo: " + this.carica.toFixed(2) + "€";
    }
    get getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        this.numeroChiamate++;
        const costoChiamata = min * this.costoMinuto;
        this.carica -= costoChiamata;
        const obj = {
            id: this.registroChiamate.length + 1,
            durata: min,
            dataEOra: new Date().getTime(),
        };
        this.registroChiamate.push(obj);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }
    mostraRegistroChiamate() {
        return this.registroChiamate;
    }
    filtraChiamatePerDataOra(data1, data2) {
        const timeStamp1 = data1.getTime();
        const timeStamp2 = data2.getTime();
        const arrayFiltrato = this.registroChiamate.filter(chiamata => chiamata.dataEOra >= timeStamp1 && chiamata.dataEOra <= timeStamp2);
        return arrayFiltrato;
    }
}
class Table {
    constructor(mobile) {
        this.mobile = mobile;
        this.tbody = document.querySelector("tbody");
        this.HTMLInit(this.mobile.mostraRegistroChiamate());
        this.buttonsHandle();
    }
    HTMLInit(array) {
        if (this.tbody)
            this.tbody.innerHTML = "";
        const chiamate = array;
        chiamate.forEach(chiamata => {
            var _a;
            const tr = document.createElement("tr");
            const idTd = document.createElement("td");
            const durationTd = document.createElement("td");
            const dataTd = document.createElement("td");
            const oraTd = document.createElement("td");
            idTd.innerText = String(chiamata.id);
            durationTd.innerText = String(chiamata.durata);
            const dataEOra = new Date(chiamata.dataEOra);
            const giorno = Number(numeriCorretti(dataEOra.getDate()));
            const mese = Number(numeriCorretti(dataEOra.getMonth() + 1));
            const anno = Number(numeriCorretti(dataEOra.getFullYear()));
            const ore = Number(numeriCorretti(dataEOra.getHours()));
            const minuti = Number(numeriCorretti(dataEOra.getMinutes()));
            const secondi = Number(numeriCorretti(dataEOra.getSeconds()));
            dataTd.innerText = `${giorno}/${mese}/${anno}`;
            oraTd.innerText = `${ore}:${minuti}:${secondi}`;
            tr.append(idTd, durationTd, dataTd, oraTd);
            (_a = this.tbody) === null || _a === void 0 ? void 0 : _a.append(tr);
        });
    }
    buttonsHandle() {
        const saveBtn = document.getElementById("save-btn");
        const resetBtn = document.getElementById("reset-btn");
        const date1 = document.getElementById("date1");
        const date2 = document.getElementById("date2");
        saveBtn === null || saveBtn === void 0 ? void 0 : saveBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (date1 && date2) {
                if (date1.value && date2.value) {
                    this.HTMLInit(this.mobile.filtraChiamatePerDataOra(new Date(date1.value), new Date(date2.value)));
                }
            }
        });
        resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (date1)
                date1.value = "";
            if (date2)
                date2.value = "";
        });
    }
}
function numeriCorretti(numero) {
    if (numero < 10)
        return "0" + numero;
    return numero.toString();
}
const telefono = new Smartphone(2);
Phone.activatePhone(telefono);
new Table(telefono);
//# sourceMappingURL=script.js.map