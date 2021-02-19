//Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console

let myContent = document.querySelector('#content');
console.log(myContent);

//Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console

let myAllContent = document.querySelectorAll('#content');
console.log(myAllContent);

// Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console

let myLi = document.querySelector('.important')
console.log(myLi);

//Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console

let myAllLi = document.querySelectorAll('.important')
console.log(myAllLi);

// Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 

let li = [...document.querySelectorAll('li')];

//Transformer l'ittérateur en Array
/* Array.from(document.querySelectorAll('li')) */

li.forEach(element => { 
    let e = element.innerText;
    console.log(e.slice(0, e.length - 1) + e[e.length - 1].toUpperCase());
});

//Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName

let para = document.getElementById('content');
para = para.getElementsByClassName('grandParagraphe')
console.log(para[0]);




