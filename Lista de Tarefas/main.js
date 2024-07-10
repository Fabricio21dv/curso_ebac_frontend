$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const atividadeNova = $('#nome-atividade').val();
        const descricao = $('textarea').val();
        const hora = $('#time').val();
        const novoItem = $(`
            <li style="display: none">
                <div class="atividade">
                    <strong>${atividadeNova}</strong>
                    <small>${hora}</small>
                    <p>${descricao}</p>
                </div>
            </li> 
            `);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(900);

        $('#nome-atividade').val('');
        $('textarea').val('');
        $('#time').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});