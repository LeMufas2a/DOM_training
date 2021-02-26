let body = document.querySelector('body')
/* 
let input = document.querySelectorAll('input')
let inputOne = input[0]
let inputTwo = input[1]
let bouton = document.querySelectorAll('button')
let buttonOne = bouton[0]
let reponse = document.getElementById('response') */


// Exo 1 

/* buttonOne.addEventListener('click', () => {
    reponse.textContent = parseInt(inputOne.value) + parseInt(inputTwo.value)

}) */


// Exo 2

/* let option = document.querySelector('option')
let optionOne = option.nextElementSibling
let optionTwo = optionOne.nextElementSibling
let optionThree = optionTwo.nextElementSibling
let optionFour = optionThree.nextElementSibling
let reponse2 = document.getElementById('response2')

let myInputOne = input[2]
let myInputTwo = input[3]
let buttonTwo = bouton[1]
 */
// Addition

/* buttonTwo.addEventListener('click', () => {
    optionOne = parseInt(myInputOne.value) + parseInt(myInputTwo.value)
    reponse2.textContent = optionOne
}) */

// Soustraction 

/* buttonTwo.addEventListener('click', () => {
    optionTwo = parseInt(myInputOne.value) - parseInt(myInputTwo.value)
    reponse2.textContent = optionTwo
}) */

// multiplication

/* buttonTwo.addEventListener('click', () => {
    optionThree = parseInt(myInputOne.value) * parseInt(myInputTwo.value)
    reponse2.textContent = optionThree
}) */

// Division


/* buttonTwo.addEventListener('click', () => {
    optionFour = parseInt(myInputOne.value) / parseInt(myInputTwo.value)
    reponse2.textContent = optionFour
}) */


// Exo 3
/* 
let theInput = document.querySelectorAll('#operatorsExo3> input')
let buttonexo3 = document.querySelectorAll('#operatorsExo3> button')
let mySpan = document.querySelectorAll('#operatorsExo3> span')[0]
console.log(mySpan);
let i1 = theInput[0]
let i2 = theInput[1]
 */


/* let egal = buttonexo3[0]
let b1 = buttonexo3[1]
let b2 = buttonexo3[2]
let b3 = buttonexo3[3]
let b4 = buttonexo3[4]

let reponse3 = document.getElementById('response3') */

// Addition

b1.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-plus"></i>'
    egal.addEventListener('click', () => {
        reponse3.textContent = parseInt(i1.value) + parseInt(i2.value)
    })
}) */

// Soustraction

/* b2.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-minus"></i>'
    egal.addEventListener('click', () => {
        reponse3.textContent = parseInt(i1.value) - parseInt(i2.value)
    })
}) */

// Multiplication
/* 
b3.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-times"></i>'
    egal.addEventListener('click', () => {
        reponse3.textContent = parseInt(i1.value) * parseInt(i2.value)
    })
}) */

// Division

/* b4.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-divide"></i>'
    egal.addEventListener('click', () => {
        reponse3.textContent = parseInt(i1.value) / parseInt(i2.value)
    })
}) */


// Exo 4

// Input 

 let input = document.querySelectorAll('#exo-4 > div >  input')
let input1 = input[0]
let input2 = input[1]

// Button 

let button = document.querySelectorAll('#numbersExo4 > button')
let b1 = button[0]
let b2 = button[1]
let b3 = button[2]
let b4 = button[3]
let b5 = button[4]
let b6 = button[5]
let b7 = button[6]
let b8 = button[7]
let b9 = button[8]
let b0 = button[9]

// Span 

let theSpan = document.querySelectorAll('#exo-4 > div > span')
let mySpan = theSpan[0]

// Egal

let egal = document.querySelector('#exo-4 > div >  button')


// Opérateur

let operateur = document.querySelectorAll('#operatorsExo4 > button')

let op1 = operateur[0]
let op2 = operateur[1]
let op3 = operateur[2]
let op4 = operateur[3]


let reponse4 = document.getElementById('response4')

let onOff = false

// number 


b0.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 0

    } else {
        input2.value += 0
    }
})

b1.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 1

    } else {
        input2.value += 1
    }
})
b2.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 2

    } else {
        input2.value += 2
    }
})
b3.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 3

    } else {
        input2.value += 3
    }
})
b4.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 4

    } else {
        input2.value += 4
    }
})
b5.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 5

    } else {
        input2.value += 5
    }
})
b6.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 6

    } else {
        input2.value += 6
    }
})
b7.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 7

    } else {
        input2.value += 7
    }
})
b8.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 8

    } else {
        input2.value += 8
    }
})
b9.addEventListener('click', () => {
    if (onOff === false) {
        input1.value += 9

    } else {
        input2.value += 9
    }
})

// Addition

op1.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-plus"></i>'
    egal.addEventListener('click', () => {
        reponse4.textContent = parseInt(input1.value) + parseInt(input2.value)
    })
    onOff = true
})

// Soustraction

op2.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-minus"></i>'
    egal.addEventListener('click', () => {
        reponse4.textContent = parseInt(input1.value) - parseInt(input2.value)
    })
    onOff = true
})

// Multiplication

op3.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-times"></i>'
    egal.addEventListener('click', () => {
        reponse4.textContent = parseInt(input1.value) * parseInt(input2.value)
    })
    onOff = true
})

// Division

op4.addEventListener('click', () => {
    mySpan.innerHTML = '<i class="fas fa-divide"></i>'
    egal.addEventListener('click', () => {
        reponse4.textContent = parseInt(input1.value) / parseInt(input2.value)
    })
    onOff = true
})

input1.addEventListener('click', () => {
    onOff = false
})
input2.addEventListener('click', () => {
    onOff = true
})








