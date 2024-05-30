var database = require("../database/config");

function listarEspecie(){
    var instrucaoSql = "SELECT nomeEspecie, nomeCientifico, dieta FROM Especie;";

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarEspecie(nomeEspecie, nomeCientifico, dieta){
    var instrucaoSql = `INSERT INTO Especie (nomeEspecie, nomeCientifico, dieta) 
    VALUES ('${nomeEspecie}', '${nomeCientifico}', '${dieta}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarEspecie,
    cadastrarEspecie
};