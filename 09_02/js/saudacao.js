'use strict';

// Criando função para atualizar saudação
function atualizaSaudacao() {
    // Obtendo data de agora
    const agora = new Date();
    //console.log(agora.getDay());

    // Obtendo o número da semana iniciando de 0 indo até 6
    const dia = agora.getDay();

    // Criando Array de dias da semana equivalente
    const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    //console.log(dias[dia]);

    // Obtendo horas em valor inteiro
    const hora = agora.getHours();

    // Declarando variavel de cumprimento
    let cumprimento = '';

    // Verificação da saudação adequada
    if (hora < 6) {
        cumprimento = 'Boa Madrugada';
    } else if (hora < 12) {
        cumprimento = 'Bom Dia';
    } else if (hora < 18) {
        cumprimento = 'Boa Tarde'
    } else {
        cumprimento = 'Boa Noite';
    }

    // Selecionando Elemento 
    const saudacao = document.getElementById('saudacao');

    // Adicionando no documento html
    saudacao.innerHTML = `${dias[dia]} - ${cumprimento}`;

    // Chaando função de forma recursiva
    setTimeout(atualizaSaudacao,1000);
}

atualizaSaudacao();