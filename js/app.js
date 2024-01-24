let totalGeral; // declarando a variavél global
limpar();

// VAmos iniciar pelos botões que contêm funções;

function adicionar() {
    // Vamos capturar os valores que estão no formulário que são nome do produto, valor e quantidade;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario=produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    // Calcular o preço do produto, o sub-total de cada produto;
    let preco = valorUnitario*quantidade;
    
    // Adicionar o produto escolhido no carrinho com o valor do subtotal
    let listaDeProdutos = document.getElementById('lista-produtos');
    listaDeProdutos.innerHTML += `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>
    `;

    // Atualizar o valor total da compra;
    totalGeral+= preco; 
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent= `R$ ${totalGeral}`;
    document.getElementById('quantidade').value=0; // zerando a quantidade na tela
}

function limpar(){
    totalGeral = 0; // setando a var
    document.getElementById('lista-produtos').innerHTML=''; // limpando o campo carrinho na tela
    document.getElementById('valor-total').textContent='R$ 0'; // Zerando o valor total geral na tela
}