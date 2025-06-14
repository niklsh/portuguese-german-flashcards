// Vocabulary Database
const vocabularyDatabase = {
    transportation: {
        name: "Transportation & Train Travel",
        icon: "🚊",
        words: [
            { pt: "trem", de: "der Zug", ipa: "[deːɐ̯ t͡suːk]" },
            { pt: "estação", de: "der Bahnhof", ipa: "[deːɐ̯ ˈbaːnhoːf]" },
            { pt: "bilhete", de: "die Fahrkarte", ipa: "[diː ˈfaːɐ̯kaʁtə]" },
            { pt: "plataforma", de: "der Bahnsteig", ipa: "[deːɐ̯ ˈbaːnʃtaɪk]" },
            { pt: "ônibus", de: "der Bus", ipa: "[deːɐ̯ bʊs]" },
            { pt: "avião", de: "das Flugzeug", ipa: "[das ˈfluːkt͡sɔɪk]" },
            { pt: "carro", de: "das Auto", ipa: "[das ˈaʊtoː]" },
            { pt: "bicicleta", de: "das Fahrrad", ipa: "[das ˈfaːɐ̯ʁaːt]" },
            { pt: "aeroporto", de: "der Flughafen", ipa: "[deːɐ̯ ˈfluːkhaːfn̩]" },
            { pt: "viagem", de: "die Reise", ipa: "[diː ˈʁaɪzə]" }
        ]
    },
    colors: {
        name: "Colors",
        icon: "🎨",
        words: [
            { pt: "vermelho", de: "rot", ipa: "[ʁoːt]" },
            { pt: "azul", de: "blau", ipa: "[blaʊ]" },
            { pt: "verde", de: "grün", ipa: "[ɡʁyːn]" },
            { pt: "amarelo", de: "gelb", ipa: "[ɡɛlp]" },
            { pt: "preto", de: "schwarz", ipa: "[ʃvaʁt͡s]" },
            { pt: "branco", de: "weiß", ipa: "[vaɪs]" },
            { pt: "laranja", de: "orange", ipa: "[oˈʁãːʒə]" },
            { pt: "rosa", de: "rosa", ipa: "[ˈʁoːza]" },
            { pt: "roxo", de: "lila", ipa: "[ˈliːla]" },
            { pt: "marrom", de: "braun", ipa: "[bʁaʊn]" }
        ]
    },
    bodyParts: {
        name: "Body Parts",
        icon: "👤",
        words: [
            { pt: "cabeça", de: "der Kopf", ipa: "[deːɐ̯ kɔpf]" },
            { pt: "olho", de: "das Auge", ipa: "[das ˈaʊɡə]" },
            { pt: "nariz", de: "die Nase", ipa: "[diː ˈnaːzə]" },
            { pt: "boca", de: "der Mund", ipa: "[deːɐ̯ mʊnt]" },
            { pt: "mão", de: "die Hand", ipa: "[diː hant]" },
            { pt: "pé", de: "der Fuß", ipa: "[deːɐ̯ fuːs]" },
            { pt: "braço", de: "der Arm", ipa: "[deːɐ̯ aʁm]" },
            { pt: "perna", de: "das Bein", ipa: "[das baɪn]" },
            { pt: "orelha", de: "das Ohr", ipa: "[das oːɐ̯]" },
            { pt: "dente", de: "der Zahn", ipa: "[deːɐ̯ t͡saːn]" }
        ]
    },
    keyPhrases: {
        name: "Key Phrases",
        icon: "💬",
        words: [
            { pt: "obrigado", de: "danke", ipa: "[ˈdaŋkə]" },
            { pt: "por favor", de: "bitte", ipa: "[ˈbɪtə]" },
            { pt: "desculpe", de: "entschuldigung", ipa: "[ɛntˈʃʊldɪɡʊŋ]" },
            { pt: "sim", de: "ja", ipa: "[jaː]" },
            { pt: "não", de: "nein", ipa: "[naɪn]" },
            { pt: "olá", de: "hallo", ipa: "[haˈloː]" },
            { pt: "tchau", de: "tschüss", ipa: "[t͡ʃyːs]" },
            { pt: "ajuda", de: "hilfe", ipa: "[ˈhɪlfə]" },
            { pt: "onde", de: "wo", ipa: "[voː]" },
            { pt: "quando", de: "wann", ipa: "[van]" }
        ]
    },
    weather: {
        name: "Weather",
        icon: "🌤️",
        words: [
            { pt: "sol", de: "die Sonne", ipa: "[diː ˈzɔnə]" },
            { pt: "chuva", de: "der Regen", ipa: "[deːɐ̯ ˈʁeːɡn̩]" },
            { pt: "neve", de: "der Schnee", ipa: "[deːɐ̯ ʃneː]" },
            { pt: "vento", de: "der Wind", ipa: "[deːɐ̯ vɪnt]" },
            { pt: "nuvem", de: "die Wolke", ipa: "[diː ˈvɔlkə]" },
            { pt: "tempestade", de: "der Sturm", ipa: "[deːɐ̯ ʃtʊʁm]" },
            { pt: "frio", de: "kalt", ipa: "[kalt]" },
            { pt: "quente", de: "heiß", ipa: "[haɪs]" },
            { pt: "úmido", de: "feucht", ipa: "[fɔɪçt]" },
            { pt: "seco", de: "trocken", ipa: "[ˈtʁɔkn̩]" }
        ]
    },
    animals: {
        name: "Animals",
        icon: "🐾",
        words: [
            { pt: "cachorro", de: "der Hund", ipa: "[deːɐ̯ hʊnt]" },
            { pt: "gato", de: "die Katze", ipa: "[diː ˈkat͡sə]" },
            { pt: "pássaro", de: "der Vogel", ipa: "[deːɐ̯ ˈfoːɡl̩]" },
            { pt: "peixe", de: "der Fisch", ipa: "[deːɐ̯ fɪʃ]" },
            { pt: "cavalo", de: "das Pferd", ipa: "[das pfeːɐ̯t]" },
            { pt: "vaca", de: "die Kuh", ipa: "[diː kuː]" },
            { pt: "porco", de: "das Schwein", ipa: "[das ʃvaɪn]" },
            { pt: "rato", de: "die Maus", ipa: "[diː maʊs]" },
            { pt: "elefante", de: "der Elefant", ipa: "[deːɐ̯ eleˈfant]" },
            { pt: "leão", de: "der Löwe", ipa: "[deːɐ̯ ˈløːvə]" }
        ]
    },
    cats: {
        name: "Cats",
        icon: "🐱",
        words: [
            { pt: "gatinho", de: "das Kätzchen", ipa: "[das ˈkɛt͡sçən]" },
            { pt: "ronronar", de: "schnurren", ipa: "[ˈʃnʊʁən]" },
            { pt: "bigode", de: "der Schnurrbart", ipa: "[deːɐ̯ ˈʃnʊʁbaʁt]" },
            { pt: "pata", de: "die Pfote", ipa: "[diː ˈpfoːtə]" },
            { pt: "cauda", de: "der Schwanz", ipa: "[deːɐ̯ ʃvant͡s]" },
            { pt: "pelo", de: "das Fell", ipa: "[das fɛl]" },
            { pt: "miar", de: "miauen", ipa: "[miˈaʊən]" },
            { pt: "arranhar", de: "kratzen", ipa: "[ˈkʁat͡sn̩]" },
            { pt: "brincar", de: "spielen", ipa: "[ˈʃpiːlən]" },
            { pt: "dormir", de: "schlafen", ipa: "[ˈʃlaːfn̩]" }
        ]
    },
    work: {
        name: "Work & Office",
        icon: "💼",
        words: [
            { pt: "trabalho", de: "die Arbeit", ipa: "[diː ˈaʁbaɪt]" },
            { pt: "escritório", de: "das Büro", ipa: "[das byˈʁoː]" },
            { pt: "computador", de: "der Computer", ipa: "[deːɐ̯ kɔmˈpjuːtɐ]" },
            { pt: "mesa", de: "der Tisch", ipa: "[deːɐ̯ tɪʃ]" },
            { pt: "cadeira", de: "der Stuhl", ipa: "[deːɐ̯ ʃtuːl]" },
            { pt: "reunião", de: "die Besprechung", ipa: "[diː bəˈʃpʁɛçʊŋ]" },
            { pt: "chefe", de: "der Chef", ipa: "[deːɐ̯ ʃɛf]" },
            { pt: "colega", de: "der Kollege", ipa: "[deːɐ̯ kɔˈleːɡə]" },
            { pt: "projeto", de: "das Projekt", ipa: "[das pʁoˈjɛkt]" },
            { pt: "telefone", de: "das Telefon", ipa: "[das teleˈfoːn]" }
        ]
    },
    greetings: {
        name: "Greetings & Introductions",
        icon: "👋",
        words: [
            { pt: "bom dia", de: "guten Morgen", ipa: "[ˈɡuːtn̩ ˈmɔʁɡn̩]" },
            { pt: "boa tarde", de: "guten Tag", ipa: "[ˈɡuːtn̩ taːk]" },
            { pt: "boa noite", de: "guten Abend", ipa: "[ˈɡuːtn̩ ˈaːbn̩t]" },
            { pt: "meu nome é", de: "ich heiße", ipa: "[ɪç ˈhaɪsə]" },
            { pt: "prazer", de: "freut mich", ipa: "[fʁɔɪt mɪç]" },
            { pt: "como vai", de: "wie geht's", ipa: "[viː ɡeːts]" },
            { pt: "bem", de: "gut", ipa: "[ɡuːt]" },
            { pt: "até logo", de: "bis später", ipa: "[bɪs ˈʃpɛːtɐ]" },
            { pt: "com licença", de: "entschuldigen Sie", ipa: "[ɛntˈʃʊldɪɡn̩ ziː]" },
            { pt: "de nada", de: "bitte schön", ipa: "[ˈbɪtə ʃøːn]" }
        ]
    },
    home: {
        name: "Home & Apartment",
        icon: "🏠",
        words: [
            { pt: "casa", de: "das Haus", ipa: "[das haʊs]" },
            { pt: "apartamento", de: "die Wohnung", ipa: "[diː ˈvoːnʊŋ]" },
            { pt: "quarto", de: "das Zimmer", ipa: "[das ˈt͡sɪmɐ]" },
            { pt: "cozinha", de: "die Küche", ipa: "[diː ˈkʏçə]" },
            { pt: "banheiro", de: "das Bad", ipa: "[das baːt]" },
            { pt: "sala", de: "das Wohnzimmer", ipa: "[das ˈvoːnt͡sɪmɐ]" },
            { pt: "cama", de: "das Bett", ipa: "[das bɛt]" },
            { pt: "janela", de: "das Fenster", ipa: "[das ˈfɛnstɐ]" },
            { pt: "porta", de: "die Tür", ipa: "[diː tyːɐ̯]" },
            { pt: "chave", de: "der Schlüssel", ipa: "[deːɐ̯ ˈʃlʏsl̩]" }
        ]
    },
    cooking: {
        name: "Cooking & Kitchen",
        icon: "👨‍🍳",
        words: [
            { pt: "cozinhar", de: "kochen", ipa: "[ˈkɔxn̩]" },
            { pt: "faca", de: "das Messer", ipa: "[das ˈmɛsɐ]" },
            { pt: "garfo", de: "die Gabel", ipa: "[diː ˈɡaːbl̩]" },
            { pt: "colher", de: "der Löffel", ipa: "[deːɐ̯ ˈlœfl̩]" },
            { pt: "prato", de: "der Teller", ipa: "[deːɐ̯ ˈtɛlɐ]" },
            { pt: "panela", de: "der Topf", ipa: "[deːɐ̯ tɔpf]" },
            { pt: "frigideira", de: "die Pfanne", ipa: "[diː ˈpfanə]" },
            { pt: "forno", de: "der Ofen", ipa: "[deːɐ̯ ˈoːfn̩]" },
            { pt: "geladeira", de: "der Kühlschrank", ipa: "[deːɐ̯ ˈkyːlʃʁaŋk]" },
            { pt: "receita", de: "das Rezept", ipa: "[das ʁeˈt͡sɛpt]" }
        ]
    },
    fruits: {
        name: "Fruits & Vegetables",
        icon: "🍎",
        words: [
            { pt: "maçã", de: "der Apfel", ipa: "[deːɐ̯ ˈapfl̩]" },
            { pt: "banana", de: "die Banane", ipa: "[diː baˈnaːnə]" },
            { pt: "laranja", de: "die Orange", ipa: "[diː oˈʁãːʒə]" },
            { pt: "tomate", de: "die Tomate", ipa: "[diː toˈmaːtə]" },
            { pt: "cenoura", de: "die Karotte", ipa: "[diː kaˈʁɔtə]" },
            { pt: "batata", de: "die Kartoffel", ipa: "[diː kaʁˈtɔfl̩]" },
            { pt: "cebola", de: "die Zwiebel", ipa: "[diː ˈt͡sviːbl̩]" },
            { pt: "alface", de: "der Salat", ipa: "[deːɐ̯ zaˈlaːt]" },
            { pt: "uva", de: "die Traube", ipa: "[diː ˈtʁaʊbə]" },
            { pt: "morango", de: "die Erdbeere", ipa: "[diː ˈeːɐ̯tbeːʁə]" }
        ]
    }
};

