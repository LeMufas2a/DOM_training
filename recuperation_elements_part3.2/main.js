// 1

let h1 = document.querySelector('h1')
h1.textContent = 'Les attributs class et id'
console.log(h1);

// 2 

let h2 = document.querySelector('h2')
h2.textContent = 'Exercice 2 partie A'
console.log(h2);

// 3 

let h2V2 = document.querySelectorAll('h2')[1];
h2V2.textContent = 'Exercice 2 partie B'
console.log(h2V2);

// 4 

let firstP = document.querySelector('p')
firstP.innerHTML = `(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> `
console.log(firstP);

// 5 

let secondP = document.querySelectorAll('p')[1];
secondP.innerHTML = `(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide`
console.log(secondP);

// 6

let h1Id = document.querySelector('h1')
h1Id.setAttribute('id', 'bigTitle')

// 7 

let div = document.querySelector('div')
div.setAttribute('class', 'container')

// 8 

let h2All = document.querySelectorAll('h2')
h2All.forEach(element => {
    element.setAttribute('class', 'title')
});

// 9 

let pAll = document.querySelectorAll('p')
pAll.forEach(element => {
    element.setAttribute('class', 'text')
});

// 10 

let section = document.querySelector('section')
section.setAttribute('class', 'padding border-black margin-bottom  ')

console.log(section);

// 11 

let section2 = document.querySelectorAll('section')[1];
section2.setAttribute('class', 'margin-top border-black padding')

// 12 

let divS = document.querySelector('div')
divS.setAttribute('style', 'background-color: blue; height: 20px; width: 20px; border: solid red 2px;')

console.log(divS);


