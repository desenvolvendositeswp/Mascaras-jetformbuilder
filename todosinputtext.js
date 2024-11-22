/* para todos os campos tipo 'TEXT' começarem con letras maiucsulas*/ 

document.addEventListener('DOMContentLoaded', function() {
    // Selecione todos os campos que você deseja aplicar a máscara
    const campos = document.querySelectorAll('input[type="text"]'); // ou outro seletor de campo
    
    campos.forEach(function(campo) {
        campo.addEventListener('input', function() {
            // Converte a primeira letra de cada palavra para maiúscula
            this.value = this.value.replace(/\b\w/g, function(letra) {
                return letra.toUpperCase();
            });
        });
    });
});