// Quiz State
let currentQuiz = [];
let currentCardIndex = 0;
let isFlipped = false;
let userAnswers = [];
let quizStarted = false;

// DOM Elements
const elements = {
    flipcard: document.getElementById('flipcard'),
    portugueseWord: document.getElementById('portugueseWord'),
    germanWord: document.getElementById('germanWord'),
    pronunciation: document.getElementById('pronunciation'),
    speakBtn: document.getElementById('speakBtn'),
    categoryIcon: document.getElementById('categoryIcon'),
    categoryName: document.getElementById('categoryName'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    evaluationContainer: document.getElementById('evaluationContainer'),
    wrongBtn: document.getElementById('wrongBtn'),
    rightBtn: document.getElementById('rightBtn'),
    navigation: document.getElementById('navigation'),
    startBtn: document.getElementById('startBtn'),
    nextBtn: document.getElementById('nextBtn'),
    resultsContainer: document.getElementById('resultsContainer'),
    finalScore: document.getElementById('finalScore'),
    finalPercentage: document.getElementById('finalPercentage'),
    categoryResults: document.getElementById('categoryResults'),
    restartBtn: document.getElementById('restartBtn'),
    categoriesPanel: document.getElementById('categoriesPanel'),
    categoriesGrid: document.getElementById('categoriesGrid'),
    cardContainer: document.getElementById('cardContainer')
};

// Initialize App
function initializeApp() {
    setupEventListeners();
    populateCategoriesPanel();
    showStartScreen();
}

// Event Listeners
function setupEventListeners() {
    // Card flip
    elements.flipcard.addEventListener('click', flipCard);
    
    // Speech synthesis
    elements.speakBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speakGermanWord();
    });
    
    // Evaluation buttons
    elements.wrongBtn.addEventListener('click', () => evaluateAnswer(false));
    elements.rightBtn.addEventListener('click', () => evaluateAnswer(true));
    
    // Navigation buttons
    elements.startBtn.addEventListener('click', startQuiz);
    elements.nextBtn.addEventListener('click', nextCard);
    elements.restartBtn.addEventListener('click', restartQuiz);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
}

