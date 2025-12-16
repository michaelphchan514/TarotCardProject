// server.js
import 'dotenv/config'; // .envファイルを読み込む
import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import csv from 'csv-parser';
import { rejects } from 'assert';

// ESモジュール環境で __dirname を再定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// 🔑 APIキーを環境変数から取得
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    console.error("エラー: GEMINI_API_KEYが.envファイルに設定されていません。");
    process.exit(1);
}

// Gemini AI クライアントの初期化
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const model = 'gemini-2.5-flash'; 

// ミドルウェア
app.use(express.json()); // リクエストボディをJSONとしてパース
// 静的ファイルをホスト
app.use(express.static(path.join(__dirname))); 

const tarotDatabase = [];

const CSV_FILE_PATH = path.join(__dirname,'tarot_data.csv');

function loadTarotData(){
    return new Promise((resolve, reject) =>{
        const results = [];
        if(!fs.existsSync(CSV_FILE_PATH)){
            console.warn('警告: ${CSV_FILE_PATH} が見つかりません。通常のAI解釈のみで動作します。');
            resolve([]);
            return;
        }

        fs.createReadStream(CSV_FILE_PATH)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log('CSV読み込み完了: ${results.length}枚のカードデータをロードしました。');
            if(results.length > 0){
                console.log('データサンプル:', results[0]);
            }
            resolve(results);
        })
        .on('error', (err) => reject(err));
    });
}

await loadTarotData().then(data => {
    tarotDatabase.push(...data);
})
// ルートエンドポイント（index2.htmlを提供する）
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

// 🌟 APIプロキシエンドポイント
app.post('/api/analyze', async (req, res) => {
    const { question, spreadTitle, spreadDescription, spreadTag, drawnCards } = req.body;

    if (!question || !spreadTitle) {
        return res.status(400).json({ error: '質問とスプレッド情報が必要です。' });
    }

    let cardsContextText = "";
    
    if (drawnCards && drawnCards.length > 0) {
        // 各カードについてCSVデータを検索
        const detailedCards = drawnCards.map(cardName => {
            const cardName = cardObj.name;
            const isReversed = cardObj.isReversed;
            const positionText = isReversed ? "逆位置" : "正位置";

            const cardData = tarotDatabase.find(row => 
                row.カード名 === cardName || row.name === cardName || row['カード'] === cardName
            );

            if (cardData) {
                let meaning = "";
                if (isReversed){
                    meaning = cardData['Reversed'] || cardData['reversed'] || cardData['逆位置'] || cardData['Reverse'] || "（逆位置データなし）";
                }else {
                    meaning = cardData['Upright'] || cardData['upright'] || cardData['Meaning'] || cardData['meaning'] || cardData['正位置'] || "（正位置データなし）";
                }
                const dataString = Object.entries(cardData)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(', ');
                return `【${cardName}】(データベース情報: ${positionText})
                - この向きの意味: ${meaning}`;
            } else {
                // 見つからない場合
                return `【${cardName}】(${positionText})`;
            }
        });

        cardsContextText = detailedCards.join('\n');
    } else {
        cardsContextText = '（カード情報は提供されていません）';
    }

    try {
        const prompt = `あなたは熟練したタロットリーダーです。
質問者から以下の「質問」と「スプレッド」が提示されました。また、ユーザーは既にカードを引いています。
必ずこの「質問」と「スプレッド」と「引かれたカード」の組み合わせに基づき、タロットカードのリーディング結果を日本語で生成してください。
勝手に別のカードを選ばないでください。
各カードについて、シンボルの意味、洞察、そしてそのカードが示す暗示を詳しくて説明してください。「この向きの意味」として提供されたテキストをまた、ユーザーが安
心し、支えられていると感じられるように、共感的な語り口でアドバイスを添えてください。状況にどう向き合い、どのよう
に進んでいけばよいかが分かるような、適切な導きを与えることが求められます。

**スプレッド名:** ${spreadTitle} (${spreadTag})
**スプレッドの説明:** ${spreadDescription}
**質問:** ${question}
**引かれたカード:**${cardsContextText}

**生成するリーディング結果の例（約100〜200文字程度）:**
【隠者】(現在の状況)
内省の時期に来ています。静かな場所で自分の心と向き合うことで答えが見つかるでしょう。
...
`;

        const response = await ai.models.generateContent({
            model: model,
            contents: [
                { role: "user", parts: [{ text: prompt }] }
            ],
            config: {
                temperature: 0.6,
            }
        });

        // 生成されたテキストをクライアントに返す
        res.json({ reading: response.text.trim() });

    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Gemini APIの呼び出し中にエラーが発生しました。' });
    }
});

app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動しました。`);
});