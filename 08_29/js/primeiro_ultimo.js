'use strict';

let nomes_alunos = [
    'GABRIEL RESENDE PEREIRA',
    'GIAMPAOLO RESENDE PEREIRA',
    'GUSTAVO DIAS SANTANA',
    'IGOR STEIN DOS SANTOS',
    'LAHRA SOUZA NUNES',
    'LUCAS MEDINA RAMOS',
    'LUIZ FELIPE XAVIER BIZIO',
    'MARCUS VINICIUS GUEDES DRUMOND',
    'MATEUS BARBOZA SANTANA',
    'VALDINEIDE SCHUNk',
    'VITOR RIBEIRO FONSECA',
    'maria'
];

for (let i = 0; i < nomes_alunos.length; i++){
    var pieces = nomes_alunos[i].split(' ');
    if (pieces.length >= 2){
        console.log(pieces[0],pieces[pieces.length-1]);
    }else{
        console.log(nomes_alunos[i]);
    }
}