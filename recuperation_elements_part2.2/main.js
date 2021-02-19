// 1

let h3 = document.getElementsByTagName('div')[0].firstElementChild;
console.log(h3);

// 2 

let titreNiv3 = document.getElementsByTagName("h3")[1]
console.log(titreNiv3);

// 3

console.log(titreNiv3.previousElementSibling);

// 4
let petitParagraphe = document.getElementsByClassName('petitParagraphe')[0];

console.log(petitParagraphe.nextElementSibling);

// 5 

let important = document.getElementsByClassName("important")[0]

console.log(important.parentElement);

// 6 

let myListElements = document.getElementById('listElements')

console.log(myListElements.parentElement.firstElementChild);

// 7 
let f = document.getElementsByClassName('important')[3]
console.log(f.nextElementSibling);

// 8 

let g = document.getElementById('textGeneral')

let h = g.nextElementSibling.nextElementSibling
console.log(g);

// 9 

let i = document.getElementById('footer')
console.log(i.getElementsByTagName('span')[0].parentElement.nextElementSibling);

//10 
console.log(i.getElementsByTagName('span')[1].parentElement.previousElementSibling.getElementsByTagName("span")[0].getElementsByTagName('b')[0].innerHTML);

// 11 

let j = document.querySelector('grandParagraphe')
console.log(j);


// 12 

let k = document.querySelectorAll('li')
k.forEach(e => {
    console.log(e.innerText);
});