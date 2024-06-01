var express = require("express");
var router = express.Router();

var dinossauroController = require("../controllers/dinossauroController");

router.get('/retornarQtdPorEspecie', function (req, res){
    dinossauroController.retornarQtdPorEspecie(req, res);
})

router.get('/listarDinossauro', function (req, res){
    dinossauroController.listarDinossauro(req, res);
});

router.post('/cadastrarDinossauro', function(req, res){
    dinossauroController.cadastrarDinossauro(req, res);
});


module.exports = router;