$(document).ready(function() {

    function limpa_formulário_email() {
        $("#email").val();
    }
    
    //Quando o campo email perde o foco.
    $("#email").blur(function() {
    
        //Nova variável eemail.
        var eemail = $(this).val();
        //Verifica se campo cep possui valor informado.
        if (eemail != "") {
    
            //Consulta no arquivo validarAdm.php
            $.getJSON("validarAdm.php?email="+ eemail  , function(dados) {
    
    
                    if (!( dados.erro == true)) {
                        //Verificar se e-mail retornado não tem cadastro
                        
                        let emailCadastrado = dados.existente
                        if (emailCadastrado) {
                            
                            alert("O E-mail " + eemail + " já foi cadastrado");
                        }
                    } //end if.
                    else {
                        //email pesquisado não foi encontrado.
                        limpa_formulário_email();
                        alert("Erro ao consultar e-mail.");
                    }
            });
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_email();
        }
    });
    });
    