const livroSchema = require('../models/LivroSchema.js');

class LivroController{
   

    async store(req,res){
        var result = await livroSchema.create(req.body,(err) =>{
            if(err){
                res.status(400).json({err , error : 'Erro. Código já cadastrado.'});
            }else{
                res.status(201).json(result);
            }
        });
    }

      async listar(req, res) {
        var result = await livroSchema.find({});
        res.status(200).json(result);
      }

      async getByIsbn(req, res) {
        var result = await livroSchema.findOne({Isbn : req.params.Isbn});
        res.status(200).json(result);
      }
      async alterar(req, res) {
        var result = await livroSchema.updateOne({Isbn : req.body.Isbn}, req.body);
        res.status(200).json(result);
      }
      async excluir(req, res) {
        var result = await livroSchema.deleteOne({Isbn : req.params.Isbn});
        res.status(200).json(result);
      }
}

module.exports = new LivroController();
