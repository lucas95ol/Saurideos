var database = require("../database/config");

function listarEspecie(){
    var instrucaoSql = "SELECT nomeEspecie, nomeCientifico, dieta FROM Especie;";

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {listarEspecie};