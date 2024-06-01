var dinossauroModel = require("../models/dinossauroModel");

function retornarQtdPorEspecie(req ,res){
    dinossauroModel.retornarQtdPorEspecie().then(function (resultado) {
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

function listarDinossauro(req, res){
    var fkDistrito = req.query.fkDistrito;

    dinossauroModel.listarDinossauro(fkDistrito).then(function (resultado) {
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

function cadastrarDinossauro(req, res){
    var nome = req.body.nome;
    var saude = req.body.saude;
    var dtNascimento = req.body.dtNascimento;
    var fkEspecie = req.body.fkEspecie;
    var fkDistrito = req.body.fkDistrito;

    if (nome == undefined) {
      res.status(400).send("nome está undefined!");
    } else if (saude == undefined) {
      res.status(400).send("saude está undefined!");
    } else if (dtNascimento == undefined) {
      res.status(400).send("data de nascimento está undefined!");
    } else if (fkEspecie == undefined) {
      res.status(400).send("fkEspecie está undefined!");
    } else if (fkDistrito == undefined) {
      res.status(400).send("fkDistrito está undefined!");
    } else {
      dinossauroModel.cadastrarDinossauro(nome, saude, dtNascimento, fkEspecie, fkDistrito)
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
    retornarQtdPorEspecie,
    listarDinossauro,
    cadastrarDinossauro
}