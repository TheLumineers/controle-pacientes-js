var botaoBuscarPaciete = document.querySelector('#buscar-pacientes');

botaoBuscarPaciete.addEventListener('click', function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });   
        } else{
          console.log(xhr.status);  
          var erroAjax = document.querySelectorAll('#erro-ajax');
          erroAjax.classList.remove('invisivel');
        }
    });

    xhr.send();
});