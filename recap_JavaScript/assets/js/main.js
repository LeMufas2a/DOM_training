let body = document.querySelector('body')

// Button Exercice
let myLi = document.querySelectorAll('.myUl > li')
let li1 = myLi[0]
let li2 = myLi[1]
let li3 = myLi[2]
let li4 = myLi[3]
let li5 = myLi[4]
let li6 = myLi[5]





// section exo1
let exo1 = document.querySelector('.exo1')
let exo2 = document.querySelector('.exo2')
let exo3 = document.querySelector('.exo3')
let exo4 = document.querySelector('.exo4')
let exo5 = document.querySelector('.exo5')
let exo6 = document.querySelector('.exo6')





// Exercice 1 

let h2 = document.querySelector('h2')
h2.textContent = 'le titre modifié'
h2.style.color = 'red'

// Exercice 2 

exo1.style.display = 'block'
exo2.style.display = 'none'
exo3.style.display = 'none'
exo4.style.display = 'none'
exo5.style.display = 'none'
exo6.style.display = 'none'

li1.addEventListener('click', () => {
    exo1.style.display = 'block'
    exo2.style.display = 'none'
    exo3.style.display = 'none'
    exo4.style.display = 'none'
    exo5.style.display = 'none'
    exo6.style.display = 'none'

})

li2.addEventListener('click', () => {
    exo1.style.display = 'none'
    exo2.style.display = 'block'
    exo3.style.display = 'none'
    exo4.style.display = 'none'
    exo5.style.display = 'none'
})

li3.addEventListener('click', () => {
    exo1.style.display = 'none'
    exo2.style.display = 'none'
    exo3.style.display = 'block'
    exo4.style.display = 'none'
    exo5.style.display = 'none'
    exo6.style.display = 'none'
})

li4.addEventListener('click', () => {
    exo1.style.display = 'none'
    exo2.style.display = 'none'
    exo3.style.display = 'none'
    exo4.style.display = 'block'
    exo5.style.display = 'none'
    exo6.style.display = 'none'
})
li5.addEventListener('click', () => {
    exo1.style.display = 'none'
    exo2.style.display = 'none'
    exo3.style.display = 'none'
    exo4.style.display = 'none'
    exo5.style.display = 'block'
    exo6.style.display = 'none'
})

li6.addEventListener('click', () => {
    exo1.style.display = 'none'
    exo2.style.display = 'none'
    exo3.style.display = 'none'
    exo4.style.display = 'none'
    exo5.style.display = 'none'
    exo6.style.display = 'block'
})

// Exercice 3 

let myName = document.querySelector('.myName')
let bouton = document.querySelector('.nom')
let input = bouton.previousElementSibling

bouton.addEventListener('click', () => {
    let valeur = input.value
    myName.textContent = `welcome ${valeur}`
})

// Exercice 4

let div1 = document.getElementsByClassName('div1')[0]
let div2 = document.getElementsByClassName('div2')[0]
let carre = document.querySelector('.carreRouge')
let myButton = document.querySelectorAll('.text-center > button')
let changePlace = myButton[0]
let countClick = myButton[1]

let onOff = false

let i = 1;


changePlace.addEventListener('click', () => {
    if (onOff === false) {
        div2.appendChild(carre)
        onOff = true
    } else if (onOff === true) {
        div2.removeChild(carre)
        div1.appendChild(carre)
        onOff = false
    }
    countClick.textContent = `nombre de click ${i}`
    i++
})

// Exercice 5 

let myImg = document.getElementsByClassName('myImg')[0]
let image = document.querySelector('.myImg > img')
let bout = myImg.previousElementSibling


bout.addEventListener('click', () => {
    let clone = image.cloneNode()
    myImg.appendChild(clone)
})

// Exercice 6
// Niveau 1
let myFirstInput = document.querySelector('.myFirstInput')
let mySecondInput = document.querySelector('.mySecondInput')
let span = document.querySelector('#reponse')
let egal = document.querySelector('.egal')

egal.addEventListener('click', () => {
    let calcule = parseInt(myFirstInput.value) + parseInt(mySecondInput.value)
    span.textContent = `${calcule}`
})

// Niveau 2

// Span

let monSpan = document.querySelector('.myCalculette > div > span')


// Input

let monInput = document.querySelector('.inp')


// Numéro => Button
let myBouton = document.querySelectorAll('.num')
let b0 = myBouton[9]
let b1 = myBouton[0]
let b2 = myBouton[1]
let b3 = myBouton[2]
let b4 = myBouton[3]
let b5 = myBouton[4]
let b6 = myBouton[5]
let b7 = myBouton[6]
let b8 = myBouton[7]
let b9 = myBouton[8]

// Operateur

let operateur = document.getElementsByClassName('operateur')

let addition = operateur[0]
let soustraction = operateur[1]
let multiplication = operateur[2]
let division = operateur[3]

// Egale 

let egale = document.querySelector('.egale')

// True & False

let tf = false

// C => Supprimé

let supprimer = document.querySelector('.supp')

let t1 = ""
let t2 = ""
let op = ""

// Opération

addition.addEventListener('click', () => {
    if (onInput === true) {
        monInput.value = '+'
    } else {
        monSpan.textContent += '+'
    }
    op = '+'
    tf = true

})

soustraction.addEventListener('click', () => {
    monSpan.textContent += '-'
    op = '-'
    tf = true
})

multiplication.addEventListener('click', () => {
    monSpan.textContent += '*'
    op = '*'
    tf = true
})

division.addEventListener('click', () => {
    monSpan.textContent += '/'
    op = '/'
    tf = true
})

// input

let onInput = false

monInput.addEventListener('click', () => {
    onInput = true
})

// Numéro

b1.addEventListener('click', () => {

    if (onInput === true) {
        monInput.value += 1
    } else {
        monSpan.textContent += 1
    }
    if (tf === false) {
        t1 += 1
    } else {
        t2 += 1
    }

})

b2.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 2
        t1 += 2
    } else {
        monSpan.textContent += 2
        t2 += 2
    }
})

b3.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 3
        t1 += 3
    } else {
        monSpan.textContent += 3
        t2 += 3
    }
})

b4.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 4
        t1 += 4
    } else {
        monSpan.textContent += 4
        t2 += 4
    }
})

b5.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 5
        t1 += 5
    } else {
        monSpan.textContent += 5
        t2 += 5
    }
})

b6.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 6
        t1 += 6
    } else {
        monSpan.textContent += 6
        t2 += 6
    }
})

b7.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 7
        t1 += 7
    } else {
        monSpan.textContent += 7
        t2 += 7
    }
})

b8.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 8
        t1 += 8
    } else {
        monSpan.textContent += 8
        t2 += 8
    }
})

b9.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 9
        t1 += 9
    } else {
        monSpan.textContent += 9
        t2 += 9
    }
})

b0.addEventListener('click', () => {
    if (tf === false) {
        monSpan.textContent += 0
        t1 += 0
    } else {
        monSpan.textContent += 0
        t2 += 0
    }
})

// Egale

egale.addEventListener('click', () => {
    monSpan.textContent += "="
    switch (op) {
        case '+':
            monSpan.textContent += +t1 + +t2
            break;
        case '-':
            monSpan.textContent += +t1 - +t2
            break;
        case '*':
            monSpan.textContent += +t1 * +t2
            break;
        case '/':
            monSpan.textContent += +t1 / +t2
            break;
        default:
            break;
    }
})

// C

supprimer.addEventListener('click', () => {
    monSpan.textContent = ''
    t1 = t2 = op = ''
    tf = false
})









