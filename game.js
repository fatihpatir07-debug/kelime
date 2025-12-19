// window.WORD_DATA global olarak data.js dosyasından yüklenecek

class WordSearchGame {
    constructor() {
        this.gridSize = 10;
        this.currentWords = [];
        this.foundWords = [];
        this.grid = [];
        this.isDragging = false;
        this.selectionStart = null;
        this.currentSelection = [];
        this.score = 0;
        this.timer = 0;
        this.timerInterval = null;
        this.isAudioEnabled = true;

        // UI Elementleri
        this.screens = {
            menu: document.getElementById('screen-menu'),
            game: document.getElementById('screen-game'),
            result: document.getElementById('screen-result')
        };
        this.gridElement = document.getElementById('word-grid');
        this.wordListElement = document.getElementById('find-word-list');
        this.categoryListElement = document.getElementById('category-list');

        this.init();
    }

    init() {
        this.renderCategories();
        this.setupEventListeners();
        this.setupTheme();
    }

    renderCategories() {
        this.categoryListElement.innerHTML = '';
        Object.keys(window.WORD_DATA).forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <h3>${cat}</h3>
                <p>${window.WORD_DATA[cat].length} Kelime</p>
            `;
            card.onclick = () => this.startGame(cat);
            this.categoryListElement.appendChild(card);
        });
    }

    setupEventListeners() {
        // Tema butonları
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.onclick = () => this.changeTheme(btn.dataset.theme);
        });

        // Geri butonu
        document.getElementById('btn-back').onclick = () => this.showScreen('menu');

        // Fullscreen
        document.getElementById('btn-fullscreen').onclick = () => this.toggleFullscreen();

        // Restart ve Ana Menü
        document.getElementById('btn-restart').onclick = () => this.startGame(this.currentCategory);
        document.getElementById('btn-home').onclick = () => this.showScreen('menu');

        // Audio
        document.getElementById('btn-audio').onclick = () => this.toggleAudio();

        // Info Modal
        document.getElementById('btn-info').onclick = () => document.getElementById('modal-info').style.display = 'flex';
        document.querySelector('.close-modal').onclick = () => document.getElementById('modal-info').style.display = 'none';

        // Mouse/Touch Events for Grid
        this.gridElement.addEventListener('mousedown', (e) => this.handleStart(e));
        window.addEventListener('mousemove', (e) => this.handleMove(e));
        window.addEventListener('mouseup', () => this.handleEnd());

        this.gridElement.addEventListener('touchstart', (e) => this.handleStart(e), { passive: false });
        window.addEventListener('touchmove', (e) => this.handleMove(e), { passive: false });
        window.addEventListener('touchend', () => this.handleEnd());
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('ws-theme') || 'dark';
        this.changeTheme(savedTheme);
    }

    changeTheme(theme) {
        document.body.className = `theme-${theme}`;
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
        localStorage.setItem('ws-theme', theme);
    }

    toggleAudio() {
        this.isAudioEnabled = !this.isAudioEnabled;
        document.getElementById('btn-audio').innerText = this.isAudioEnabled ? '🔊' : '🔇';
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(s => s.classList.remove('active'));
        this.screens[screenName].classList.add('active');
        if (screenName !== 'game') clearInterval(this.timerInterval);
    }

    startGame(category) {
        this.currentCategory = category;
        this.foundWords = [];
        this.score = 0;
        this.timer = 0;

        // Seviyeye göre grid boyutu ayarla
        this.gridSize = category === 'Genel' ? 12 : 10;

        document.getElementById('game-category-name').innerText = category;
        document.getElementById('score').innerText = `Puan: 0`;

        this.generateLevel(category);
        this.showScreen('game');
        this.startTimer();
    }

    startTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.timer++;
            const mins = Math.floor(this.timer / 60).toString().padStart(2, '0');
            const secs = (this.timer % 60).toString().padStart(2, '0');
            document.getElementById('timer').innerText = `${mins}:${secs}`;
        }, 1000);
    }

    generateLevel(category) {
        const wordsInCat = window.WORD_DATA[category];
        // Rastgele 8-12 kelime seç
        this.currentWords = [...wordsInCat]
            .sort(() => Math.random() - 0.5)
            .slice(0, this.gridSize === 10 ? 8 : 12)
            .map(w => w.toUpperCase());

        this.initGrid();
        this.placeWords();
        this.fillEmptyCells();
        this.renderGrid();
        this.renderWordList();
    }

    initGrid() {
        this.grid = Array(this.gridSize).fill().map(() => Array(this.gridSize).fill(''));
    }

    placeWords() {
        const directions = [
            [0, 1],  // Yatay (Soldan Sağa)
            [1, 0],  // Dikey (Yukarıdan Aşağıya)
            [1, 1],  // Çapraz (Sağ Aşağı)
            [1, -1]  // Çapraz (Sol Aşağı)
        ];

        this.currentWords.forEach(word => {
            let placed = false;
            let attempts = 0;
            while (!placed && attempts < 100) {
                const dir = directions[Math.floor(Math.random() * directions.length)];
                const row = Math.floor(Math.random() * this.gridSize);
                const col = Math.floor(Math.random() * this.gridSize);

                if (this.canPlace(word, row, col, dir)) {
                    this.doPlace(word, row, col, dir);
                    placed = true;
                }
                attempts++;
            }
        });
    }

    canPlace(word, row, col, dir) {
        for (let i = 0; i < word.length; i++) {
            const r = row + (i * dir[0]);
            const c = col + (i * dir[1]);
            if (r < 0 || r >= this.gridSize || c < 0 || c >= this.gridSize) return false;
            if (this.grid[r][c] !== '' && this.grid[r][c] !== word[i]) return false;
        }
        return true;
    }

    doPlace(word, row, col, dir) {
        for (let i = 0; i < word.length; i++) {
            const r = row + (i * dir[0]);
            const c = col + (i * dir[1]);
            this.grid[r][c] = word[i];
        }
    }

    fillEmptyCells() {
        const letters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
        for (let r = 0; r < this.gridSize; r++) {
            for (let c = 0; c < this.gridSize; c++) {
                if (this.grid[r][c] === '') {
                    this.grid[r][c] = letters[Math.floor(Math.random() * letters.length)];
                }
            }
        }
    }

    renderGrid() {
        this.gridElement.style.gridTemplateColumns = `repeat(${this.gridSize}, 1fr)`;
        this.gridElement.innerHTML = '';
        for (let r = 0; r < this.gridSize; r++) {
            for (let c = 0; c < this.gridSize; c++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.innerText = this.grid[r][c];
                this.gridElement.appendChild(cell);
            }
        }
    }

    renderWordList() {
        this.wordListElement.innerHTML = '';
        this.currentWords.forEach(word => {
            const tag = document.createElement('span');
            tag.className = 'word-tag';
            tag.id = `tag-${word}`;
            tag.innerText = word;
            this.wordListElement.appendChild(tag);
        });
    }

    // Interaction Handlers
    handleStart(e) {
        const cell = e.target.closest('.cell');
        if (!cell) return;

        if (e.type === 'touchstart') e.preventDefault();

        this.isDragging = true;
        this.selectionStart = {
            r: parseInt(cell.dataset.row),
            c: parseInt(cell.dataset.col)
        };
        this.updateSelection(this.selectionStart);
    }

    handleMove(e) {
        if (!this.isDragging) return;

        let clientX, clientY;
        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const element = document.elementFromPoint(clientX, clientY);
        const cell = element ? element.closest('.cell') : null;
        if (!cell) return;

        const currentPos = {
            r: parseInt(cell.dataset.row),
            c: parseInt(cell.dataset.col)
        };

        this.updateSelection(currentPos);
    }

    updateSelection(endPos) {
        const start = this.selectionStart;
        const dr = endPos.r - start.r;
        const dc = endPos.c - start.c;

        // Sadece 8 yöne izin ver (Yatay, Dikey, Çapraz)
        const absDr = Math.abs(dr);
        const absDc = Math.abs(dc);

        if (dr !== 0 && dc !== 0 && absDr !== absDc) return;

        const steps = Math.max(absDr, absDc);
        const stepR = dr === 0 ? 0 : dr / absDr;
        const stepC = dc === 0 ? 0 : dc / absDc;

        // Temizle ve Seç
        document.querySelectorAll('.cell.selected').forEach(c => c.classList.remove('selected'));
        this.currentSelection = [];
        let selectedWord = "";

        for (let i = 0; i <= steps; i++) {
            const r = start.r + (i * stepR);
            const c = start.c + (i * stepC);
            const cell = document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
            if (cell) {
                cell.classList.add('selected');
                this.currentSelection.push({ r, c });
                selectedWord += this.grid[r][c];
            }
        }
        this.lastSelectedWord = selectedWord;
    }

    handleEnd() {
        if (!this.isDragging) return;
        this.isDragging = false;

        const word = this.lastSelectedWord;

        if (this.currentWords.includes(word) && !this.foundWords.includes(word)) {
            this.markWordFound(word);
        }

        document.querySelectorAll('.cell.selected').forEach(c => c.classList.remove('selected'));
    }

    markWordFound(word) {
        this.foundWords.push(word);
        this.score += 100 + (word.length * 10);
        document.getElementById('score').innerText = `Puan: ${this.score}`;

        // Grid'de işaretle
        this.currentSelection.forEach(pos => {
            const cell = document.querySelector(`.cell[data-row="${pos.r}"][data-col="${pos.c}"]`);
            cell.classList.add('found');
        });

        // Listede işaretle
        const tag = document.getElementById(`tag-${word}`);
        if (tag) tag.classList.add('found');

        // Başarı efekti (Hafif titreşim varsa)
        if (window.navigator.vibrate) window.navigator.vibrate(50);

        // Kontrol: Oyun bitti mi?
        if (this.foundWords.length === this.currentWords.length) {
            setTimeout(() => this.endGame(), 500);
        }
    }

    endGame() {
        clearInterval(this.timerInterval);
        document.getElementById('final-score').innerText = this.score;
        document.getElementById('final-time').innerText = document.getElementById('timer').innerText;
        this.showScreen('result');
    }
}

// Uygulamayı Başlat ve PWA Kaydı
window.addEventListener('DOMContentLoaded', () => {
    new WordSearchGame();

    // Service Worker Kaydı
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Service Worker Kayıt Edildi'))
            .catch((err) => console.log('Service Worker Hatası:', err));
    }
});
