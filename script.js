"use strict"

const container = document.querySelector('.container');
const nameClick = document.querySelectorAll('.contact-info');

nameClick.forEach(el => el.addEventListener('click', (e) => {
    container.innerHTML = '';
    if(e.target.classList.contains('C'))
     {   container.insertAdjacentHTML( "afterbegin",`<a>snake</a>`);}
    else{
        container.insertAdjacentHTML("afterbegin", `<a>tic tac toe</a>`) 
    }

}))