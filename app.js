const aiButton = document.getElementById("ai-button");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "pt-BR";

let aiActive = false;

recognition.addEventListener("result", (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  let success = false;
  switch (command) {
    case "juros simples":
      jurosSimplesButton.click();
      success = true;
      break;
    case "juros compostos":
      jurosCompostosButton.click();
      success = true;
      break;
    case "valor futuro":
      valorFuturoButton.click();
      success = true;
      break;
    case "valor presente":
      valorPresenteButton.click();
      success = true;
      break;
  }
  if (success) {
    setStatusMessage("Comando executado com sucesso", true);
  } else {
    setStatusMessage("Comando não reconhecido", false);
  }
});

aiButton.addEventListener("click", () => {
  aiActive = !aiActive;
  if (aiActive) {
    aiButton.textContent = "A.I Ativada";
    setStatusMessage("Aguardando comando de voz", true);
    recognition.start();
  } else {
    aiButton.textContent = "A.I Desativada";
    setStatusMessage("", true);
    recognition.stop();
  }
});

const statusMessage = document.getElementById("status-message");
const spokenCommand = document.getElementById("spoken-command");

function setStatusMessage(status, success) {
  statusMessage.textContent = status;
  spokenCommand.textContent = "";
  statusMessage.style.color = success ? "green" : "red";
}
