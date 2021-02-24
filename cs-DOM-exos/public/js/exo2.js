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
let li = document.querySelector('li')

li.textContent = 'Hello World'

