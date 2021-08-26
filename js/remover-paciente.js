
var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //TR = paciente remover
    paiDoAlvo.classList.add('fadeOut')

    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);

    
});