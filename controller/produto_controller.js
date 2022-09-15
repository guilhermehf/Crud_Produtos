const produtos = [
    {id:1, nome:"Arroz", preco: 4.5},
    {id:2, nome:"Bolacha", preco:2.5},
    {id:3, nome:"Doritos", preco:15},
    {id:4, nome:"Chocolate", preco:5.8}];

    let idGerado = 4;

    exports.listar = (req, res) => {
        res.json(produtos)
    }

    exports.inserir =  (req, res) => {
        const novoProduto = req.body;
        if(novoProduto && novoProduto.nome && novoProduto.preco){
    
            novoProduto.id = idGerado++;
        //idGerado = 6
        produtos.push(novoProduto);
        return res.status(201).json(novoProduto);
    
        }
        else{
            return res.status(400).json({
                Error:"Nome e/ou preco sao obrigatorio"
            })
        }
    }

    exports.buscarPorId = (req, res) => {
        const id= req.params.id;
        const produtoEncontrado = produtos.find((produto) => {
            return produto.id == id;
        })
    
        if(produtoEncontrado){
            
            return res.json(produtoEncontrado);
        }
        else{
            return res.status(404).json(
                {Erro:"Produto não encontrado"})
    
        }
    }

    exports.atualizar =  (req, res) => {
        //Receber os dados que vem do request (req)
    
        const id = req.params.id;
        const produtoAlterar = req.body;
    
        if(!produtoAlterar || !produtoAlterar.nome || produtoAlterar.preco){
    
            return res.status(400).json({
                Error:"Nome e/ou preco sao obrigatorio"
            });
    
        }
    
        //Realizar/delegar a função de negocio
    
        const produtoEncontrado = produtos.find(
            (produto) => {
                return produto.id == id;
            }
        )
    
        if(produtoEncontrado){
            produtoEncontrado.nome = produtoAlterar.nome;
            produtoEncontrado.preco = produtoAlterar.preco;
            return res.json(produtoEncontrado)
        }
        else{
            return res.status(404).json(
                {Erro:"Produto não encontrado"})
    
        }
    
       
    
        res.send('Atualizando o produto'+req.params.id)
    }

    exports.deletar = (req, res) => {
        const id= req.params.id;
    
        const indiceProduto = produtos.findIndex(
            (produto) => {
                return produto.id == id;
            }
        
        )
    
        if(indiceProduto >= 0){
            const produtoDeletado = produtos.slice(indiceProduto, 1)[0]
            return res.json(produtoDeletado);
        }
        else{
            return res.status(404).json(
                {Erro:"Produto não encontrado"})
    
        }
    
    }