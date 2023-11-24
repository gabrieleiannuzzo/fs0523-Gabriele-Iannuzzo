"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Dress {
    static HTMLInit(dress) {
        const template = document.querySelector("template");
        const clone = template === null || template === void 0 ? void 0 : template.firstElementChild;
        const title = clone === null || clone === void 0 ? void 0 : clone.querySelector(".title");
        const color = clone === null || clone === void 0 ? void 0 : clone.querySelector(".color");
        const collection = clone === null || clone === void 0 ? void 0 : clone.querySelector(".collection");
        const deleted = clone === null || clone === void 0 ? void 0 : clone.querySelector(".deleted");
        const discounted = clone === null || clone === void 0 ? void 0 : clone.querySelector(".discounted");
        console.log(template);
        console.log(clone);
        if (title)
            title.innerText = dress.capo;
        if (color)
            color.innerText = dress.colore;
        if (collection)
            collection.innerText = dress.collezione;
        if (deleted)
            deleted.innerText = String(dress.prezzoivaesclusa);
        if (discounted)
            discounted.innerText = String(dress.prezzoivainclusa);
        if (clone)
            document.body.append(clone);
    }
}
class Data {
    static fetchData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = yield response.json();
            return data;
        });
    }
}
function dressesHandle() {
    return __awaiter(this, void 0, void 0, function* () {
        const dresses = yield Data.fetchData("./Abbigliamento.json");
        dresses.forEach(dress => Dress.HTMLInit(dress));
    });
}
dressesHandle();
//# sourceMappingURL=script.js.map