
let input = document.querySelector("#item");
let btnAdd = document.querySelector("#btn")
console.log(input.value);
btnAdd.addEventListener('click',()=>{
        if(input.value !== "")
        {
            let ul = document.querySelector("ul");
            let li = document.createElement("li");
            li.innerHTML = input.value;
            ul.appendChild(li);
            let btnDel = document.createElement("button")
            btnDel.innerText = "delete"
            li.appendChild(btnDel)
            li.style.listStyle = "none";
            console.log(li);
            input.value = "";
            btnDel.addEventListener('click',()=>{
                btnDel.parentElement.remove();
            })
        }   
    else{
        btnAdd.disabled
    }
})
    