// Keyboard Navigation
function handleKeyboard(e) {
    if (!quizStarted) return;
    
    switch(e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            if (!isFlipped) {
                flipCard();
            }
            break;
        case '1':
            if (isFlipped && elements.evaluationContainer.style.display !== 'none') {
                evaluateAnswer(false);
            }
            break;
        case '2':
            if (isFlipped && elements.evaluationContainer.style.display !== 'none') {
                evaluateAnswer(true);
            }
            break;
        case 'ArrowRight':
        case 'n':
            if (elements.nextBtn.style.display !== 'none') {
                nextCard();
            }
            break;
    }
}

// Show Start Screen
function showStartScreen() {
    elements.cardContainer.style.display = 'flex';
    elements.evaluationContainer.style.display = 'none';
    elements.navigation.style.display = 'flex';
    elements.startBtn.style.display = 'inline-block';
    elements.nextBtn.style.display = 'none';
    elements.resultsContainer.style.display = 'none';
    elements.categoriesPanel.style.display = 'block';
    
    // Show welcome card
    showWelcomeCard();
}

// Welcome Card
function showWelcomeCard() {
    elements.categoryIcon.textContent = '🧠';
    elements.categoryName.textContent = 'Ready to Start?';
    elements.portugueseWord.textContent = 'Clique para começar';
    elements.germanWord.textContent = 'Klicken Sie zum Starten';
    elements.pronunciation.textContent = '[ˈklɪkn̩ ziː t͡sʊm ˈʃtaʁtn̩]';
    elements.progressFill.style.width = '0%';
    elements.progressText.textContent = '0 / 12';
}

