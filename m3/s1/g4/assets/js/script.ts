type DressModel = {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
}

class Dress {
    static HTMLInit (dress:DressModel) {
        const template:HTMLTemplateElement|null = document.querySelector("template");
        const clone:Element|null|undefined = template?.firstElementChild;
        const title:HTMLHeadingElement|null|undefined = clone?.querySelector(".title");
        const color:HTMLHeadingElement|null|undefined = clone?.querySelector(".color");
        const collection:HTMLHeadingElement|null|undefined = clone?.querySelector(".collection");
        const deleted:HTMLHeadingElement|null|undefined = clone?.querySelector(".deleted");
        const discounted:HTMLHeadingElement|null|undefined = clone?.querySelector(".discounted");

        console.log(template);
        
        console.log(clone);

        if (title) title.innerText = dress.capo;
        if (color) color.innerText = dress.colore;
        if (collection) collection.innerText = dress.collezione;
        if (deleted) deleted.innerText = String(dress.prezzoivaesclusa);
        if (discounted) discounted.innerText = String(dress.prezzoivainclusa);

        if (clone) document.body.append(clone);
    }
}

class Data {
    static async fetchData(url:string):Promise<DressModel[]> {
        const response:Response = await fetch(url);
        const data:DressModel[] = await response.json();
        return data;
    }
}

async function dressesHandle ():Promise<void> {
    const dresses:DressModel[] = await Data.fetchData("./Abbigliamento.json");

    dresses.forEach(dress => Dress.HTMLInit(dress));
}

dressesHandle();