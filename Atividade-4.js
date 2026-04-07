// preços
const precoGasolina = 6.69;
const precoEtanol = 5.85;
const precoDiesel = 6.10;

// formatar moeda
const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

const atualizarValor = () => {
    const tipo = document.getElementById("combustivel")?.value;

    if (!tipo) return null;

    switch (tipo) {
        case "gasolina": return precoGasolina;
        case "etanol": return precoEtanol;
        case "diesel": return precoDiesel;
        default: return null;
    }
};

// calcular
const calcularAbastecimento = () => {
    const litrosInput = document.getElementById("litros");
    const resultado = document.getElementById("resultado");

    if (!litrosInput || !resultado) return;

    const valorDigitado = litrosInput.value.trim();
    const litros = parseFloat(valorDigitado);
    const preco = atualizarValor();

    if (valorDigitado === "") {
        alert("O campo de litros está vazio!");
        litrosInput.focus();
        return;
    }

    if (Number.isNaN(litros)) {
        alert("Digite apenas números válidos!");
        litrosInput.value = "";
        litrosInput.focus();
        return;
    }

    if (litros <= 0) {
        alert("O valor deve ser maior que zero!");
        litrosInput.value = "";
        litrosInput.focus();
        return;
    }

    // combustível
    if (!preco) {
        alert("Selecione um tipo de combustível!");
        return;
    }

    const total = litros * preco;
    resultado.innerText = `Total: ${formatarMoeda(total)}`;
};

document.getElementById("litros")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        calcularAbastecimento();
    }
});
