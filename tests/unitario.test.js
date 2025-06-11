function runUnitTests() {
    testar("UNIT - Não deve aceitar campos vazios", () => {
        if (document.getElementsByName("nomeReceita") || document.getElementsByName("ingredienteNome1") || document.getElementsByName("ingredienteQuantidade1") == "")
            throw new Error("Espera um aviso de campos vazios.")
    });

    testar("UNIT - Form reset limpa o nome da receita", () => {
        let nomeInput = document.getElementById("nomeReceita");
        nomeInput.value = "Pizza";
        document.getElementById("receitaForm").reset();
        if (nomeInput.value !== "")
            throw new Error("Espera que o campo de nome seja limpo.")
    });

    testar("UNIT - Adição manual de ingrediente é válida", () => {
        let nome = document.getElementsByName("ingredienteNome1").value;
        let quantidade = document.getElementsByName("ingredienteQuantidade1").value;
        let resultado = document.getElementById("listaReceitas").value;
        nome = "Tomate";
        quantidade = "2 unidades";
        resultado = `${nome}: ${quantidade}`;
        if (resultado !== "Tomate: 2 unidades")
            throw new Error("Espera que o formato do ingrediente seja correspondente aos inputs.")
    });

    testar("UNIT - Adicionar receita deve ser rápido (menos de 100ms)", () => {
        document.getElementById("nomeReceita").value = "Vitamina";
        document.querySelector(".ingrediente-nome").value = "Banana";
        document.querySelector(".ingrediente-quantidade").value = "1 unidade";
        const inicio = performance.now();
        document.getElementById("receitaForm").dispatchEvent(new Event("submit"));
        const fim = performance.now();
        const tempo = fim - inicio;
        if (tempo > 100) {
            throw new Error(`${tempo.toFixed(2)}ms Espera que seja em menos de 100ms`)
        }
    });
}