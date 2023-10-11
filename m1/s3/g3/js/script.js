let list1 = document.getElementById("done-tasks");
let list2 = document.getElementById("to-do-tasks");
let elements = [];
let input = document.querySelector("input");
let button = document.querySelector("button");
let iButtons = document.querySelectorAll("i");

button.addEventListener("click", function(event){
    if (input.value && input.value.length < 18) {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let div = document.createElement("div");
        
        span.innerText = input.value;
        div.innerHTML = '<i class="fas fa-trash-alt" id="trash-can"></i>';
        
        list1.append(li);
        li.append(span);
        li.append(div);

        input.value = '';

        li.addEventListener("click", () => {
            if (li.parentElement == list1) {
                list2.append(li);
            } else {
                list1.append(li);
            }

            li.classList.toggle("done");
        })

        let i = div.querySelector("#trash-can");

        i.addEventListener("click", () => {
            i.parentElement.parentElement.remove();
        });
    }

    event.preventDefault();
})