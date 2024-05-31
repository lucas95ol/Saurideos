var database = require("../database/config");

function retornarQtdPorEspecie(){
    var instrucaoSql = `SELECT Especie.nomeEspecie ,count(idDinossauro) as qtdEspecie FROM Dinossauro
    JOIN Especie ON Dinossauro.fkEspecie = Especie.idEspecie
    GROUP BY fkEspecie;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    retornarQtdPorEspecie
};