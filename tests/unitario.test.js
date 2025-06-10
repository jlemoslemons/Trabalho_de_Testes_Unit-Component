function runUnitTests() {
    testar("teste", () => {
        if() throw new Error("");
    });
}