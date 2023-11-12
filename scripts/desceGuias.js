//local para declarar variaveis e pegar elementos!
const cuidados = document.querySelector('#cuidados');
const adocoes = document.querySelector('#adocoes');
const guias = document.querySelector('#guias');
const imagemGuias = document.querySelector('#seta-circulada-guias');
var y = 0;

//eventos utilizados!
guias.addEventListener('click', ()=> {
    y++;
    switch(y % 2 != 0) {
        case true:
            desceGuias();
            break;
        case false:
            sobeGuias();
            break;
    }
});

imagemGuias.addEventListener('click', ()=> {
    y++;
    switch(y % 2 != 0) {
        case true:
            desceGuias();
            break;
        case false:
            sobeGuias();
            break;
    }
});

//funções para aperecer o menu, remover e adicionar classes de css!
function desceGuias() {
    imagemGuias.classList.add('desce-seta');
    imagemGuias.classList.remove('sobe-seta');

    cuidados.classList.remove('cuidados');
    cuidados.classList.add('desce-cuidados');

    adocoes.classList.remove('adocoes');
    adocoes.classList.add('desce-adocoes');
}

function sobeGuias() {
    imagemGuias.classList.remove('desce-seta');
    imagemGuias.classList.add('sobe-seta');

    cuidados.classList.add('cuidados');
    cuidados.classList.remove('desce-cuidados');

    adocoes.classList.add('adocoes');
    adocoes.classList.remove('desce-adocoes');
}