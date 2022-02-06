// Variabile 
var variabilaMea;

// Tipuri de variabile mai noi
let variabilaMea2 = 1;
const variabilaConstanta = 1;
// Definirea unor variabile goale
let unu, doi, trei;

// Nedefinit si null
let nedefinit = undefined;
let nul = null;

let number = 3;
let text = 'text';
let boolean = true;

// Array
let lists = [1, 2, 'trei'];

// Aaccesarea elementelor dintr-o lista
console.log(lists);
console.log(lists[0]);

// Obiecte
let obiecte = {
    nume : 'Ion',
    varsta : 49
}

// Lipire text
let textDoi = ' inca un text'
let textLipit = text + textDoi
console.log(textLipit)

//Operatii matematice
let adunare = 2 + 2;
let scadere = 2 - 2;
let inmultire = 2 * 2;
let impartire = 2 / 2;

//Increment
adunare++;

//Decrement
adunare--;

//Conduitionale
if(2 < 1) {
    console.log('adevarat');
}

if(2 < 1) {
    console.log('adevarat');
} else {
    'fals'
}

//Operatori logici
//Si(&&)
if (1 < 3 && 3 > 5) {
    console.log('adevarat');
}

//Sau (||)
if (1 < 3 || 3 > 5) {
    console.log('adevarat');
}

// NOT
if (1 != 3) {
    console.log('adevarat');
}

// Functii
function AdunaDoi(a, b) {
    console.log(a + b);
}

AdunaDoi(2, 6);

// Secunde in zi
function secundeInOra(ore) {
    const minInOra = 60;
    const secInMin = 60;
    const totalMin = ore * minInOra;
    return totalMin * secInMin
}

console.log(secundeInOra(24));

//Selectare D0OM (Document Object Model)
const fereastraBrowser = window;
const documentPagina = window.document;

console.log(documentPagina.body);

//Selectare element dupa ID
const selectareID = document.getElementById('titlu');

//Selectare element dupa clasa
const SelectareClasa = document.getElementsByClassName('paragraf');

//Selector tip CSS
const paragraf = document.querySelector('p');

//Varsta in secunde
function varstaInSecunde(varsta) {
    const zileInAn = 365;
    const secInAn = secundeInOra(24) * zileInAn;
    return varsta * secInAn;
}

//Selectam Butonul cu ID calculeaza
const buton = document.querySelector('#calculeaza');

buton.addEventListener('click', function() {
    const input = document.querySelector('#varsta').value;

    let raspuns = varstaInSecunde(input);
    window.alert(raspuns);
})
