const form = document.getElementById('form-orcamento');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const custoEstimadoProjeto = document.getElementById('custo-estimado');
    const valorDisponivel = document.getElementById('valor-disponivel');
    const mensagemSucesso = `Seu orçamento foi confirmado e será analisado em até 48h`;

    if (parseFloat(valorDisponivel.value) >= parseFloat(custoEstimadoProjeto.value)) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeCliente.value = '';
        custoEstimadoProjeto.value = '';
        valorDisponivel.value = '';
        descricao.value = '';
    } else {
        custoEstimadoProjeto.style.border = '1px solid rgb(214, 83, 83)';
        valorDisponivel.style.border = '1px solid rgb(214, 83, 83)';
        document.querySelector('.error-message').style.display = 'block';
    }
})
