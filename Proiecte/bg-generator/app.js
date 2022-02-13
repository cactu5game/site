// Selectam elementul h3
const css = document.querySelector("h3");
// Selectam input-urile
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
// Selectam body
const body = document.querySelector("#gradient");
// Selectam butonul
const randomBtn = document.querySelector("#randomBtn");

function setGradient(firstColor, secondColor) {
    // Selectam proprietatea background din body
    // Setam background-ul la culorile alese
    body.style.background = "linear-gradient(to right, " + firstColor + ", " + secondColor +")";

    css.textContent = body.style.background + ";";
}

function setGradientOnInput() {
    setGradient(color1.value, color2.value);
}

//Returneaza un nr aleator intre 0-250
function randomizer() {
// Math.floor() functie care returneaza cel ami mare nr rotunjit
// Math.random() returneaza nr random intre 0-1
    return Math.floor(Math.random() * Math.floor(250));
}

// Returneaza un text pentru a folosi ca proprietate
function randomColor() {
    const randomColor = "rgb(" + randomizer() + ", "  + randomizer() + ", "  + randomizer()
 + ")";
 return randomColor;
}

// Schimba fundalul in functie de valorile aleatoare
function setRandomGradient() {
        setGradient(randomColor(), randomColor());
}

randomBtn.addEventListener('click', setRandomGradient);
color1.addEventListener("input", setGradientOnInput);
color2.addEventListener("input", setGradientOnInput);


 setGradientOnInput();