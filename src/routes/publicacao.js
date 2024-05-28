var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

router.get("/listarPublicacao", function (req, res){
    publicacaoController.listarPublicacao(req, res);
});

router.post("/publicar", function (req, res){
   publicacaoController.publicar(req, res); 
});

module.exports = router;
