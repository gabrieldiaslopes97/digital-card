// window.scrollbars.visible='false';/// deixar o scrollbar oculto

var button =document.querySelector('.sobre_nos');

function Walkinpage(){
    if(window.scrollY==0 ){

        
        window.scrollTo(0, 800);

    }
}

button.addEventListener('click', Walkinpage);