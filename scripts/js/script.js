$(document).ready(function(){
    $(".teste").onclick(function(){
        //Aqui estau retirando o conteudo da propriedade href “o link destino” e colocando em uma variavel
        var link = $(this).attr('href');
        $.ajax
        ({
            dataType: 'html',
            url: link, //link da pagina que o ajax buscará
            success: function(data)
            {
                $(".projeto").html(data).fadeIn(340); //Inserindo o retorno da pagina ajax
            },
            error: function(data){
                $(".projeto").html("<center><p>ERRO ao carregar outra pagina</p></center>").fadeIn(300); //Em caso de erro ele exibe esta mensagem
            }
        }); 
     
    });
});