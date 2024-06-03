var express = require("express");
var router = express.Router();

var curiosidadeController = require("../controllers/curiosidadeController");

router.get("/consultarCuriosidade", function (req, res) {
    curiosidadeController.consultarCuriosidade(req, res);
});

module.exports = router;