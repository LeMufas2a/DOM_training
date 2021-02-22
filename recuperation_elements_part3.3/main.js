// 1 

let myDiv = document.querySelector('div')
myElements = [myDiv.firstElementChild, myDiv.firstElementChild.nextElementSibling]
console.log(myElements);

// 1.1

/* let myElements = document.querySelector('#object').children
console.log(myElements); */

// 2 

let prop = {
    nom: "Mufasa",
    age: 19,
}

let tab = Object.keys(prop);

// 3

/* tab.forEach(element => {
    console.log(element);
}); */

// 4 

// let tabl = Object.entries(prop) => retourne l'attribut et la valeur

/* 
let tabl = Object.values(prop)

tabl.forEach(element => {
    console.log(element);
}); */


// 5 


/* let tabl = Object.values(prop)

tabl.forEach((element, index) => {
    console.log(index);
}); */

// 6 


myElements.forEach((element, index) => {
    element.textContent = Object.values(prop)[index]
});