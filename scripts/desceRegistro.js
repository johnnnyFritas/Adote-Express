//local para declarar variaveis e pegar elementos!
const image = document.querySelector('#seta-circulada');
const ancora = document.querySelector('#registros');
const pet = document.querySelector('#pet');
const abrigo = document.querySelector('#abrigo');
const registro = document.querySelector('.registro');
const login = document.querySelector('.login-cadastro');
const animais = document.querySelector('#seleciona-animais');
var i = 0;

//eventos utilizados!
image.addEventListener('click', ()=> {
    i++;
    switch(i % 2 != 0) {
        case true:
            desceRegistros();
            break;
        case false:
            sobreRegistros();
            break;
    }
});

ancora.addEventListener('click', ()=> {
    i++;
    switch(i % 2 != 0) {
        case true:
            desceRegistros();
            break;
        case false:
            sobreRegistros();
            break;
    }
});

//funções para aperecer o menu, remover e adicionar classes de css!
function desceRegistros() {
    image.classList.add('desce-seta');
    image.classList.remove('sobe-seta');

    pet.classList.remove('pet');
    pet.classList.add('desce-pet');

    abrigo.classList.remove('abrigo');
    abrigo.classList.add('desce-abrigo');

    login.classList.add('fixa-login');

    animais.classList.add('fixa-animais');
}

function sobreRegistros() {
    image.classList.remove('desce-seta');
    image.classList.add('sobe-seta');

    pet.classList.remove('desce-pet');
    pet.classList.add('pet');

    abrigo.classList.remove('desce-abrigo');
    abrigo.classList.add('abrigo');

    login.classList.remove('fixa-login');
    
    animais.classList.remove('fixa-animais');
}