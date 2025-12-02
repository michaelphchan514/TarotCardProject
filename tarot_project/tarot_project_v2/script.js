// Tarot Card Application
class TarotApp {
    constructor() {
        this.cards = [];
        this.selectedCards = [];
        this.currentReading = null;
        this.cardMeanings = {};
        
        this.init();
    }

    init() {
        this.loadCardMeanings();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Reading type selection
        document.querySelectorAll('.reading-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const readingType = e.currentTarget.dataset.reading;
                this.startReading(readingType);
            });
        });

        // Reset button
        document.getElementById('resetBtn')?.addEventListener('click', () => {
            this.reset();
        });

        // Back button
        document.getElementById('backBtn')?.addEventListener('click', () => {
            this.showSelection();
        });
    }

    loadCardMeanings() {
        // Major Arcana meanings
        this.cardMeanings = {
            'The Fool': {
                upright: 'New beginnings, innocence, spontaneity, a free spirit',
                reversed: 'Recklessness, taken advantage of, inconsideration'
            },
            'The Magician': {
                upright: 'Manifestation, resourcefulness, power, inspired action',
                reversed: 'Manipulation, poor planning, untapped talents'
            },
            'The High Priestess': {
                upright: 'Intuition, sacred knowledge, divine feminine, the subconscious mind',
                reversed: 'Secrets, disconnected from intuition, withdrawal and silence'
            },
            'The Empress': {
                upright: 'Femininity, beauty, nature, nurturing, abundance',
                reversed: 'Creative block, dependence on others'
            },
            'The Emperor': {
                upright: 'Authority, establishment, structure, a father figure',
                reversed: 'Domination, excessive control, lack of discipline, inflexibility'
            },
            'The Hierophant': {
                upright: 'Spiritual wisdom, religious beliefs, conformity, tradition, conventions',
                reversed: 'Personal beliefs, freedom, challenging the status quo'
            },
            'The Lovers': {
                upright: 'Love, harmony, relationships, values alignment, choices',
                reversed: 'Self-love, disharmony, imbalance, misalignment of values'
            },
            'The Chariot': {
                upright: 'Control, willpower, success, action, determination',
                reversed: 'Lack of control, lack of direction, aggression'
            },
            'Strength': {
                upright: 'Strength, courage, persuasion, influence, compassion',
                reversed: 'Inner strength, self-doubt, weakness, inadequacy'
            },
            'The Hermit': {
                upright: 'Soul searching, introspection, being alone, inner guidance',
                reversed: 'Isolation, withdrawal, recluse, being anti-social'
            },
            'Wheel of Fortune': {
                upright: 'Good luck, karma, life cycles, destiny, a turning point',
                reversed: 'Bad luck, resistance to change, breaking cycles'
            },
            'Justice': {
                upright: 'Justice, fairness, truth, cause and effect, law',
                reversed: 'Unfairness, lack of accountability, dishonesty'
            },
            'The Hanged Man': {
                upright: 'Pause, surrender, letting go, new perspectives',
                reversed: 'Delays, resistance, stalling, indecision'
            },
            'Death': {
                upright: 'Endings, change, transformation, transition',
                reversed: 'Resistance to change, inability to move on'
            },
            'Temperance': {
                upright: 'Balance, moderation, patience, purpose',
                reversed: 'Imbalance, excess, lack of long-term vision'
            },
            'The Devil': {
                upright: 'Shadow self, attachment, addiction, restriction, sexuality',
                reversed: 'Releasing limiting beliefs, exploring dark thoughts, detachment'
            },
            'The Tower': {
                upright: 'Sudden change, upheaval, chaos, revelation, awakening',
                reversed: 'Personal transformation, fear of change, averting disaster'
            },
            'The Star': {
                upright: 'Hope, faith, purpose, renewal, spirituality',
                reversed: 'Lack of faith, despair, self-trust, disconnection'
            },
            'The Moon': {
                upright: 'Illusion, fear, anxiety, subconscious, intuition',
                reversed: 'Release of fear, repressed emotion, inner confusion'
            },
            'The Sun': {
                upright: 'Positivity, fun, warmth, success, vitality',
                reversed: 'Inner child, feeling down, overly optimistic'
            },
            'Judgement': {
                upright: 'Judgement, rebirth, inner calling, absolution',
                reversed: 'Lack of self-awareness, doubt, self-loathing'
            },
            'The World': {
                upright: 'Completion, accomplishment, travel, achievement',
                reversed: 'Lack of completion, lack of accomplishment'
            }
        };
    }

    async loadCards() {
        // Load Major Arcana cards - mapping card names to actual filenames
        const cardFileMap = {
            'The Fool': 'The Fool.png',
            'The Magician': 'the magician.png',
            'The High Priestess': 'the high priestess.png',
            'The Empress': 'the empress.png',
            'The Emperor': 'the emperor.png',
            'The Hierophant': 'the hierophant.png',
            'The Lovers': 'the lovers.png',
            'The Chariot': 'the chariot.png',
            'Strength': 'strength.png',
            'The Hermit': 'the hermit.png',
            'Wheel of Fortune': 'wheel of fortune.png',
            'Justice': 'justice.png',
            'The Hanged Man': 'the hanged man.png',
            'Death': 'death.png',
            'Temperance': 'temperance.png',
            'The Devil': 'the devil.png',
            'The Tower': 'the tower.png',
            'The Star': 'the star.png',
            'The Moon': 'the moon.png',
            'The Sun': 'the sun.png',
            'Judgement': 'judgement.png',
            'The World': 'the world.png'
        };

        const majorArcana = Object.keys(cardFileMap);

        this.cards = majorArcana.map(card => ({
            name: card,
            image: `tarot cards image/Major Arcana/${cardFileMap[card]}`,
            meaning: this.cardMeanings[card] || { upright: 'A card of mystery and meaning', reversed: 'Reflection and introspection' }
        }));
    }

    async startReading(type) {
        this.currentReading = type;
        
        // Hide selection, show card area
        document.getElementById('readingSelection').style.display = 'none';
        document.getElementById('cardArea').style.display = 'block';
        document.getElementById('readingResults').style.display = 'none';

        await this.loadCards();
        this.selectedCards = [];
        
        let cardCount = 1;
        if (type === 'three') cardCount = 3;
        if (type === 'celtic') cardCount = 10;
        if (type === 'yesno') cardCount = 3;
        if (type === 'personality') cardCount = 3;

        const instructionsMap = {
            single: 'Focus on your intention, then flip the card for guidance.',
            three: 'Reveal each card to explore your past, present, and future.',
            celtic: 'Take your time unveiling each position of the Celtic Cross.',
            yesno: 'Channel your question. Flip the three cards to reveal a Yes or No.',
            personality: 'Use the three archetypal cards to decode your personality layers.'
        };
        const instructionsEl = document.getElementById('instructions');
        if (instructionsEl) {
            instructionsEl.innerHTML = `<p>${instructionsMap[type] || 'Click on a card to reveal your reading'}</p>`;
        }

        this.displayCards(cardCount);
    }

    displayCards(count) {
        const container = document.getElementById('cardsContainer');
        container.innerHTML = '';

        // Shuffle cards
        const shuffled = [...this.cards].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, count);

        const labelMap = {
            three: ['Past', 'Present', 'Future'],
            yesno: ['Energy', 'Action', 'Outcome'],
            personality: ['Core Self', 'Dominant Strength', 'Hidden Challenge'],
            celtic: [
                'Present Situation', 'Challenge', 'Distant Past', 'Recent Past',
                'Possible Future', 'Near Future', 'Your Approach', 'External Influences',
                'Hopes & Fears', 'Final Outcome'
            ]
        };

        selected.forEach((card, index) => {
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'card-wrapper';
            cardWrapper.dataset.index = index;

            const tarotCard = document.createElement('div');
            tarotCard.className = 'tarot-card';

            // Card back
            const cardBack = document.createElement('div');
            cardBack.className = 'card-face card-back';
            cardBack.innerHTML = '🔮';

            // Card front
            const cardFront = document.createElement('div');
            cardFront.className = 'card-face card-front';
            const img = document.createElement('img');
            img.src = card.image;
            img.alt = card.name;
            img.onerror = () => {
                // Fallback if image doesn't load
                cardFront.innerHTML = `<div style="text-align: center; padding: 20px;">
                    <h3>${card.name}</h3>
                </div>`;
            };
            cardFront.appendChild(img);

            tarotCard.appendChild(cardBack);
            tarotCard.appendChild(cardFront);

            // Card label
            const label = document.createElement('div');
            label.className = 'card-label';
            const labels = labelMap[this.currentReading];
            if (labels) {
                label.textContent = labels[index] || '';
            }

            cardWrapper.appendChild(tarotCard);
            cardWrapper.appendChild(label);

            // Click to flip
            cardWrapper.addEventListener('click', () => {
                if (!tarotCard.classList.contains('flipped')) {
                    tarotCard.classList.add('flipped');
                    this.selectedCards.push({
                        ...card,
                        position: index,
                        orientation: Math.random() > 0.5 ? 'upright' : 'reversed'
                    });

                    // Check if all cards are flipped
                    if (this.selectedCards.length === count) {
                        setTimeout(() => {
                            this.showResults();
                        }, 1000);
                    }
                }
            });

            container.appendChild(cardWrapper);
        });
    }

    showResults() {
        document.getElementById('cardArea').style.display = 'none';
        document.getElementById('readingResults').style.display = 'block';

        const resultsContent = document.getElementById('resultsContent');
        resultsContent.innerHTML = '';

        this.selectedCards.forEach((card, index) => {
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';

            const labels = {
                three: ['Past', 'Present', 'Future'],
                celtic: [
                    'Present Situation', 'Challenge', 'Distant Past', 'Recent Past',
                    'Possible Future', 'Near Future', 'Your Approach', 'External Influences',
                    'Hopes & Fears', 'Final Outcome'
                ],
                yesno: ['Energy', 'Action', 'Outcome'],
                personality: ['Core Self', 'Dominant Strength', 'Hidden Challenge']
            };
            const positionLabel = labels[this.currentReading]?.[index] || `Card ${index + 1}`;

            const meaning = card.meaning[card.orientation] || card.meaning.upright;

            resultCard.innerHTML = `
                <h3>${positionLabel || `Card ${index + 1}`}</h3>
                <img src="${card.image}" alt="${card.name}" class="card-image" onerror="this.style.display='none'">
                <div class="card-name">${card.name}</div>
                <div class="orientation">${card.orientation === 'upright' ? '✨ Upright' : '🔄 Reversed'}</div>
                <div class="card-meaning">${meaning}</div>
            `;

            resultsContent.appendChild(resultCard);
        });

        const summary = this.getReadingSummary();
        if (summary) {
            const summaryBlock = document.createElement('div');
            summaryBlock.className = 'result-card';
            summaryBlock.innerHTML = `
                <h3>Reading Summary</h3>
                <div class="card-meaning">${summary}</div>
            `;
            resultsContent.appendChild(summaryBlock);
        }
    }

    getReadingSummary() {
        if (this.currentReading === 'yesno') {
            const uprightCount = this.selectedCards.filter(card => card.orientation === 'upright').length;
            const reversedCount = this.selectedCards.length - uprightCount;
            let verdict = 'Maybe. The energies are evenly balanced.';
            if (uprightCount > reversedCount) {
                verdict = 'Yes. The cards favor moving forward.';
            } else if (reversedCount > uprightCount) {
                verdict = 'No. The cards suggest pausing or reconsidering.';
            }
            return `${verdict} Upright cards: ${uprightCount}, Reversed cards: ${reversedCount}. Use the story of each card to nuance the answer.`;
        }

        if (this.currentReading === 'personality') {
            const [core, strength, challenge] = this.selectedCards;
            if (!core || !strength || !challenge) return '';
            return `Your core archetype is ${core.name} (${core.orientation}). You thrive when embodying ${strength.name} and are asked to make peace with ${challenge.name}. Reflect on how these three layers surface in your daily personality.`;
        }

        return '';
    }

    reset() {
        this.selectedCards = [];
        this.currentReading = null;
        this.showSelection();
    }

    showSelection() {
        document.getElementById('readingSelection').style.display = 'block';
        document.getElementById('cardArea').style.display = 'none';
        document.getElementById('readingResults').style.display = 'none';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TarotApp();
});

