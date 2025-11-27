const spreads = [
    {
        id: 'one',
        title: 'ワンオラクル',
        description: '一枚引きで今日の指針やテーマを簡潔に読み解く。',
        tag: '1 Card',
    },
    {
        id: 'three',
        title: 'スリーカード',
        description: '過去・現在・未来など三つの視点で状況を整理。',
        tag: '3 Cards',
    },
    {
        id: 'celtic',
        title: 'ケルト十字',
        description: '課題の核心から将来の見通しまでを包括的に分析。',
        tag: '10 Cards',
    },
    {
        id: 'yesno',
        title: 'イエス・ノー',
        description: '迷いに対して「進むべきかどうか」の感触を探る。',
        tag: 'Yes / No',
    },
    {
        id: 'personality',
        title: '性格診断',
        description: '本質・強み・課題の3層で自分を理解する。',
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
const presetSpreadSelect = document.getElementById('presetSpread');
const presetQuestionSelect = document.getElementById('presetQuestion');
const customQuestion = document.getElementById('customQuestion');
const spreadGrid = document.querySelector('.spread-grid');
const analysisOutput = document.getElementById('analysisOutput');
const analyzeBtn = document.getElementById('analyzeBtn');
const motionStage = document.getElementById('motionStage');

let currentQuestionMode = 'custom';
let currentSpread = spreads[0].id;

function init() {
    initMotionStage();
    renderSpreads();
    populateSpreadOptions();
    bindEvents();
    updatePresetQuestions();
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

function populateSpreadOptions() {
    presetSpreadSelect.innerHTML = Object.entries({
        one: 'ワンオラクル',
        three: 'スリーカード',
        celtic: 'ケルト十字',
        yesno: 'イエス・ノー',
        personality: '性格診断',
    })
        .map(([value, label]) => `<option value="${value}">${label}</option>`)
        .join('');
}

function updatePresetQuestions() {
    const targetSpread = presetSpreadSelect.value || currentSpread;
    presetSpreadSelect.value = targetSpread;
    const options = presetQuestions[targetSpread] || [];
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

    presetSpreadSelect.addEventListener('change', updatePresetQuestions);

    analyzeBtn.addEventListener('click', () => {
        const questionText =
            currentQuestionMode === 'preset'
                ? presetQuestionSelect.value
                : customQuestion.value.trim();

        if (!questionText) {
            analysisOutput.innerHTML = '<p class="placeholder">質問を入力するか選択してください。</p>';
            return;
        }

        const spreadInfo = spreads.find((spread) => spread.id === currentSpread);
        const message = `
            <h4>${spreadInfo.title} を選択しました</h4>
            <p>質問内容：${questionText}</p>
            <p>このスプレッドでは、<strong>${spreadInfo.description}</strong> という視点で深く読み解くことができます。カードを引きながら、直感で気づいた言葉や感情をメモしてみましょう。</p>
            <p>準備が整ったら、実際のカードを展開し、ポジションごとに意味を感じ取ってください。結果はいつでも変化しうるので、柔らかい心で受け止めてみてくださいね。</p>
        `;
        analysisOutput.innerHTML = message;
    });
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

document.addEventListener('DOMContentLoaded', init);

