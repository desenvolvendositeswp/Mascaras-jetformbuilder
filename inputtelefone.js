/*Copie e cole no HTML do seu projeto*/

document.addEventListener('DOMContentLoaded', function() {
    const campoTelefone = document.querySelector('input[name="telefone"]'); // Substitua pelo nome do seu campo

    if (campoTelefone) {
        campoTelefone.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, ''); // Remove tudo que não for número
            if (valor.length <= 10) {
                valor = valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'); // Formato (XX) XXXX-XXXX
            } else {
                valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formato (XX) XXXXX-XXXX
            }
            this.value = valor;
        });
    }
});
