const spreads = [
    {
        id: 'one',
        title: 'ワンオラクル',
        description: '一枚引きで今日の指針やテーマを簡潔に読み解く',
        tag: '1 Card',
    },
    {
        id: 'three',
        title: 'スリーカード',
        description: '過去・現在・未来など三つの視点で状況を整理する。',
        tag: '3 Cards',
    },
    {
        id: 'celtic',
        title: 'ケルト十字',
        description: '課題の核心から将来の見通しまでを包括的に分析する',
        tag: '10 Cards',
    },
    {
        id: 'yesno',
        title: 'イエス・ノー',
        description: '迷いに対して「進むべきかどうか」の感触を探る',
        tag: 'Yes / No',
    },
    {
        id: 'personality',
        title: '性格診断',
        description: '本質・強み・課題(弱み)の3層で自分を理解する',
        tag: 'Archetype',
    },
];

const presetQuestions = {
    one: [
        '今日の私に必要な心がけは？',
        '今の課題に対して、どんな姿勢で向き合えばいい？',
        '今日の仕事で意識すべきポイントは？',
        '今の恋愛における私へのアドバイスは？',
    ],
    three: [
        '時系列タイプ（過去・現在・未来）',
        '行動指針タイプ（状況・対策・結果）',
        '心理タイプ（自分・相手・関係性）',
        '自己分析タイプ（精神・身体・魂）',
    ],
    celtic: [
        '今の私の人生における最大の課題は何ですか？',
        '私とパートナーの関係は、これからどう進展しますか？',
        '職場でのキャリアパスの現状と見通しは？',
        'プロジェクト成功のために乗り越えるべき課題は？',
        '目標達成のために意識すべきことと無意識の望みは？',
    ],
    yesno: [
        '転職の準備を始めるタイミングか？',
        'あの人は私に好意を持っていますか？',
        '今の住居に引っ越すべきですか？',
        '今抱えている課題は解決に向かいますか？',
        '私たちは復縁できますか？',
    ],
    personality: [
        'わたしの本質的な性格は？',
        'これから伸ばすべき性格的な要素は？',
        'わたしの強みと弱みは？',
        '今の性格が形成された背景は？',
        '他人からどう見られている？',
    ],
};

const questionOptions = document.querySelectorAll('.question-option');
const presetContainer = document.getElementById('presetContainer');
const presetQuestionSelect = document.getElementById('presetQuestion');
const customQuestion = document.getElementById('customQuestion');
const spreadGrid = document.querySelector('.spread-grid');
const analysisOutput = document.getElementById('analysisOutput');
const analyzeBtn = document.getElementById('analyzeBtn');
const motionStage = document.getElementById('motionStage');
const cardsDisplaySection = document.getElementById('cardsDisplaySection');
const cardsContainer = document.getElementById('cardsContainer');
const cardsInstructions = document.getElementById('cardsInstructions');
const drawBtn = document.getElementById('drawBtn');
const voiceToggleBtn = document.getElementById('voiceToggleBtn');

let currentQuestionMode = 'custom';
let currentSpread = spreads[0].id;
let allCards = [];
let selectedCards = [];
let isVoiceEnabled = false;

async function init() {
    initMotionStage();
    loadCards();
    await fetchCardData();
    renderSpreads();
    bindEvents();
    updatePresetQuestions();
}

