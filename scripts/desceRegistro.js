//local para declarar variaveis e pegar elementos!
const image = document.querySelector('#seta-circulada');
const ancora = document.querySelector('#registros');
const pet = document.querySelector('#pet');
const abrigo = document.querySelector('#abrigo');
var i = 0;

//eventos utilizados!
image.addEventListener('click', ()=> {
    i++;
    switch(i % 2 != 0) {
        case true:
            desceRegistros();
            break;
        case false:
            sobeRegistros();
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
            sobeRegistros();
            console.log(i);
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
}

function sobeRegistros() {
    image.classList.remove('desce-seta');
    image.classList.add('sobe-seta');

    pet.classList.remove('desce-pet');
    pet.classList.add('pet');

    abrigo.classList.remove('desce-abrigo');
    abrigo.classList.add('abrigo');
}