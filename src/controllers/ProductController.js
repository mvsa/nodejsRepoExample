const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){ //lista todos
        const {page = 1} = req.query; //a pagina que pode ser pesquisada  = products?page=2 | pagina padrão
        const products = await Product.paginate({},{page : page, limit:10});//dentro dos parentesis ficam filtros se precisar, wheres, etc|| pagina atual e tamanho
        // com o await essa linha de baixo so executa se a de cima vier com os dados
        return res.json(products);
    },
    
    async show(req,res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req,res){
        const product = await Product.create(req.body);
        
        return res.json(product);
    }, 
    
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true}); //esse new true passa a variavel atualizada para product

        return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    },

};


//page : page pode ser so page