// Start Quiz
function startQuiz() {
    quizStarted = true;
    currentQuiz = generateQuiz();
    currentCardIndex = 0;
    userAnswers = [];
    isFlipped = false;
    
    elements.startBtn.style.display = 'none';
    elements.categoriesPanel.style.display = 'none';
    
    showCurrentCard();
}

// Generate Quiz
function generateQuiz() {
    const quiz = [];
    const categories = Object.keys(vocabularyDatabase);
    
    categories.forEach(categoryKey => {
        const category = vocabularyDatabase[categoryKey];
        const randomWord = category.words[Math.floor(Math.random() * category.words.length)];
        quiz.push({
            categoryKey,
            category: category.name,
            icon: category.icon,
            ...randomWord
        });
    });
    
    return shuffleArray(quiz);
}

// Shuffle Array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Show Current Card
function showCurrentCard() {
    if (currentCardIndex >= currentQuiz.length) {
        showResults();
        return;
    }
    
    const currentCard = currentQuiz[currentCardIndex];
    
    // Reset card state
    elements.flipcard.classList.remove('flipped');
    isFlipped = false;
    elements.evaluationContainer.style.display = 'none';
    elements.nextBtn.style.display = 'none';
    
    // Update content
    elements.categoryIcon.textContent = currentCard.icon;
    elements.categoryName.textContent = currentCard.category;
    elements.portugueseWord.textContent = currentCard.pt;
    elements.germanWord.textContent = currentCard.de;
    elements.pronunciation.textContent = currentCard.ipa;
    
    // Update progress
    const progress = ((currentCardIndex) / currentQuiz.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `${currentCardIndex} / ${currentQuiz.length}`;
    
    // Add entrance animation
    elements.flipcard.style.animation = 'fadeIn 0.5s ease';
    setTimeout(() => {
        elements.flipcard.style.animation = '';
    }, 500);
}

// Flip Card
function flipCard() {
    if (isFlipped) return;
    
    elements.flipcard.classList.add('flipped');
    isFlipped = true;
    
    // Show evaluation buttons after flip animation
    setTimeout(() => {
        elements.evaluationContainer.style.display = 'block';
        speakGermanWord();
    }, 400);
}

// Speak German Word
function speakGermanWord() {
    if ('speechSynthesis' in window) {
        const currentCard = currentQuiz[currentCardIndex];
        const utterance = new SpeechSynthesisUtterance(currentCard.de);
        
        // Try to use German voice
        const voices = speechSynthesis.getVoices();
        const germanVoice = voices.find(voice => 
            voice.lang.startsWith('de') || 
            voice.name.toLowerCase().includes('german')
        );
        
        if (germanVoice) {
            utterance.voice = germanVoice;
        }
        
        utterance.lang = 'de-DE';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        speechSynthesis.speak(utterance);
    }
}

// Evaluate Answer
function evaluateAnswer(isCorrect) {
    const currentCard = currentQuiz[currentCardIndex];
    
    userAnswers.push({
        ...currentCard,
        userAnswer: isCorrect,
        cardIndex: currentCardIndex
    });
    
    elements.evaluationContainer.style.display = 'none';
    elements.nextBtn.style.display = 'inline-block';
    
    // Add visual feedback
    const feedbackClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';
    elements.flipcard.classList.add(feedbackClass);
    
    setTimeout(() => {
        elements.flipcard.classList.remove(feedbackClass);
    }, 1000);
}

// Next Card
function nextCard() {
    currentCardIndex++;
    showCurrentCard();
}

// Show Results
function showResults() {
    quizStarted = false;
    elements.cardContainer.style.display = 'none';
    elements.evaluationContainer.style.display = 'none';
    elements.navigation.style.display = 'none';
    elements.resultsContainer.style.display = 'block';
    
    // Calculate scores
    const correctAnswers = userAnswers.filter(answer => answer.userAnswer).length;
    const totalQuestions = userAnswers.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    elements.finalScore.textContent = `${correctAnswers}/${totalQuestions}`;
    elements.finalPercentage.textContent = `${percentage}%`;
    
    // Show category results
    showCategoryResults();
    
    // Update progress to 100%
    elements.progressFill.style.width = '100%';
    elements.progressText.textContent = `${totalQuestions} / ${totalQuestions}`;
}

// Show Category Results
function showCategoryResults() {
    elements.categoryResults.innerHTML = '';
    
    userAnswers.forEach(answer => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'category-result';
        
        const statusClass = answer.userAnswer ? 'correct' : 'incorrect';
        const statusIcon = answer.userAnswer ? '✅' : '❌';
        
        resultDiv.innerHTML = `
            <h4>${answer.icon} ${answer.category}</h4>
            <div class="result-status ${statusClass}">
                ${statusIcon} ${answer.pt} → ${answer.de}
            </div>
        `;
        
        elements.categoryResults.appendChild(resultDiv);
    });
}

// Restart Quiz
function restartQuiz() {
    currentCardIndex = 0;
    userAnswers = [];
    isFlipped = false;
    quizStarted = false;
    
    showStartScreen();
}

// Populate Categories Panel
function populateCategoriesPanel() {
    elements.categoriesGrid.innerHTML = '';
    
    Object.entries(vocabularyDatabase).forEach(([key, category]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-item';
        
        categoryDiv.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <span class="category-name">${category.name}</span>
        `;
        
        elements.categoriesGrid.appendChild(categoryDiv);
    });
}

// Add CSS for feedback animations
const style = document.createElement('style');
style.textContent = `
    .correct-feedback {
        animation: correctPulse 1s ease;
    }
    
    .incorrect-feedback {
        animation: incorrectShake 0.5s ease;
    }
    
    @keyframes correctPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(81, 207, 102, 0.6); }
        100% { transform: scale(1); }
    }
    
    @keyframes incorrectShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    .flipcard-front .card-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
        transform: translateX(-100%);
        transition: transform 0.6s;
    }
    
    .flipcard:hover .flipcard-front .card-content::before {
        transform: translateX(100%);
    }
`;
document.head.appendChild(style);

// Wait for voices to load
if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = function() {
        // Voices are now loaded
    };
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);