const express = require("express");
const router = express.Router();
const livroController = require("../controllers/LivroController.js");

router.post("/livro/cadastrar", livroController.store)
router.get("/livro/listar", livroController.listar)
router.get("/livro/buscar/:Isbn", livroController.getByIsbn)
router.get("/livro/remover/:codigoBarras", livroController.excluir)
router.put("/livro/alterar/", livroController.alterar)


module.exports = router;