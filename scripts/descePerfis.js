//local para declarar variaveis e pegar elementos!
const perfis = document.querySelector('#perfis');
const imagemPerfis = document.querySelector('#seta-circulada-perfis');
const animais = document.querySelector('#animais');
const adotantes = document.querySelector('#adotantes');
var p = 0

//eventos utilizados!
perfis.addEventListener('click', ()=> {
    p++;
    switch(p % 2 != 0) {
        case true:
            descePerfis();
            break;
        case false:
            sobePerfis();
            break;
    }
});

imagemPerfis.addEventListener('click', ()=> {
    p++;
    switch(p % 2 != 0) {
        case true:
            descePerfis();
            break;
        case false:
            sobePerfis();
            break;
    }
});
//funções para aperecer o menu, remover e adicionar classes de css!
function descePerfis() {
    imagemPerfis.classList.add('desce-seta');
    imagemPerfis.classList.remove('sobe-seta');

    animais.classList.remove('animais');
    animais.classList.add('desce-animais');

    adotantes.classList.remove('adotantes');
    adotantes.classList.add('desce-adotantes');

    pefilAbrigo.classList.remove('perfil-abrigo');
    pefilAbrigo.classList.add('desce-perfil-abrigo');
}

function sobePerfis() {
    imagemPerfis.classList.remove('desce-seta');
    imagemPerfis.classList.add('sobe-seta');

    animais.classList.remove('desce-animais');
    animais.classList.add('animais');

    adotantes.classList.remove('desce-adotantes');
    adotantes.classList.add('adotantes');

    pefilAbrigo.classList.add('perfil-abrigo');
    pefilAbrigo.classList.remove('desce-perfil-abrigo');
}