/* copie este código e cole no seu campo html*/

    document.addEventListener('DOMContentLoaded', function() {
    // Substitua 'input-selector' pelo seletor correto do campo que você deseja alterar.
    const campo = document.querySelector('input[name="c_nome"]');
   
    
    if (campo) {
        campo.addEventListener('input', function() {
            // Converte a primeira letra para maiúscula
            this.value = this.value.replace(/\b\w/g, function(letra) {
                return letra.toUpperCase();
            });
        });
    }
});



