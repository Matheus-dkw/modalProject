
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    console.log(modalID);
    modal.classList.add('mostrar')

    modal.addEventListener('click', function(evento){
        if(evento.target.id == modalID || evento.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

const logo = document.querySelector('.abrir-modal')
logo.addEventListener('click', function(){
    iniciaModal('modal-promocao');
})