async function fetchCardData() {
    try{
        const response = await fetch('/api/cards');
        const dbData = await response.json();
        allCards.forEach(card =>{
            const match = dbData.find(row =>{
                const values = Object.values(row);
                const csvName = row['カード名'] || values[0];
                return csvName && csvName.trim() === card.name;
            });
            if(match){
                card.japaneseName = match['日本語'] || Object.values(match)[1] || card.name;
            }else{
                card.japaneseName = card.name;
            }
        });
        console.log("カードデータの統合完了:", allCards);
    }catch (error){
        console.error("カードデータ取得に失敗しました。:", error);
    }    
}
function loadCards() {
    // Load Major Arcana cards - mapping card names to actual filenames
    const majorCardFileMap = {
        'The Fool': 'The Fool.png',
        'The Magician': 'the magician.png',
        'The PriestessHigh': 'the high priestess.png',
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

    const majorArcana = Object.keys(majorCardFileMap);
    
    allCards = majorArcana.map(card => ({
        name: card,
        image: `tarot cards image/Major Arcana/${majorCardFileMap[card]}`,
        isMajor: true
    }));




const suits = ['wands', 'cups', 'swords', 'pentacles'];
    const ranks = [
        'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 
        'eight', 'nine', 'ten', 
        'page', 'knight', 'queen', 'king'
    ];
suits.forEach(suit => {
        ranks.forEach(rank => {
            const cardName = `${rank} of ${suit}`; 
            const fileName = `${cardName}.png`; // Assume file names match card names
            
            const minorCard = {
                name: cardName,
                image: `tarot cards image/Minor Arcana/${suit}/${fileName}`
            };
            
            allCards.push(minorCard);
        });
    });
}
function renderSpreads() {
    spreadGrid.innerHTML = '';
    spreads.forEach((spread) => {
        const card = document.createElement('article');
        card.className = `spread-card ${spread.id === currentSpread ? 'active' : ''}`;
        card.dataset.spread = spread.id;
        card.innerHTML = `
            <span class="tag">${spread.tag}</span>
            <h4>${spread.title}</h4>
            <p>${spread.description}</p>
        `;
        card.addEventListener('click', () => {
            currentSpread = spread.id;
            renderSpreads();
            updatePresetQuestions();
        });
        spreadGrid.appendChild(card);
    });
}

function updatePresetQuestions() {
    const options = presetQuestions[currentSpread] || [];
    presetQuestionSelect.innerHTML = options.map((q) => `<option value="${q}">${q}</option>`).join('');
}

function bindEvents() {
    questionOptions.forEach((option) => {
        option.addEventListener('click', () => {
            questionOptions.forEach((btn) => btn.classList.remove('active'));
            option.classList.add('active');
            currentQuestionMode = option.dataset.questionMode;
            presetContainer.classList.toggle('hidden', currentQuestionMode !== 'preset');
            customQuestion.hidden = currentQuestionMode === 'preset';
        });
    });

    drawBtn.addEventListener('click', () => {
        window.speechSynthesis.cancel();
        const questionText =
            currentQuestionMode === 'preset'
                ? presetQuestionSelect.value
                : customQuestion.value.trim();

        if (!questionText) {
            questionError.style.display ='block';
            customQuestion.style.borderColor = 'var(--accent-strong)';
           customQuestion.focus();
            return;
        }

        analysisOutput.innerHTML = '<p class="placeholder">カードをすべてめくって、分析のボタンを押してください。</p>';
        analyzeBtn.style.display = 'none';

        // Display cards
        setupCards();

        cardsDisplaySection.scrollIntoView({behavior:'smooth', block:'center'});
    });
    
    analyzeBtn.addEventListener('click', async () => {
        const questionText = currentQuestionMode === 'preset'
        ? presetQuestionSelect.value
        : customQuestion.value.trim();

        const spreadInfo = spreads.find((spread) => spread.id === currentSpread);

        const drawnCardsData = selectedCards.map(c => ({
            name: c.name,
            isReversed: c.isReversed
    }));

        // UIを更新し、読み込み中であることを示す
        analysisOutput.innerHTML = `
            <h4>${spreadInfo.title} を選択しました</h4>
            <p>質問内容：${questionText}</p>
            <p>タロットからのメッセージを生成中です...少々お待ちください ⏳</p>
        `;
        analyzeBtn.disabled = true; // ボタンを無効化
        
        // 🌟 サーバープロキシへのリクエスト
        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: questionText,
                    spreadTitle: spreadInfo.title,
                    spreadDescription: spreadInfo.description,
                    spreadTag: spreadInfo.tag,
                    drawnCards: drawnCardsData,
                }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }
            
            const readingResult = data.reading;
            const formattedResult = readingResult
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            // 最終的な結果を表示
            const finalMessage = `
                <h4>${spreadInfo.title} の読み解き結果</h4>
                <p>質問内容：${questionText}</p>
                <div style="margin-top: 15px; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 12px;">
                    <p style="font-weight: bold; color: var(--accent-strong);">💡 タロットからのメッセージ</p>
                    <p style="white-space' pre-wrap;">${formattedResult}</p>
                </div>
                <p style="color: var(--muted); margin-top: 20px;">このスプレッドでは、<strong>${spreadInfo.description}</strong> という視点で深く読み解くことができます。カードを引きながら、直感で気づいた言葉や感情をメモしてみましょう。</p>
            `;
            analysisOutput.innerHTML = finalMessage;
           //reading alout the result here by calling the function
             speak(readingResult);

        } catch (error) {
            console.error('分析エラー:', error);
            analysisOutput.innerHTML = `
                <h4>分析中にエラーが発生しました</h4>
                <p>質問内容：${questionText}</p>
                <p style="color: red;">エラー: サーバーとの通信またはGemini API呼び出しで問題が発生しました。コンソールを確認してください。</p>
        `;
        } finally {
            analyzeBtn.disabled = false; // ボタンを再有効化
        }
        
    });
        if (voiceToggleBtn) {
    voiceToggleBtn.addEventListener('click', () => {
        isVoiceEnabled = !isVoiceEnabled;

        if (isVoiceEnabled) {
            // ONの状態
            voiceToggleBtn.innerHTML = "🔊 読み上げ: ON"; // アイコン付きテキスト
            voiceToggleBtn.classList.add('active');
            
            // もし既に分析結果が表示されていたら、デモとして読み上げてみる
            const resultText = document.querySelector('#analysisOutput div')?.innerText;
            if(resultText && resultText.length > 10) {
                 speak(resultText);
            }
        } else {
            // OFFの状態
            voiceToggleBtn.innerHTML = "🔇 読み上げ: OFF";
            voiceToggleBtn.classList.remove('active');
            window.speechSynthesis.cancel(); // 停止
        }
    });
}  
}

