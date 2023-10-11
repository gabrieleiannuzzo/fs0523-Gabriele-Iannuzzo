let list1 = document.getElementById("done-tasks");
let list2 = document.getElementById("to-do-tasks");
let elements = [];
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function(event){
    if (input.value && input.value.length < 18) {
        let li = document.createElement("li");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        list1.prepend(li);
        li.append(div1);
        li.append(div2);

        div1.classList.add("div1");
        div2.classList.add("div2");

        div1.innerText = input.value;
        div2.innerHTML = '<i class="fas fa-trash-alt" id="trash-can"></i>';
        
        div1.addEventListener("mouseenter", () => {
            div1.style.width = "80%";
            div1.nextSibling.style.display = "flex";
        });
        
        li.addEventListener("mouseleave", () => {
            div1.style.width = "100%";
            div1.nextSibling.style.display = "none";
        });
        
        div1.addEventListener("click", () => {
            if (li.parentElement == list1) {
                list2.append(li);
            } else {
                list1.append(li);
            }
            
            li.classList.toggle("done");
        });

        div2.addEventListener("click", () => {
            li.remove();
        })

        input.value = '';
    }

    event.preventDefault();
})