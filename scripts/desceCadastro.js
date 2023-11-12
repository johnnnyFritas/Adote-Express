//local para declarar variaveis e pegar elementos!
const loginMenu = document.querySelector('.ancora-login');
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const nome = document.querySelector('#nome');
const senha = document.querySelector('#senha');
const button = document.querySelector('.button-submit');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const borda = document.querySelector('#cadastrar');
var cont = 0;

//eventos utilizados!
loginMenu.addEventListener('click', ()=> {
    cont++;
    switch(cont % 2 != 0) {
        case true:
            desceLogin();
            break;
        case false:
            sobeLogin();
            break;
    }
});

//funções para aperecer o menu, remover e adicionar classes de css!
function desceLogin() {
    div1.classList.add('form-div-ajuste');
    div2.classList.add('form-div-ajuste');

    loginMenu.classList.add('estiliza-login');
    loginMenu.classList.add('ajusta-padding-login');
    loginMenu.classList.remove('ancora-login');

    label1.classList.add('estiliza-label');
    label2.classList.add('estiliza-label');

    nome.classList.add('estiliza-nome');
    nome.classList.add('estiliza-input');
    nome.classList.remove('nome');

    senha.classList.add('estiliza-senha');
    senha.classList.add('estiliza-input');
    senha.classList.remove('senha');

    button.classList.add('estiliza-button');
    button.classList.remove('button-submit');

    borda.classList.add('mantem-altura');
}

function sobeLogin() {
    div1.classList.remove('form-div-ajuste');
    div2.classList.remove('form-div-ajuste');

    loginMenu.classList.remove('estiliza-login');
    loginMenu.classList.remove('ajusta-padding-login');
    loginMenu.classList.add('ancora-login');

    label1.classList.remove('estiliza-label');
    label2.classList.remove('estiliza-label');

    nome.classList.remove('estiliza-nome');
    nome.classList.remove('estiliza-input');
    nome.classList.add('nome');

    senha.classList.remove('estiliza-senha');
    senha.classList.remove('estiliza-input');
    senha.classList.add('senha');

    button.classList.remove('estiliza-button');
    button.classList.add('button-submit');
}