class Library {
    constructor (target, url) {
        this.booksNumber = null;
        this.target = document.querySelector(target);
        this.row = null;
        this.url = url;
        this.urlFetch();
    }

    urlFetch () {
        fetch (this.url)
        .then(res => res.json())
        .then(res => {
            this.booksNumber = res.length;
            this.HTMLinit(res);
        });
    }

    HTMLinit (jsonArray) {
        this.row = document.createElement("div");
        this.row.classList.add("row");
        this.target.append(this.row)
        for (let i = 0; i < this.booksNumber; i++) {
            new Book(this.row, jsonArray[i]);
        }
        new ShoppingCart(this.target);
    }
}

class Book {
    constructor (target, bookData) {
        this.bookData = bookData;
        this.target = target;
        this.template = document.getElementById("card-template");
        this.clone = document.importNode(this.template.content, true);
        this.img = null;
        this.title = null;
        this.price = null;
        this.shoppingCartButton = null;
        this.deleteButton = null;
        this.HTMLinit();
        this.buttonsHandle();
    }

    HTMLinit () {
        this.img = this.clone.querySelector(".book-img");
        this.title = this.clone.querySelector(".book-title");
        this.price = this.clone.querySelector(".book-price");

        this.img.src = this.bookData.img;
        this.title.innerHTML = this.bookData.title;
        this.price.innerHTML = this.bookData.price;

        this.target.append(this.clone);
    }

    buttonsHandle () {
        this.shoppingCartButton = this.target.lastElementChild.querySelector(".shopping-cart-button");
        this.deleteButton = this.target.lastElementChild.querySelector(".delete-button");
        console.log(this.shoppingCartButton)
        console.log(this.deleteButton)

        this.shoppingCartButton.addEventListener("click", () => {
            const storageArray = localStorage.getItem("cart");
            const cartArray = storageArray ? JSON.parse(storageArray) : [];
            cartArray.push(this.title.innerHTML);
            localStorage.setItem("cart", JSON.stringify(cartArray));
        })

        this.deleteButton.addEventListener("click", () => cartArray.splice(cartArray.indexOf(this.title.innerHTML), 1));
    }
}

class ShoppingCart {
    constructor (target) {
        this.target = target;
        this.template = document.getElementById("shopping-cart-template");
        this.clone = document.importNode(this.template.content, true);
        this.HTMLinit();
    }

    HTMLinit () {
        this.target.append(this.clone);
    }
}

new Library ("#shop", "https://striveschool-api.herokuapp.com/books");