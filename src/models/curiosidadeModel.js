var database = require("../database/config");

function consultarCuriosidade(){
    var instrucaoSql = "SELECT conteudo FROM Curiosidade;"

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    consultarCuriosidade
}