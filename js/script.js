
const oficina = {
    title: String,
    url: String,
}
botaoAdicionar = document.querySelector(".main-button");
oficina.title = document.querySelector("#name");
oficina.url = document.querySelector("#url");

    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        adicionaOficina(oficina);
        document.querySelector("#name") = "";
    });



// HTML
function adicionaOficina(oficina) {


const figure = document.createElement("figure");
const img= document.createElement('img');
const title= document.createElement('figcaption');

const listBanners= document.querySelector(".list-banners");

figure.classList.add("wrapper-banner");// <figure class="wrapper-banner">

img.src= oficina.url.value; // <img src="ima/banner4.png">
img.alt = "Banner of the movie"; // <img src="img/banner4.png"alt="Banner of the movie">
img.classList.add("main-banner"); // <img class="main-banner" src="img/banner4.png" alt="Banner of the movie">

title.textContent = oficina.title.value; // <figcaption>Nome do Fi;me</figcaption>
title.classList.add("main-caption"); // <figcaption class="main-caption"> Nome do Filme</figcaption>

figure.insertAdjacentElement('beforeend', img);
figure.insertAdjacentElement('beforeend', title);


listBanners.insertAdjacentElement("beforeend",figure);
}


