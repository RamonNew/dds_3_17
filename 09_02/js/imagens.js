'use strict';

const imagens = [
    {
        "id": 11,
        "alternativo": "fun",
        "caminho": "1724968856063.jpg",
        "created_at": "2024-08-29T22:00:56.000Z"
    },
    {
        "id": 12,
        "alternativo": "tes",
        "caminho": "1724968882685.jpg",
        "created_at": "2024-08-29T22:01:22.000Z"
    }
]

const anuncios = document.getElementById('anuncios');
let listaAnuncios = '';

for (let imagem of imagens) {
    listaAnuncios += `<img src='http://10.145.40.222:8080/public/${imagem.caminho}' alt='${imagem.alternativo}' />`
    console.log(imagem.caminho);
}

anuncios.innerHTML = listaAnuncios;