function initMotionStage() {
    if (!motionStage) return;
    const totalCards = 16;
    const maxRotation = 70;
    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement('div');
        card.className = 'motion-card';
        card.dataset.index = i;
        const ratio = i / (totalCards - 1);
        const centered = ratio - 0.5;
        const rotation = centered * maxRotation;
        const xOffset = centered * 260;
        const yOffset = -Math.abs(centered) * 45 - 10;
        card.style.setProperty('--rotation', `${rotation}deg`);
        card.style.setProperty('--x-offset', `${xOffset}px`);
        card.style.setProperty('--y-offset', `${yOffset}px`);
        card.style.setProperty('--i', i);
        motionStage.appendChild(card);
    }
}

function setupCards() {
    if (!cardsContainer || !cardsDisplaySection) return;
    
    // Determine card count based on spread
    let cardCount = 1;
    if (currentSpread === 'three') cardCount = 3;
    if (currentSpread === 'celtic') cardCount = 10;
    if (currentSpread === 'yesno') cardCount = 2;
    if (currentSpread === 'personality') cardCount = 3;

    // Show cards section
    cardsDisplaySection.style.display = 'block';
    cardsContainer.innerHTML = '';
    selectedCards = [];

    // If it's personality, we only take cards where the image path contains 'Major Arcana'
    let availablePool = [...allCards];
    
    if (currentSpread === 'personality') {
        availablePool = allCards.filter(card => card.image.includes('Major Arcana'));
    }

    // Shuffle cards
    const shuffled = availablePool.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, cardCount);

    // Label mapping
    const labelMap = {
        three: ['過去', '現在', '未来'],
        yesno: ['Yes', 'No'],
        personality: ['本質', '強み', '課題(弱み)'],
        celtic: [
            '現在の状況', '課題', '遠い過去', '最近の過去',
            '可能な未来', '近い未来', 'あなたのアプローチ', '外部の影響',
            '希望と恐れ', '最終結果'
        ]
    };

    const labels = labelMap[currentSpread] || [];

    selected.forEach((card, index) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'card-wrapper';
        cardWrapper.dataset.index = index;

        const tarotCard = document.createElement('div');
        tarotCard.className = 'flipable-tarot-card';

        // Card back
        const cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back-face';
        cardBack.innerHTML = '🔮';

        // Card front
        const cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front-face';
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
        const labelContainer = document.createElement('div');
        labelContainer.className = 'card-label';
        if (labels[index]) {
            const positionText = document.createElement('div');
            positionText.textContent = labels[index];
            positionText.style.fontSize = '0.9em';
            positionText.style.opacity = '0.8';
            positionText.style.marginBottom = '5px';
            labelContainer.appendChild(positionText);
        }

        const nameText = document.createElement('div');
        nameText.textContent = card.japaneseName || card.name;
        nameText.style.fontWeight = 'bold';
        nameText.style.fontSize = '1.1em';
        nameText.style.color = '#fff';
        nameText.style.visibility = 'hidden';
        nameText.style.transition = 'opacity 0.5s';
        nameText.style.opacity = '0';
        labelContainer.appendChild(nameText);

        cardWrapper.appendChild(tarotCard);
        cardWrapper.appendChild(labelContainer);

        // Click to flip
        cardWrapper.addEventListener('click', () => {
            if (!tarotCard.classList.contains('flipped')) {
                tarotCard.classList.add('flipped');
                const isReversed = Math.random() < 0.5;
                if(isReversed){
                    img.style.transform = 'rotate(180deg)';
                }
                const positionStr = isReversed ? '(逆位置)' : '(正位置)';
                nameText.textContent = (card.japaneseName || card.name) + positionStr;
                nameText.style.visibility = 'visible';
                nameText.style.opacity = '1';
                selectedCards.push({
                    ...card,
                    position: index,
                    label: labels[index] || '',
                    isReversed: isReversed
                });
                checkAllFlipped(cardCount);
            }
        });

        cardsContainer.appendChild(cardWrapper);
    });

    // Scroll to cards section
    cardsDisplaySection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function checkAllFlipped(totalCards){
    const flippedCards = document.querySelectorAll('.flipable-tarot-card.flipped');
    if(flippedCards.length === totalCards){
        analyzeBtn.style.display = 'inline-block';

        setTimeout(() => {
            document.querySelector('.analysis-panel').scrollIntoView({behavior:'smooth', block:'start'});
        },500);
    }
}

document.addEventListener('DOMContentLoaded', init);


document.addEventListener('DOMContentLoaded', init);


 function speak(text){
    if(!isVoiceEnabled){
        window.speechSynthesis.cancel();
        return;
    }
    if(!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.6;   
    utterance.pitch = 1.4;  
    utterance.volume = 1.0;  
    utterance.lang = 'ja-JP';
    speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();
  const japaneseVoice = voices.find(voice => voice.lang.startsWith('ja'));
  
  if (japaneseVoice) {
    utterance.voice = japaneseVoice;
    console.log('Using Japanese voice:', japaneseVoice.name);
  } else {
    console.warn('No Japanese voice available');
  }
  
  speechSynthesis.speak(utterance);
  
};
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
        const japaneseVoice = voices.find(voice => voice.lang.startsWith('ja'));
        if (japaneseVoice) {
            utterance.voice = japaneseVoice;
        }
        speechSynthesis.speak(utterance);
    }
 }
 document.getElementById('resetBtn').addEventListener('click', function(){
    window.speechSynthesis.cancel();
    const isConfirmed = confirm("現在の内容をリセットしますか？");
    if(isConfirmed){
        location.reload();
    }
 })