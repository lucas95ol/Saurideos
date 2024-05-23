var database = require("../database/config");

function buscarEspecieFavorita(idUsuario) {

    var instrucaoSql = `SELECT * FROM Especie 
    JOIN Usuario ON Especie.idEspecie = Usuario.fkEspecieFavorita
    WHERE idUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {

    var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarEspecieFavorita,
    cadastrar
}