var database = require("../database/config");

function listarPublicacao() {
    var instrucaoSql = `
    SELECT conteudo, dtHorarioPublicacao, Usuario.nome as nomeUsuario FROM Publicacao
    JOIN Usuario ON Publicacao.fkUsuario = Usuario.idUsuario; 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(conteudo, idUsuario){
    var instrucaoSql = `
        INSERT INTO Publicacao (conteudo, dtHorarioPublicacao, fkUsuario) VALUES
        (${conteudo}, now(), ${idUsuario}); 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPublicacao,
    publicar
};