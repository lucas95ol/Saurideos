var express = require("express");
var router = express.Router();

var dinossauroController = require("../controllers/dinossauroController");

router.get('/retornarQtdPorEspecie', function (req, res){
    dinossauroController.retornarQtdPorEspecie(req, res);
})


module.exports = router;