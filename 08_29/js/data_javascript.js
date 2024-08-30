'use strict';

let hoje = new Date();

let hora = hoje.toLocaleTimeString('pt-br',{hour:'2-digit',minute:'2-digit'});

console.log(hora);