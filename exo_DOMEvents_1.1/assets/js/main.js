// 1 

let body = document.querySelector('body');

let bouton = document.createElement('button');

bouton.textContent = 'je suis un bouton';

body.appendChild(bouton)

bouton.addEventListener('click', () => {
    bouton.textContent = `J'ai été cliquer`
})


// 22 

let bouton2 = document.createElement('button');
bouton2.textContent = `J'ai été cliquer`

bouton.style.margin= "20px"
let i = 1;

body.appendChild(bouton2)

bouton2.addEventListener('click', () => {
    bouton2.textContent = `J'ai été cliquer ${i} de fois `
    i++
})

console.log(body);
