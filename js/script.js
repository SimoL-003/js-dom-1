// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...

const switchButtonElem = document.getElementById("switch");
const lampImgElem = document.getElementById("lamp-img");
const mainElem = document.querySelector("main");

/**
 * Creare una funzione che, al click del bottone
 *      se l'innerHTML del button è uguale a "Accendi", allora al click l'immagine e l'innerHTML cambiano in funzione della lampadina accesa;
 *      altrimenti se l'innerHTML del bottone è uguale a "Spegni", cambiano tornando allo stato iniziale
 */

switchButtonElem.addEventListener("click", function () {
    if (switchButtonElem.innerHTML === "Accendi") {
        switchButtonElem.innerHTML = "Spegni";
        lampImgElem.src = "./img/yellow_lamp.png";
        switchButtonElem.classList.add("active");
        mainElem.style.backgroundColor = "rgb(255, 255, 150)";
    } else if (switchButtonElem.innerHTML === "Spegni") {
        switchButtonElem.innerHTML = "Accendi";
        lampImgElem.src = "./img/white_lamp.png";
        switchButtonElem.classList.remove("active");
        mainElem.style.backgroundColor = "black";
    }
})