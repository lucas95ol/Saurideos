var especieModel = require("../models/EspecieModel");

function listarEspecie(req, res) {
  especieModel.listarEspecie().then(function (resultado) {
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

function listarNomeEspecie(req, res){
  especieModel.listarNomeEspecie().then(function (resultado) {
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

function cadastrarEspecie(req, res) {
  var nomeEspecie = req.body.nomeEspecie;
  var nomeCientifico = req.body.nomeCientifico;
  var dieta = req.body.dieta;

  if (nomeEspecie == undefined) {
    res.status(400).send("nome da espécie está undefined!");
  } else if (nomeCientifico == undefined) {
    res.status(400).send("nome cientifico está undefined!");
  } else if (dieta == undefined) {
    res.status(400).send("dieta está undefined!");
  } else {
    especieModel.cadastrarEspecie(nomeEspecie, nomeCientifico, dieta)
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
  listarEspecie,
  listarNomeEspecie,
  cadastrarEspecie
};