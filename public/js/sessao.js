// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var fkEspecie = sessionStorage.FK_ESPECIE;

    fetch("/especie/listarNomeEspecie", {
        method: "GET"
    }).then(function (resposta) {
        resposta.json().then((especie) => {
            especie.forEach((especie) => {
                if(especie.idEspecie == fkEspecie){
                    document.getElementById("p_especie").innerHTML = especie.nomeEspecie;
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        })
    })

    if (email == null && nome == null) {
        window.location = "../login.html";
    } else {
        document.getElementById("nome_usuario").innerHTML = nome;
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }

