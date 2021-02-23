// 4 

let body = document.querySelector('body')

let buttonFirst = document.createElement('button')
buttonFirst.textContent = 'Clique ici'

body.appendChild(buttonFirst)

buttonFirst.addEventListener('click', () => {
    let h1 = document.createElement('h1')
    h1.textContent = 'Hello World'
    body.appendChild(h1)
})


// 5

let para = document.createElement('p')

para.textContent = 'Je suis un p'

body.appendChild(para)

let buttonSecond = document.createElement('button')
buttonSecond.textContent = 'Modifier la couleur du p'

body.appendChild(buttonSecond)

buttonSecond.addEventListener('click', () => {
    para.style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
})

// 6

buttonThree = document.createElement('button')
buttonThree.textContent = 'Je lance une fonction'
body.appendChild(buttonThree)

buttonThree.addEventListener('click', () => {
    let h2 = document.createElement('h2')
    h2.textContent = 'Je suis un h2'
    body.appendChild(h2)
    let bouton = document.createElement('button')
    bouton.textContent = 'Modifier le titre du h2'
    body.appendChild(bouton)
    bouton.addEventListener('click', () => {
        h2.style.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    })
})


