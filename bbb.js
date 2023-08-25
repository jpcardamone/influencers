const data = [
    { codigo: "001", nome: "Produto A", vendas: 10 },
    { codigo: "002", nome: "Produto B", vendas: 20 },
    // Adicione os dados restantes da sua planilha
];

const codigoInput = document.getElementById("codigoInput");
const buscarButton = document.getElementById("buscarButton");
const resultadoDiv = document.getElementById("resultado");

buscarButton.addEventListener("click", () => {
    const codigo = codigoInput.value;
    const produto = data.find(item => item.codigo === codigo);

    if (produto) {
        resultadoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Vendas:</strong> ${produto.vendas}</p>
        `;
    } else {
        resultadoDiv.innerHTML = "<p>Produto não encontrado.</p>";
    }
});