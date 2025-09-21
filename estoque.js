let estoque = [];

function criarProduto(id, nome, quantidade, preco) {
    const produto = {
        id: id,
        nome: nome,
        quantidade: quantidade,
        preco: preco
    };

    estoque.push(produto);
    console.log(`Produto ${nome} adicionado com sucesso!`);
}

function lerProduto(id = null) {
    if (id) {
        const produto = estoque.find(p => p.id === id);
        if (produto) {
            console.log(produto);
        } else {
            console.log('Produto não encontrado!');
        }
    } else {
        console.log(estoque);
    }
}


function atualizarProduto(id, novoNome = null, novaQuantidade = null, novoPreco = null) {
    const produto = estoque.find(p => p.id === id);

    if (produto) {
        if (novoNome) produto.nome = novoNome;
        if (novaQuantidade) produto.quantidade = novaQuantidade;
        if (novoPreco) produto.preco = novoPreco;

        console.log(`Produto ${id} atualizado com sucesso!`);
    } else {
        console.log('Produto não encontrado!');
    }
}


function deletarProduto(id) {
    const index = estoque.findIndex(p => p.id === id);

    if (index !== -1) {
        estoque.splice(index, 1);
        console.log(`Produto ${id} removido com sucesso!`);
    } else {
        console.log('Produto não encontrado!');
    }
}



// Criando produtos
criarProduto(1, 'Dipirona', 50, 10.00);
criarProduto(2, 'Amoxicilina', 30, 15.50);
criarProduto(3, 'Paracetamol', 100, 5.00);

// Lendo o estoque
lerProduto(); // Exibe todos os produtos

// Atualizando um produto
atualizarProduto(2, null, 40, 14.00); // Atualiza a quantidade e o preço de 'Amoxicilina'

// Lendo um produto específico
lerProduto(2); // Exibe o produto com ID 2

// Deletando um produto
deletarProduto(1); // Remove o produto com ID 1

// Lendo o estoque após a exclusão
lerProduto(); // Exibe o estoque atualizado
