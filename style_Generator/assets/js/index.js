let body = document.querySelector('body')

// White Button

let white = document.querySelector('button')

// red Button

let red = white.nextElementSibling

// green Button

let green = red.nextElementSibling

// purple Button

let purple = green.nextElementSibling




// Div Principal
let myDiv = document.querySelector('.myDiv')



// Changement de couleur 

white.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'white'
})

red.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'red'
})

green.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'green'
})

purple.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'rgb(92, 1, 211)'
})


// Ajout de Border
let myBorder = document.querySelectorAll('.rectangle')[0]
let myBorder2 = myBorder.nextElementSibling
let myBorder3 = myBorder2.nextElementSibling

myBorder.addEventListener('click', () => {
    myDiv.style.border = 'solid 10px black'
})

myBorder2.addEventListener('click', () => {
    myDiv.style.border = 'dashed 5px black'
})

myBorder3.addEventListener('click', () => {
    myDiv.style.border = 'solid 1px black'
})



// Ajout top
let myTop = document.querySelectorAll('.myTop')[0]
let myTop2 = myTop.nextElementSibling
let myTop3 = myTop2.nextElementSibling

myTop.addEventListener('click', () => {
    myDiv.style.borderTop = 'hidden'
})

myTop2.addEventListener('click', () => {
    myDiv.style.borderTop = 'solid 5px red'
})

myTop3.addEventListener('click', () => {
    myDiv.style.borderTop = 'solid 10px red'
})

// background color input

let colorpicker = document.getElementById('myInput')


colorpicker.addEventListener('change', () => {
    myDiv.style.backgroundColor = colorpicker.value
})

// Border => Input value

let myValue = document.querySelectorAll('.myNumInput>input')[0]

// Border 

myValue.addEventListener('change', () => {
    myDiv.style.border = `solid black ${myValue.value}px`
})


// Border Top

let myValue1 = document.querySelectorAll('.myNumInput>input')[1]

myValue1.addEventListener('change', () => {
    myDiv.style.borderTop = `solid black ${myValue1.value}px`
})

// Border Right

let myValue2 = document.querySelectorAll('.myNumInput>input')[2]

myValue2.addEventListener('change', () => {
    myDiv.style.borderRight = `solid black ${myValue2.value}px`
})

// Border Bottom

let myValue3 = document.querySelectorAll('.myNumInput>input')[3]

myValue3.addEventListener('change', () => {
    myDiv.style.borderBottom = `solid black ${myValue3.value}px`
})

// Border Left

let myValue4 = document.querySelectorAll('.myNumInput>input')[4]

myValue4.addEventListener('change', () => {
    myDiv.style.borderLeft = `solid black ${myValue4.value}px`
})



// Border-radius => Input value

// border-radius

myRadius = document.querySelector('.roundedOne')

myRadius.addEventListener('change', () => {
    myDiv.style.borderRadius = `${myRadius.value}%`
})

// border Top Left

myRadius1 = document.querySelector('.roundedTwo')

myRadius1.addEventListener('change', () => {
    myDiv.style.borderRadius = `${myRadius1.value}%`
})

// border Top Right

myRadius2 = document.querySelector('.roundedThree')

myRadius2.addEventListener('change', () => {
    myDiv.style.borderTopRightRadius = `${myRadius2.value}%`
})

// border Bottom Right

myRadius3 = document.querySelector('.roundedFour')

myRadius3.addEventListener('change', () => {
    myDiv.style.borderBottomRightRadius = `${myRadius3.value}%`
})

// border Bottom Left

myRadius4 = document.querySelector('.roundedFive')

myRadius4.addEventListener('change', () => {
    myDiv.style.borderBottomLeftRadius = `${myRadius4.value}%`
})