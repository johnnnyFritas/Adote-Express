//local para declarar variaveis e pegar elementos!
var y = 0, z = 0;

//eventos utilizados!
image.addEventListener('click', ()=> {
    y++;
    if(y % 2 != 0 && z % 2 != 0) {
        login.classList.add('ajusta-login');
    } else {
        login.classList.remove('ajusta-login');
    }
});

ancora.addEventListener('click', ()=> {
    y++;
    if(y % 2 != 0 && z % 2 != 0) {
        login.classList.add('ajusta-login');
    } else {
        login.classList.remove('ajusta-login');
    }
});

imagemAnimais.addEventListener('click', ()=> {
    z++;
    if(y % 2 != 0 && z % 2 != 0) {
        login.classList.add('ajusta-login');
    } else {
        login.classList.remove('ajusta-login');
    }
});

registroAnimais.addEventListener('click', ()=> {
    z++;
    if(y % 2 != 0 && z % 2 != 0) {
        login.classList.add('ajusta-login');
    } else {
        login.classList.remove('ajusta-login');
    }
});