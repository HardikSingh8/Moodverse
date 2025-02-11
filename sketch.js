let currentP5 = null;

const moods = {
    happy: {
        words: [
            "sunshine laughter joy dance blossom radiant euphoria sparkle charm delight",
            "rainbow smile warmth embrace light happiness bright morning glow gleam",
            "spring flutter breeze gentle sweet melody harmony peace bliss serene"
        ],
        colors: ['#FFD700', '#FF6B6B', '#FFAA85'],
        structure: 'haiku'
    },
    sad: {
        words: [
            "teardrop silence shadow void whisper fading lonely ashes hollow weight",
            "rain darkness sorrow deep ocean night storm cloud grey mist",
            "autumn falling leaves drift away sleep forgotten lost time fade"
        ],
        colors: ['#1E90FF', '#4682B4', '#87CEEB'],
        structure: 'freeverse'
    },
    neutral: {
        words: [
            "horizon pause balance drift murmur shift moment stillness threshold between",
            "wind river stone path walk thought wonder question search find",
            "breath mindful present now here observe watch wait flow change"
        ],
        colors: ['#708090', '#A9A9A9', '#D3D3D3'],
        structure: 'sonnet'
    }
};

function detectMood(text) {
    const words = text.toLowerCase().split(/\s+/);
    let score = 0;
    
    const happyWords = ['happy', 'joy', 'love', 'excited', 'wonderful', 'great', 'smile'];
    const sadWords = ['sad', 'lonely', 'depressed', 'unhappy', 'terrible', 'miserable', 'cry'];
    
    words.forEach(word => {
        if (happyWords.includes(word)) score += 1;
        if (sadWords.includes(word)) score -= 1;
    });
    
    if (score > 0) return 'happy';
    if (score < 0) return 'sad';
    return 'neutral';
}

function generatePoem() {
    const text = document.getElementById('inputArea').value.trim();
    if (!text) {
        alert('Please share your feelings first');
        return;
    }

    // Show loading state
    document.querySelector('.loading').classList.remove('hidden');
    document.getElementById('poem').innerHTML = '';

    setTimeout(() => {
        const mood = detectMood(text);
        const { words, colors, structure } = moods[mood];

        let poemText;
        if (structure === 'haiku') {
            poemText = generateHaiku(words[0].split(' '));
        } else {
            poemText = generateFreeVerse(words.join(' ').split(' '));
        }

        // Update UI
        document.body.style.background = `var(--${mood}-bg)`;
        document.getElementById('poem').innerText = poemText;
        document.querySelector('.loading').classList.add('hidden');

        // Initialize visualization
        if (currentP5) currentP5.remove();
        createVisualization(mood, colors);
    }, 1000);
}

function generateHaiku(wordBank) {
    const getRandomWords = (count) => {
        let result = [];
        for (let i = 0; i < count; i++) {
            result.push(wordBank[Math.floor(Math.random() * wordBank.length)]);
        }
        return result.join(' ');
    };

    return [
        getRandomWords(3),  // 5 syllables
        getRandomWords(4),  // 7 syllables
        getRandomWords(3)   // 5 syllables
    ].join('\n');
}

function generateFreeVerse(wordBank) {
    const lines = [];
    const lineCount = Math.floor(Math.random() * 3) + 3; // 3-5 lines

    for (let i = 0; i < lineCount; i++) {
        const wordCount = Math.floor(Math.random() * 4) + 3; // 3-6 words per line
        const line = [];
        for (let j = 0; j < wordCount; j++) {
            line.push(wordBank[Math.floor(Math.random() * wordBank.length)]);
        }
        lines.push(line.join(' '));
    }

    return lines.join('\n');
}

function createVisualization(mood, colors) {
    currentP5 = new p5((p) => {
        let particles = [];

        class Particle {
            constructor() {
                this.x = p.random(p.width);
                this.y = p.random(p.height);
                this.color = p.random(colors);
                this.size = p.random(5, 15);
                this.speedX = p.random(-1, 1);
                this.speedY = p.random(-1, 1);
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = p.width;
                if (this.x > p.width) this.x = 0;
                if (this.y < 0) this.y = p.height;
                if (this.y > p.height) this.y = 0;
            }

            display() {
                p.fill(this.color);
                p.ellipse(this.x, this.y, this.size);
            }
        }

        p.setup = () => {
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
            p.noStroke();

            for (let i = 0; i < 50; i++) {
                particles.push(new Particle());
            }
        };

        p.draw = () => {
            p.background(0, 10);
            particles.forEach(particle => {
                particle.update();
                particle.display();
            });
        };
    }, document.body);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (currentP5) {
        currentP5.resizeCanvas(window.innerWidth, window.innerHeight);
    }
});

