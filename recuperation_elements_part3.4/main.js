// 1 
let elements = document.querySelectorAll('#liste-competences > h2')
console.log(elements);


let competences = {
    HTML: 100,
    CSS: 70,
    JS: 60,
    React: 50,
    Laravel: 40
}

elements.forEach((element, index) => {
    element.textContent += " " + Object.values(competences)[index]
    console.log(elements);
    if (Object.values(competences)[index] < 50) {
        element.style.backgroundColor = "red";
    }
    if (Object.values(competences)[index] > 50) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
    }
    if (Object.values(competences)[index] == 100) {
        element.style.backgroundColor = "gold";
        element.style.color = "black";
    }
    if (Object.values(competences)[index] == 50) {

    }
});





