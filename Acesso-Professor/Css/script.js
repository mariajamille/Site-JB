// INICIO JAVASCRIPT, ANIMAÇÃO DOS BUTÕES (TESTE DE CONSOLE.LOG):

function animateButtonClick(buttonNumber) {
    // Adicione a lógica da sua animação aqui
    console.log("Botão " + buttonNumber + " clicado!");
}

// CONFIGURAÇÃO DA DATA:
function showDate() {
    const dateContainer = document.querySelector('.date-text');
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleDateString('pt-BR', { month: 'long' });
    dateContainer.innerHTML = `<div>${day}</div><div>${month}</div>`;
}

showDate();

