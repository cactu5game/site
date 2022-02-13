const darkMode = document.querySelector('#mode-toggle');
const body = document.body;

darkMode.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    console.log(body);
})

// Verificam daca utiilzatorul are selectate functia dark mode //

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.toggle('dark-mode');
    console.log('dark-mode')
}

function generateCard(proiect) {
    // Generam li
    const li = document.createElement("li");

    // Generam div
    const div = document.createElement("div");
    div.classList.add("card");

    // Generam imaginea
    const cardImg = document.createElement ("img");
    cardImg.src = proiect.imagine;
    cardImg.alt = proiect.nume;
    // Adaugam Img in div
    div.append(cardImg);

    const cardContent = document.createElement ("div");
    cardContent.classList.add("card-content")

    // Adaugam Titlul
    const titlu = document.createElement ("h3")
    titlu.textContent = proiect.nume;
    cardContent.append(titlu);

    // Adaugam paragraf
    const paragraf = document.createElement ("p");
    paragraf.textContent = proiect.descriere;
    cardContent.append(paragraf);

    // Adaugam buton
    const buton = document.createElement ("button");
    buton.textContent = "MAI MULTE";
    buton.onclick = function() {
        location.href = proiect.link;
    }
    cardContent.append(buton);

    // Adaugam divul cu informatii
    div.append(cardContent);
    // Adaugam Cardul in li
    li.append(div);
    // Adaugam li in container
    const cardsContainer = document.querySelectorAll(".cards-list")[0];
    cardsContainer.append(li);
}