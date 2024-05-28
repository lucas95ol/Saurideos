var publicacaoModel = require("../models/publicacaoModel");

function listarPublicacao(req, res) {
  publicacaoModel.listarPublicacao().then(function (resultado) {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).send("Nenhum resultado encontrado!")
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function publicar(req, res) {
  var conteudo = req.body.conteudoServer;
  var idUsuario = req.body.idUsuarioServer;

  if (conteudo == undefined) {
    res.status(400).send("Seu conteudo está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("Seu idUsuario está undefined!");
  } else {
    publicacaoModel.publicar(conteudo, idUsuario)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }

}

module.exports = {
  listarPublicacao,
  publicar
};