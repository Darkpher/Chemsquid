// ChemSquid Game Logic
class ChemSquidGame {
    constructor() {
        this.currentRound = 1;
        this.score = 0;
        this.playerName = '';
        this.soundEnabled = true;
        this.gameState = 'splash'; // splash, playing, eliminated, victory
        this.timer = null;
        this.timeLeft = 0;
        this.currentQuestion = null;
        this.usedQuestions = new Set();
        this.roundQuestions = [];
        
        this.initializeElements();
        this.bindEvents();
        this.loadHighScores();
    }

    initializeElements() {
        // Screen elements
        this.splashScreen = document.getElementById('splash-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.eliminationScreen = document.getElementById('elimination-screen');
        this.victoryScreen = document.getElementById('victory-screen');
        
        // Game elements
        this.playerNameInput = document.getElementById('player-name');
        this.playerDisplay = document.getElementById('player-display');
        this.scoreDisplay = document.getElementById('score');
        this.roundDisplay = document.getElementById('round-display');
        this.questionText = document.getElementById('question-text');
        this.answerButtons = document.getElementById('answer-buttons');
        this.timerContainer = document.getElementById('timer-container');
        this.timerBar = document.getElementById('timer-bar');
        this.timerText = document.getElementById('timer-text');
        
        // Round-specific UI
        this.containerUI = document.getElementById('container-ui');
        this.bridgeUI = document.getElementById('bridge-ui');
        this.roundSpecificUI = document.getElementById('round-specific-ui');
        
        // Audio elements
        this.backgroundMusic = document.getElementById('background-music');
        this.correctSound = document.getElementById('correct-sound');
        this.wrongSound = document.getElementById('wrong-sound');
        this.eliminatedSound = document.getElementById('eliminated-sound');
        this.timerTick = document.getElementById('timer-tick');
        
        // Buttons
        this.startGameBtn = document.getElementById('start-game-btn');
        this.soundToggle = document.getElementById('sound-toggle');
        this.restartBtn = document.getElementById('restart-btn');
        this.playAgainBtn = document.getElementById('play-again-btn');
        this.fullscreenBtn = document.getElementById('fullscreen-btn');
        this.pauseBtn = document.getElementById('pause-btn');
    }

    bindEvents() {
        // Splash screen events
        this.startGameBtn.addEventListener('click', () => this.startGame());
        this.soundToggle.addEventListener('click', () => this.toggleSound());
        
        // Game events
        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.playAgainBtn.addEventListener('click', () => this.restartGame());
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        this.pauseBtn.addEventListener('click', () => this.pauseGame());
        
        // Keyboard events
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Enter key on player name input
        this.playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.startGame();
            }
        });
    }

    startGame() {
        this.playerName = this.playerNameInput.value.trim() || '001';
        this.playerDisplay.textContent = `Player ${this.playerName}`;
        this.score = 0;
        this.currentRound = 1;
        this.usedQuestions.clear();
        this.gameState = 'playing';
        
        this.showScreen('game');
        this.updateScore();
        this.startRound();
        
        if (this.soundEnabled) {
            this.playBackgroundMusic();
        }
    }

    startRound() {
        this.roundDisplay.textContent = `Round ${this.currentRound}`;
        this.roundQuestions = this.getRoundQuestions();
        
        // Initialize round-specific properties
        if (this.currentRound === 2) {
            this.availableSymbols = ['star', 'triangle', 'circle', 'umbrella'];
            this.questionsAnswered = 0;
        }
        
        // Show round-specific UI
        this.showRoundUI();
        
        // Only start first question for non-honeycomb rounds
        if (this.currentRound !== 2) {
            this.nextQuestion();
        }
    }

    showRoundUI() {
        // Hide all round-specific UI
        this.containerUI.classList.add('hidden');
        this.bridgeUI.classList.add('hidden');
        
        // Reset question display
        document.getElementById('honeycomb-question')?.classList.add('hidden');
        
        // Show appropriate UI for current round
        switch (this.currentRound) {
            case 2:
                this.containerUI.classList.remove('hidden');
                document.getElementById('honeycomb-symbols')?.classList.remove('hidden');
                this.setupContainerGame();
                break;
            case 3:
                this.bridgeUI.classList.remove('hidden');
                this.setupBridgeGame();
                break;
        }
    }

    setupContainerGame() {
        // Show the honeycomb UI but hide questions
        this.containerUI.classList.remove('hidden');
        document.getElementById('honeycomb-question').classList.add('hidden');
        
        // Show honeycomb grid
        const honeycombGrid = document.querySelector('.honeycomb-grid');
        honeycombGrid.classList.remove('hidden');
        
        // Setup honeycomb symbols
        const symbols = document.querySelectorAll('.honeycomb-symbol');
        symbols.forEach(symbol => {
            symbol.classList.remove('disabled');
            symbol.onclick = () => this.handleHoneycombSymbolClick(symbol.dataset.symbol);
        });
        
        // Reset lastClickedSymbol
        this.lastClickedSymbol = null;
    }
    
    handleHoneycombSymbolClick(symbol) {
        if (!symbol) return;
        
        // Hide all honeycomb symbols and show question
        const honeycombGrid = document.querySelector('.honeycomb-grid');
        honeycombGrid.classList.add('hidden');
        
        // Show the question container
        const honeycombQuestion = document.getElementById('honeycomb-question');
        honeycombQuestion.classList.remove('hidden');
        
        // Get the next question and display it
        this.currentQuestion = this.roundQuestions.shift();
        this.displayHoneycombQuestion(symbol);
        
        // Store the clicked symbol to disable it after answering
        this.lastClickedSymbol = symbol;
    }
    
    displayHoneycombQuestion(symbol) {
        const selectedSymbolDisplay = document.getElementById('selected-symbol-display');
        const honeycombQuestionText = document.getElementById('honeycomb-question-text');
        const symbolIcons = { 'star': '⭐', 'triangle': '▲', 'circle': '●', 'umbrella': '☂' };
        
        // Display symbol and question
        selectedSymbolDisplay.textContent = `${symbolIcons[symbol]} ${symbol.charAt(0).toUpperCase() + symbol.slice(1)}`;
        honeycombQuestionText.textContent = this.currentQuestion.question;
        
        // Set up answer buttons
        const answerContainer = document.querySelector('.honeycomb-answer-options');
        answerContainer.innerHTML = '';
        
        this.currentQuestion.options.forEach((option, idx) => {
            const button = document.createElement('button');
            button.className = 'honeycomb-answer-btn';
            button.textContent = `${String.fromCharCode(65 + idx)}. ${option}`;
            button.onclick = () => this.handleHoneycombAnswer(idx);
            answerContainer.appendChild(button);
        });
    }

    setupBridgeGame() {
        const panels = document.querySelectorAll('.glass-panel');
        panels.forEach(panel => {
            panel.classList.remove('correct', 'wrong');
            panel.addEventListener('click', (e) => this.handleBridgeChoice(e));
        });
    }

    handleContainerClick(event) {
        const container = event.target;
        if (container.classList.contains('opened')) return;
        
        container.classList.add('opened');
        this.nextQuestion();
    }

    handleBridgeChoice(event) {
        const panel = event.target;
        const choice = panel.dataset.choice;
        
        // Get current question and check if choice is correct
        if (this.currentQuestion) {
            const isCorrect = choice === this.currentQuestion.options[this.currentQuestion.correct];
            
            if (isCorrect) {
                panel.classList.add('correct');
                this.handleCorrectAnswer();
            } else {
                panel.classList.add('wrong');
                this.handleWrongAnswer();
            }
        }
    }

    getRoundQuestions() {
        const roundKey = `round${this.currentRound}`;
        const allQuestions = QUESTIONS[roundKey];
        const config = ROUND_CONFIG[roundKey];
        
        // Filter out used questions
        const availableQuestions = allQuestions.filter(q => !this.usedQuestions.has(q.question));
        
        // If we don't have enough questions, reset used questions
        if (availableQuestions.length < config.questionsPerRound) {
            this.usedQuestions.clear();
            return this.shuffleArray(allQuestions).slice(0, config.questionsPerRound);
        }
        
        return this.shuffleArray(availableQuestions).slice(0, config.questionsPerRound);
    }

    nextQuestion() {
        if (this.roundQuestions.length === 0) {
            this.completeRound();
            return;
        }
        
        this.currentQuestion = this.roundQuestions.shift();
        this.usedQuestions.add(this.currentQuestion.question);
        
        this.displayQuestion();
        this.startTimer();
    }

    displayQuestion() {
        this.questionText.textContent = this.currentQuestion.question;
        
        // Clear previous answer buttons
        this.answerButtons.innerHTML = '';
        
        // Create answer buttons
        this.currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = option;
            button.dataset.answer = index;
            
            button.addEventListener('click', (e) => this.handleAnswer(e));
            this.answerButtons.appendChild(button);
        });
        
        // Show timer for rounds that need it
        if (this.currentRound === 1 || this.currentRound === 4) {
            this.timerContainer.classList.remove('hidden');
        } else {
            this.timerContainer.classList.add('hidden');
        }
    }

    startTimer() {
        const config = ROUND_CONFIG[`round${this.currentRound}`];
        this.timeLeft = config.timeLimit;
        
        // Clear existing timer
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Update timer display
        this.updateTimerDisplay();
        
        // Start countdown
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.soundEnabled && this.timeLeft <= 3) {
                this.playTimerTick();
            }
            
            if (this.timeLeft <= 0) {
                this.handleTimeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        this.timerText.textContent = this.timeLeft;
        
        // Update timer bar
        const config = ROUND_CONFIG[`round${this.currentRound}`];
        const percentage = (this.timeLeft / config.timeLimit) * 100;
        this.timerBar.style.width = `${percentage}%`;
        
        // Change color based on time left
        if (this.timeLeft <= 3) {
            this.timerBar.style.background = '#DC143C';
        } else if (this.timeLeft <= 5) {
            this.timerBar.style.background = '#FFA500';
        } else {
            this.timerBar.style.background = 'linear-gradient(90deg, #00FF00, #FF1493)';
        }
    }

    handleAnswer(event) {
        const button = event.target;
        const selectedAnswer = parseInt(button.dataset.answer);
        
        // Clear timer
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        // Handle honeycomb round differently
        if (this.currentRound === 2) {
            this.handleHoneycombAnswer(selectedAnswer);
            return;
        }
        
        // Normal round handling
        if (selectedAnswer === this.currentQuestion.correct) {
            this.handleCorrectAnswer(button);
        } else {
            this.handleWrongAnswer(button);
        }
    }
    
    handleHoneycombAnswer(selectedAnswer) {
        if (selectedAnswer === this.currentQuestion.correct) {
            // Increment score
            this.score += 10;
            this.updateScore();
            
            if (this.soundEnabled) {
                this.playCorrectSound();
            }
            
            // Update progress
            this.questionsAnswered++;
            
            // Remove symbol from available list
            this.availableSymbols = this.availableSymbols.filter(s => s !== this.currentSymbol);
            
            // Show success and continue
            this.showHoneycombSuccess();
        } else {
            this.handleWrongAnswer();
        }
    }
    
    showHoneycombSuccess() {
        // Hide question content
        const questionContent = document.querySelector('#honeycomb-question .question-content');
        questionContent.classList.add('hidden');
        
        // Show success message
        const successMessage = document.querySelector('#honeycomb-question .success-message');
        successMessage.classList.remove('hidden');
        
        // After delay, continue game
        setTimeout(() => {
            // Hide success message and question container
            successMessage.classList.add('hidden');
            questionContent.classList.remove('hidden');
            document.getElementById('honeycomb-question').classList.add('hidden');
            
            if (this.availableSymbols.length === 0) {
                // All symbols completed, move to next round
                this.completeRound();
            } else {
                // Show remaining symbols
                document.getElementById('honeycomb-symbols').classList.remove('hidden');
                
                // Disable completed symbol
                const completedSymbol = document.querySelector(`.honeycomb-symbol[data-symbol="${this.currentSymbol}"]`);
                if (completedSymbol) {
                    completedSymbol.classList.add('disabled');
                }
            }
        }, 2000);
    }

    handleCorrectAnswer(button = null) {
        if (button) {
            button.classList.add('correct');
        }
        
        this.score += 10;
        this.updateScore();
        
        if (this.soundEnabled) {
            this.playCorrectSound();
        }
        
        // Special handling for honeycomb round
        if (this.currentRound === 2) {
            setTimeout(() => {
                // Hide question container
                const honeycombQuestion = document.getElementById('honeycomb-question');
                honeycombQuestion.classList.add('hidden');
                
                // Show honeycomb grid with clicked symbol disabled
                const honeycombGrid = document.querySelector('.honeycomb-grid');
                honeycombGrid.classList.remove('hidden');
                
                // Disable the last clicked symbol
                if (this.lastClickedSymbol) {
                    const clickedSymbol = document.querySelector(`.honeycomb-symbol[data-symbol="${this.lastClickedSymbol}"]`);
                    if (clickedSymbol) {
                        clickedSymbol.classList.add('disabled');
                    }
                }
                
                // Check if all symbols are disabled
                const activeSymbols = document.querySelectorAll('.honeycomb-symbol:not(.disabled)');
                if (activeSymbols.length === 0) {
                    this.completeRound();
                }
            }, 1000);
        } else {
            // Normal round handling
            setTimeout(() => {
                this.nextQuestion();
            }, 1000);
        }
    }

    handleWrongAnswer(button = null) {
        if (button) {
            button.classList.add('wrong');
        }
        
        if (this.soundEnabled) {
            this.playWrongSound();
        }
        
        // Show wrong feedback briefly
        setTimeout(() => {
            this.eliminatePlayer();
        }, 1000);
    }

    handleTimeUp() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        if (this.soundEnabled) {
            this.playWrongSound();
        }
        
        this.eliminatePlayer();
    }

    eliminatePlayer() {
        this.gameState = 'eliminated';
        
        if (this.soundEnabled) {
            this.playEliminatedSound();
            this.stopBackgroundMusic();
        }
        
        // Hide honeycomb UI when eliminated
        document.getElementById('container-ui').classList.add('hidden');
        document.getElementById('honeycomb-question').classList.add('hidden');
        
        this.showScreen('elimination');
    }

    completeRound() {
        this.currentRound++;
        
        if (this.currentRound > 4) {
            this.victory();
        } else {
            // Show round transition
            this.showRoundTransition();
        }
    }

    showRoundTransition() {
        const roundNames = {
            2: "Sugar Honeycomb",
            3: "Glass Bridge", 
            4: "Final Survival"
        };
        
        this.questionText.textContent = `Round ${this.currentRound}: ${roundNames[this.currentRound]}`;
        this.answerButtons.innerHTML = '';
        
        // Hide honeycomb UI during transition
        document.getElementById('container-ui').classList.add('hidden');
        document.getElementById('honeycomb-question').classList.add('hidden');
        
        setTimeout(() => {
            this.startRound();
        }, 2000);
    }

    victory() {
        this.gameState = 'victory';
        this.finalScore = this.score;
        document.getElementById('final-score').textContent = this.finalScore;
        
        // Hide all round-specific UIs
        this.containerUI.classList.add('hidden');
        document.getElementById('honeycomb-question').classList.add('hidden');
        
        if (this.soundEnabled) {
            this.stopBackgroundMusic();
        }
        
        this.saveHighScore();
        this.showScreen('victory');
    }

    restartGame() {
        this.showScreen('splash');
        this.playerNameInput.value = '';
        this.playerNameInput.focus();
    }

    showScreen(screenName) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show requested screen
        switch (screenName) {
            case 'splash':
                this.splashScreen.classList.add('active');
                break;
            case 'game':
                this.gameScreen.classList.add('active');
                break;
            case 'elimination':
                this.eliminationScreen.classList.add('active');
                break;
            case 'victory':
                this.victoryScreen.classList.add('active');
                break;
        }
    }

    updateScore() {
        this.scoreDisplay.textContent = `Score: ${this.score}`;
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        this.soundToggle.textContent = this.soundEnabled ? '🔊' : '🔇';
        
        if (!this.soundEnabled) {
            this.stopBackgroundMusic();
        } else if (this.gameState === 'playing') {
            this.playBackgroundMusic();
        }
    }

    playBackgroundMusic() {
        if (this.backgroundMusic) {
            this.backgroundMusic.volume = 0.3;
            this.backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    stopBackgroundMusic() {
        if (this.backgroundMusic) {
            this.backgroundMusic.pause();
            this.backgroundMusic.currentTime = 0;
        }
    }

    playCorrectSound() {
        if (this.correctSound) {
            this.correctSound.volume = 0.5;
            this.correctSound.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    playWrongSound() {
        if (this.wrongSound) {
            this.wrongSound.volume = 0.5;
            this.wrongSound.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    playEliminatedSound() {
        if (this.eliminatedSound) {
            this.eliminatedSound.volume = 0.5;
            this.eliminatedSound.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    playTimerTick() {
        if (this.timerTick) {
            this.timerTick.volume = 0.3;
            this.timerTick.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(e => console.log('Fullscreen failed:', e));
        } else {
            document.exitFullscreen();
        }
    }

    pauseGame() {
        if (this.gameState === 'playing') {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            this.pauseBtn.textContent = '▶';
        } else {
            this.startTimer();
            this.pauseBtn.textContent = '⏸';
        }
    }

    handleKeyPress(event) {
        if (this.gameState !== 'playing') return;
        
        // Number keys for answer selection
        const key = event.key;
        if (key >= '1' && key <= '4') {
            const answerIndex = parseInt(key) - 1;
            const buttons = this.answerButtons.querySelectorAll('.answer-btn');
            if (buttons[answerIndex]) {
                buttons[answerIndex].click();
            }
        }
        
        // Spacebar for pause
        if (key === ' ') {
            event.preventDefault();
            this.pauseGame();
        }
        
        // F for fullscreen
        if (key === 'f' || key === 'F') {
            this.toggleFullscreen();
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    saveHighScore() {
        const highScores = this.loadHighScores();
        highScores.push({
            name: this.playerName,
            score: this.finalScore,
            date: new Date().toISOString()
        });
        
        // Sort by score (highest first) and keep top 10
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(10);
        
        localStorage.setItem('chemsquid-highscores', JSON.stringify(highScores));
    }

    loadHighScores() {
        try {
            const scores = localStorage.getItem('chemsquid-highscores');
            return scores ? JSON.parse(scores) : [];
        } catch (e) {
            console.log('Error loading high scores:', e);
            return [];
        }
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new ChemSquidGame();
    
    // Focus on player name input
    document.getElementById('player-name').focus();
    
    // Handle audio context for mobile devices
    document.addEventListener('click', () => {
        if (game.backgroundMusic) {
            game.backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        }
    }, { once: true });
});

// Service Worker for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
} 