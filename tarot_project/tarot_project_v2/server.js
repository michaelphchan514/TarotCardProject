// server.js
import 'dotenv/config'; // .envファイルを読み込む
import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

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

    try {
        const prompt = `あなたは熟練したタロットリーダーです。
質問者から以下の「質問」と「スプレッド」が提示されました。また、ユーザーは既にカードを引いています。
必ずこの「質問」と「スプレッド」と「引かれたカード」の組み合わせに基づき、リーディングを行ってください。
勝手に別のカードを選ばないでください。

**スプレッド名:** ${spreadTitle} (${spreadTag})
**スプレッドの説明:** ${spreadDescription}
**質問:** ${question}
**引かれたカード:**${cardInfoText}

この組み合わせに基づき、タロットカードのリーディング結果を日本語で生成してください。
引かれたそれぞれのカードについて、その意味と、質問に対するアドバイス、洞察、または結論として、深く、共感的で、簡潔なトーンで記述してください。

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
                temperature: 0.7,
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