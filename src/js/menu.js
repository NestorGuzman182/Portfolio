const ipad = window.matchMedia('screen and (max-width: 786px');


const menu = document.querySelector('.navbar');
const showButton = document.querySelector('#btn-menu');
const closeButton = document.querySelector('#btn-menu-2');




ipad.addListener(validate);

function validate (event){
    if(event.matches){
        showButton.addEventListener('click', show);
        closeButton.addEventListener('click', close);
    }else{ 
        closeButton.addEventListener('click', close)
    }
}

validate(ipad);

function show (){
    menu.classList.add('is-active');
    showButton.style.display = 'none';
    closeButton.style.display = 'block';
    console.log(menu.classList)
}

function close (){
    menu.classList.remove('is-active');
    closeButton.style.display = 'none';
    showButton.style.display = 'block';
}


