const sources = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.png"
]
const padre = document.getElementById("padres")
const figlios = document.getElementById("figlios")
for (let i = 0; i < sources.length; i++) {
    const divImg = `<div><img class="carosello" src=${sources[i]} alt=""></div>`
    padre.innerHTML += divImg
    const divThumb = `<div><img class="thumb" src=${sources[i]} alt=""></div>`
    figlios.innerHTML += divThumb
}
const images = document.querySelectorAll("#padres img")
const thumbs = document.querySelectorAll(".thumb")

//* Setto il currentActive e aggiungo le classi active all'immagine e thumb iniziali
let currentActive = 0
images[currentActive].classList.add("active")
thumbs[currentActive].classList.add("actives")

//* Faccio scorrere ogni 8 secondi le immagini del carosello e delle thumbnail
const clock = setInterval(myFunction, 8000);
function myFunction() {
    images[currentActive].classList.remove("active")
    thumbs[currentActive].classList.remove("actives")
    currentActive++
    if (currentActive === images.length) {
        currentActive = 0
    }
    images[currentActive].classList.add("active")
    thumbs[currentActive].classList.add("actives")
}
//* Quando clicco il thumbnail, lo lascio selezionato e lo faccio apparire nel carosello
for (let i = 0; i < thumbs.length; i++) {
    const thumb = thumbs[i]
    thumb.addEventListener("click", function () {
        images[currentActive].classList.remove("active")
        thumbs[currentActive].classList.remove("actives")

        currentActive = i

        images[currentActive].classList.add("active")
        thumbs[currentActive].classList.add("actives")
    })
}








