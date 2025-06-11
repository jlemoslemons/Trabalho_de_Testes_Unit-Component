function runComponentTests() {
    testar("COMPONENT - Formulário deve estar presente na página", () => {
        let form = document.getElementById("receitaForm");
        if (!form) throw new Error("Formulário não encontrado");
    });

    testar("COMPONENT - Inputs devem estar presentes na página ", () => {
        let input1 = document.getElementById("nomeReceita");
        let input2 = document.getElementsByName("ingredienteNome1");
        let input3 = document.getElementsByName("ingredienteQuantidade1");
        if (!input1 || !input2 || !input3) throw new Error("Inputs não encontrados");
    });

    testar("COMPONENT - Botões devem estar presentes na página", () => {
        document.getElementById("salvarReceita").click();
        let botao1 = document.getElementById("adicionarIngrediente");
        let botao2 = document.getElementById("salvarReceita");
        let botao3 = document.getElementById("removerBotao");
        if (!botao1 || !botao2 || !botao3) throw new Error("Botões não encontrados");
    });

    testar("COMPONENT - Div conteiner deve estar presente na página", () => {
        let conteiner = document.getElementsByClassName("container");
        if (!conteiner) throw new Error("Div conteiner não encontrado");
    });

    testar("COMPONENT - Lista de receitas deve estar presente na página", () => {
        let lista = document.getElementById("listaReceitas");
        if (!lista) throw new Error("Lista de receitas não encontrada");
    });

    testar("COMPONENT - Salvar receita dispara evento de submit", () => {
        let salvarReceita = document.getElementById("salvarReceita");
        let chamado = false;

        let listener = (e) => {
            chamado = true;
            e.preventDefault();
            salvarReceita.removeEventListener("submit", listener);
        };

        salvarReceita.addEventListener("submit", listener);
        salvarReceita.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

        if (!chamado) throw new Error("Evento de submit não foi chamado");
    });
}
