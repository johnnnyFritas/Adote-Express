//local para declarar variaveis e pegar elementos!
const registroAnimais = document.querySelector('#registros-animais');
const imagemAnimais = document.querySelector('#seta-circulada-animais');
const cachorro = document.querySelector('#cachorro');
const gato = document.querySelector('#gato');
const fixaRegistros = document.querySelector('#seleciona-registro');
var x = 0;

//eventos utilizados!
imagemAnimais.addEventListener('click', ()=> {
    x++;
    switch(x % 2 != 0) {
        case true:
            desceAnimais();
            break;
        case false:
            sobeAnimais();
            break;
    }
});

registroAnimais.addEventListener('click', ()=> {
    x++;
    switch(x % 2 != 0) {
        case true:
            desceAnimais();
            break;
        case false:
            sobeAnimais();
            break;
    }
});

//funções para aperecer o menu, remover e adicionar classes de css!
function desceAnimais() {
    imagemAnimais.classList.add('desce-seta');
    imagemAnimais.classList.remove('sobe-seta');

    cachorro.classList.remove('cachorro');
    cachorro.classList.add('desce-cachorro');

    gato.classList.remove('gato');
    gato.classList.add('desce-gato');

    login.classList.add('fixa-login');

    fixaRegistros.classList.add('fixa-registro');
}

function sobeAnimais() {
    imagemAnimais.classList.remove('desce-seta');
    imagemAnimais.classList.add('sobe-seta');

    cachorro.classList.add('cachorro');
    cachorro.classList.remove('desce-cachorro');

    gato.classList.add('gato');
    gato.classList.remove('desce-gato');

    if(x % 2 == 0 && i % 2 == 0) {
        login.classList.remove('fixa-login');
    };

    fixaRegistros.classList.remove('fixa-registro');
}