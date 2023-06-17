const jurosSimplesButton = document.getElementById("juros-simples-btn");
const jurosCompostosButton = document.getElementById("juros-compostos-btn");
const valorFuturoButton = document.getElementById("valor-futuro-btn");
const valorPresenteButton = document.getElementById("valor-presente-btn");
const calculator = document.querySelector(".calculator");

jurosSimplesButton.addEventListener("click", () => {
  calculator.innerHTML = `
    <h2>Juros Simples</h2>
    <label for="capital">Capital:</label>
    <input type="number" id="capital" />
    <label for="taxa">Taxa de Juros:</label>
    <input type="number" id="taxa" />
    <label for="tempo">Tempo:</label>
    <input type="number" id="tempo" />
    <button onclick="calcularJurosSimples()">Calcular</button>
  `;
  calculator.style.display = "block";
});

jurosCompostosButton.addEventListener("click", () => {
  calculator.innerHTML = `
    <h2>Juros Compostos</h2>
    <label for="capital">Capital:</label>
    <input type="number" id="capital" />
    <label for="taxa">Taxa de Juros:</label>
    <input type="number" id="taxa" />
    <label for="tempo">Tempo:</label>
    <input type="number" id="tempo" />
    <button onclick="calcularJurosCompostos()">Calcular</button>
  `;
  calculator.style.display = "block";
});

valorFuturoButton.addEventListener("click", () => {
  calculator.innerHTML = `
    <h2>Valor Futuro</h2>
    <label for="capital">Capital:</label>
    <input type="number" id="capital" />
    <label for="taxa">Taxa de Juros:</label>
    <input type="number" id="taxa" />
    <label for="tempo">Tempo:</label>
    <input type="number" id="tempo" />
    <button onclick="calcularValorFuturo()">Calcular</button>
  `;
  calculator.style.display = "block";
});

valorPresenteButton.addEventListener("click", () => {
  calculator.innerHTML = `
    <h2>Valor Presente</h2>
    <label for="valor-futuro">Valor Futuro:</label>
    <input type="number" id="valor-futuro" />
    <label for="taxa">Taxa de Juros:</label>
    <input type="number" id="taxa" />
    <label for="tempo">Tempo:</label>
    <input type="number" id="tempo" />
    <button onclick="calcularValorPresente()">Calcular</button>
  `;
  calculator.style.display = "block";
});

function calcularJurosSimples() {
  const capital = document.getElementById("capital").value;
  const taxa = document.getElementById("taxa").value;
  const tempo = document.getElementById("tempo").value;

  const juros = (capital * taxa * tempo) / 100;
  const valorFuturo = parseFloat(capital) + parseFloat(juros);

  alert(`Valor Futuro: ${valorFuturo}`);
}

function calcularJurosCompostos() {
  const capital = document.getElementById("capital").value;
  const taxa = document.getElementById("taxa").value;
  const tempo = document.getElementById("tempo").value;

  const juros = capital * (Math.pow(1 + taxa / 100, tempo) - 1);
  const valorFuturo = parseFloat(capital) + parseFloat(juros);

  alert(`Valor Futuro: ${valorFuturo}`);
}

function calcularValorFuturo() {
  const capital = document.getElementById("capital").value;
  const taxa = document.getElementById("taxa").value;
  const tempo = document.getElementById("tempo").value;

  const valorFuturo = capital * (Math.pow(1 + taxa / 100, tempo));

  alert(`Valor Futuro: ${valorFuturo}`);
}

function calcularValorPresente() {
  const valorFuturo = document.getElementById("valor-futuro").value;
  const taxa = document.getElementById("taxa").value;
  const tempo = document.getElementById("tempo").value;

  const valorPresente = valorFuturo / (Math.pow(1 + taxa / 100, tempo));

  alert(`Valor Presente: ${valorPresente}`);
}
