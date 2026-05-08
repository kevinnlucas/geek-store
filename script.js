async function carregarProdutos() {
    try {
        // Simula a requisição ao seu "backend" (arquivo JSON)
        const resposta = await fetch('produtos.json');
        const produtos = await resposta.json();
        
        const lista = document.getElementById('produtos-lista');
        
        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="categoria">${produto.categoria}</span>
                <span class="badge-seguro">● Seguro</span>
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                <button style="width: 100%; background: #238636; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">
                    Ver Detalhes
                </button>
            `;
            lista.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro ao carregar a API fictícia:", erro);
        document.getElementById('produtos-lista').innerHTML = "<p>Erro ao conectar com o banco de dados JSON.</p>";
    }
}

carregarProdutos();