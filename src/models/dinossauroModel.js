var database = require("../database/config");

function retornarQtdPorEspecie() {
    var instrucaoSql = `SELECT Especie.nomeEspecie ,count(idDinossauro) as qtdEspecie FROM Dinossauro
    JOIN Especie ON Dinossauro.fkEspecie = Especie.idEspecie
    GROUP BY fkEspecie;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarDinossauro(fkDistrito) {
    var instrucaoSql = `
    SELECT idDinossauro, nome,  Especie.nomeEspecie as especie, Especie.dieta, saude FROM Dinossauro
    JOIN Especie ON Dinossauro.fkEspecie = Especie.idEspecie
    WHERE fkDistrito = ${fkDistrito};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarDinossauro(nome, saude, dtNascimento, fkEspecie, fkDistrito){
    var instrucaoSql = `
    INSERT INTO Dinossauro (nome, saude, dtNascimento, fkEspecie, fkDistrito) VALUES
    ('${nome}', ${saude}, '${dtNascimento}', ${fkEspecie}, ${fkDistrito});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    retornarQtdPorEspecie,
    listarDinossauro,
    cadastrarDinossauro
};