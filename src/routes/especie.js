var express = require("express");
var router = express.Router();

var especieController = require("../controllers/especieController");

router.get("/listarEspecie", function (req, res){
    especieController.listarEspecie(req, res);
});

router.post("/cadastrarEspecie", function(req, res){
    especieController.cadastrarEspecie(req, res);
});


module.exports = router;