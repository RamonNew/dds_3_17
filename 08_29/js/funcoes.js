'use strict';

function getNome() {
    return 'Ramon';
}

console.log(getNome());

let x = 5;
let y = 4;

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(x, y));

let numeros = [
    { n1: 8, n2: 10 },
    { n1: 2, n2: 5 },
    { n1: 10, n2: 5 },
    { n1: 3, n2: 6 },
];

for (let numero of numeros){
    console.log(numero);
}

console.log('for padrão');

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

console.log('chamando função soma');

for (let numero of numeros){
    let resultado = soma(numero.n1,numero.n2)
    console.log(resultado);
}