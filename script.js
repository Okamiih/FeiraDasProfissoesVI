const scenarios = [
    {
        text: "Qual a principal função do sistema respiratório?",
        options: [
            "Produzir hormônios.",
            "Permitir a troca de gases.",
            "Transportar nutrientes.",
            "Excreção."
        ],
        correct: 1
    },
    {
        text: "Qual a menor partícula de um elemento que mantém suas propriedades químicas?",
        options: [
            "Molécula",
            "Átomo",
            "Próton",
            "Nêutron"
        ],
        correct: 1
    },
    {
        text: "Segundo a teoria da evolução de Darwin, a principal força motriz da evolução é:",
        options: [
            "A lei do mais forte.",
            "A vontade de Deus.",
            "A seleção natural.",
            "A mutação genética."
        ],
        correct: 2
    },
    {
        text: "De quem é a famosa frase 'Penso, logo existo'?",
        options: [
            "Platão",
            "Galileu Galilei",
            "Descartes",
            "Sócrates"
        ],
        correct: 2
    },
    {
        text: "A Revolução Industrial teve como um de seus principais impactos:",
        options: [
            "Aumento da produção artesanal.",
            "Diminuição da urbanização.",
            "Crescimento da industrialização.",
            "Fortalecimento do trabalho rural."
        ],
        correct: 2
    },
    {
        text: "Quantas casas decimais tem o número pi?",
        options: [
            "Duas",
            " Centenas",
            "Infinitas",
            "Vinte"
        ],
        correct: 2
    },
    {
            text: "Quem foi o primeiro presidente do Brasil eleito por voto direto após a redemocratização?",
            options: [
                "Getúlio Vargas",
                "Tancredo Neves",
                "Fernando Collor de Mello",
                "Fernando Henrique Cardoso"
            ],
            correct: 1
        },
    {
        text: "A teoria da relatividade de Einstein revolucionou a física ao propor que:",
        options: [
            "O tempo é absoluto para todos os observadores.",
            "A velocidade da luz é constante em qualquer referencial.",
            "A massa de um objeto não varia com sua velocidade.",
            "A gravidade é uma força instantânea."
        ],
        correct: 1
    },
    {
        text: "A globalização intensificou as desigualdades sociais, principalmente devido:",
        options: [
            "À maior distribuição de renda.",
            "À diminuição das diferenças culturais.",
            "À concentração de riqueza em poucos países.",
            "Ao aumento da cooperação internacional."
        ],
        correct: 2
    },
    {
        text: "O princípio da incerteza de Heisenberg estabelece que:",
        options: [
            "É impossível medir simultaneamente e com precisão a posição e a velocidade de uma partícula.",
            "O comportamento das partículas subatômicas é completamente determinístico.",
            "A energia de um fóton é diretamente proporcional à sua frequência.",
            "A massa de um objeto aumenta à medida que ele se aproxima da velocidade da luz."
        ],
        correct: 0
    }
];

let currentScenario = 0;
let correctCount = 0;
let incorrectCount = 0;

const scenarioText = document.getElementById("scenario-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultText = document.getElementById("result");
const correctCountDisplay = document.getElementById("correct-count");
const incorrectCountDisplay = document.getElementById("incorrect-count");

function loadScenario() {
    const scenario = scenarios[currentScenario];
    scenarioText.textContent = scenario.text;
    optionsContainer.innerHTML = "";

    scenario.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = option;
        div.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(div);
    });

    nextButton.classList.add("hidden");
    resultText.classList.add("hidden");
}

function checkAnswer(selectedIndex) {
    const scenario = scenarios[currentScenario];
    if (selectedIndex === scenario.correct) {
        correctCount++;
        resultText.textContent = "Correto! Você identificou o erro.";
    } else {
        incorrectCount++;
        resultText.textContent = "Incorreto! Tente novamente.";
    }

    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;

    nextButton.classList.remove("hidden");
    resultText.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        loadScenario();
    } else {
        // Mensagem final com base no desempenho
        scenarioText.textContent = "Você completou o jogo!";
        optionsContainer.innerHTML = "";

        if (correctCount > 7) {
            resultText.textContent = "Parabéns! Você acertou mais de 7. Pegue sua recompensa!";
        } else {
            resultText.textContent = "Parabéns! Você concluiu o jogo. Pegue sua recompensa!";
        }

        nextButton.classList.add("hidden");
        resultText.classList.remove("hidden");
    }
});

// Load the first scenario on page load
loadScenario();
// ... (resto do seu código)

function checkAnswer(selectedIndex) {
    const scenario = scenarios[currentScenario];
    if (selectedIndex === scenario.correct) {
        correctCount++;
        resultText.textContent = "Correto!";
    } else {
        incorrectCount++;
        resultText.textContent = "Incorreto!";
    }

    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;

    // Adicionar um efeito visual para indicar que a resposta foi registrada
    const selectedOption = optionsContainer.querySelectorAll('.option')[selectedIndex];
    selectedOption.classList.add('selected');

    // Remover o efeito visual e carregar a próxima pergunta após um tempo
    setTimeout(() => {
        selectedOption.classList.remove('selected');
        nextButton.classList.add("hidden");
        resultText.classList.add("hidden");
        currentScenario++;
        if (currentScenario < scenarios.length) {
            loadScenario();
        } else {
            // Mensagem final com base no desempenho
            // ...
        }
    }, 100);
}
function showResults() {
    scenarioText.textContent = "";
    optionsContainer.innerHTML = "";

    const percentage = (correctCount / scenarios.length) * 100;
    let message;

    if (percentage === 100) {
        message = "Parabéns! Você acertou todas as perguntas!";
    } else if (percentage >= 80) {
        message = "Excelente! Você acertou mais de 80% das perguntas.";
    } else if (percentage >= 60) {
        message = "Bom trabalho! Você acertou mais da metade das perguntas.";
    } else {
        message = "Que tal tentar novamente? Você pode melhorar!";
    }

    resultText.textContent = message;
    resultText.classList.add('final-message');
}