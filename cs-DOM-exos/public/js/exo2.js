// 1 

let btn = document.getElementsByClassName('btn')[0]
let mignon = document.querySelector('#mignon-container')
let img = document.querySelector('img')

btn.addEventListener('click', () => {
    let clone = img.cloneNode()
    mignon.appendChild(clone)
})

// 2 

let container = document.getElementById('mignon2-container')

let image = container.children



container.addEventListener('click', (e) => {
    console.log();
    if (e.target.tagName == "IMG") {
        e.target.remove()
        if (image.length == 0) {
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    let clone = e.target.cloneNode()
                    container.appendChild(clone)
                }
            }, 1000)
        }
    }
})

// 3 

let ul = document.querySelector('ul')
let li = document.createElement('li')
let liAll = document.querySelectorAll('#exo-add-li > ul > li')[1]

li.textContent = 'Hello World'

ul.insertBefore(li, liAll)

// 4

let button = document.querySelector("#exo-li-from-input button");
let myUl = document.querySelector("#exo-li-from-input>ul");
let inputTodo = document.querySelector(".form-control");

button.addEventListener("click", () => {
    if (inputTodo.value.trim() != "") {
        let myLi = document.createElement("li");
        myLi.textContent = inputTodo.value;
        myUl.appendChild(myLi);
        inputTodo.value = "";
    }
});

let editOrder = document.querySelectorAll("button")[2];
editOrder.addEventListener("click", () => {
    let liTodo = [...document.querySelectorAll("#exo-li-from-input>ul li")];
    let newTodo = [];
    for (let i = 0; i < liTodo.length; i) {
        let random = Math.floor(Math.random() * liTodo.length);
        newTodo.push(liTodo[random]);
        liTodo.splice(random, 1);
        document.querySelector("#exo-li-from-input>ul li").remove();
    }
    newTodo.forEach(e => {
        let li = document.createElement("li");
        li.textContent = e.textContent;
        myUl.appendChild(li);
    });
});

