const form = document.getElementById('receitaForm');
const listaReceitas = document.getElementById('listaReceitas');
const ingredientesContainer = document.getElementById('ingredientesContainer');
const adicionarIngredienteButton = document.getElementById('adicionarIngrediente');
let ingredienteCount = 1;
adicionarIngredienteButton.addEventListener('click', () => {
    ingredienteCount++;
    const novoIngrediente = document.createElement('div');
    novoIngrediente.classList.add('ingrediente-item');
    novoIngrediente.innerHTML = `
                <label for="ingrediente${ingredienteCount}">Ingrediente ${ingredienteCount}:</label>
                <input type="text" class="ingrediente-nome" name="ingredienteNome${ingredienteCount}" placeholder="Nome do ingrediente">
                <input type="text" class="ingrediente-quantidade" name="ingredienteQuantidade${ingredienteCount}" placeholder="Quantidade/Medida">
            `;
    ingredientesContainer.appendChild(novoIngrediente);
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomeReceita = document.getElementById('nomeReceita').value;
    const ingredientes = [];
    // Coleta os ingredientes e quantidades dos campos
    const ingredienteNomes = document.querySelectorAll('.ingrediente-nome');
    const ingredienteQuantidades = document.querySelectorAll('.ingrediente-quantidade');
    for (let i = 0; i < ingredienteNomes.length; i++) {
        const nome = ingredienteNomes[i].value.trim();
        const quantidade = ingredienteQuantidades[i].value.trim();
        if (nome && quantidade) {
            ingredientes.push(`${nome}: ${quantidade}`);
        }
    }
    // Cria o elemento da receita
    const receitaItem = document.createElement('li');
    receitaItem.textContent = nomeReceita;
    // Cria a lista de ingredientes
    const ingredientesLista = document.createElement('ul');
    ingredientesLista.classList.add('ingredientes-lista');
    // Adiciona cada ingrediente à lista
    ingredientes.forEach(ingrediente => {
        const ingredienteItem = document.createElement('li');
        ingredienteItem.textContent = ingrediente;
        ingredientesLista.appendChild(ingredienteItem);
    });
    // Criação dos botões de ação
    const acoesDiv = document.createElement('div');
    acoesDiv.classList.add('receita-acoes');
    const removerButton = document.createElement('button');
    removerButton.textContent = 'Remover';
    removerButton.addEventListener('click', () => {
        listaReceitas.removeChild(receitaItem);
    });

    acoesDiv.appendChild(removerButton);
    // Adiciona a lista de ingredientes ao item da receita
    receitaItem.appendChild(ingredientesLista);
    receitaItem.appendChild(acoesDiv); // Adiciona os botões à receita
    listaReceitas.appendChild(receitaItem);
    form.reset();
    // Limpa os campos de ingredientes, mantendo o primeiro
    ingredientesContainer.innerHTML = `
                <label for="ingrediente1">Ingrediente 1:</label>
                <div class="ingrediente-item">
                    <input type="text" class="ingrediente-nome" name="ingredienteNome1" placeholder="Nome do ingrediente">
                    <input type="text" class="ingrediente-quantidade" name="ingredienteQuantidade1" placeholder="Quantidade/Medida">
                </div>
            `;
    ingredienteCount = 1;
});
