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
    const { question, spreadTitle, spreadDescription, spreadTag } = req.body;

    if (!question || !spreadTitle) {
        return res.status(400).json({ error: '質問とスプレッド情報が必要です。' });
    }

    try {
        const prompt = `あなたは熟練したタロットリーダーです。
質問者から以下の「質問」と「スプレッド」が提示されました。
この「質問」と「スプレッド」の組み合わせに基づき、タロットカードのリーディング結果を日本語で生成してください。
各カードについて、シンボルの意味、洞察、そしてそのカードが示す暗示を詳しくて説明してください。また、ユーザーが安
心し、支えられていると感じられるように、共感的な語り口でアドバイスを添えてください。状況にどう向き合い、どのよう
に進んでいけばよいかが分かるような、適切な導きを与えることが求められます。
テキストが複数のカードについて書かれている場合、それぞれのカードを別々の段落に分けて説明してください。
また、最後の段落では、カード全体から読み取れる結論を推測してまとめてください。


**スプレッド名:** ${spreadTitle} (${spreadTag})
**スプレッドの説明:** ${spreadDescription}
**質問:** ${question}


`;

        const response = await ai.models.generateContent({
            model: model,
            contents: [
                { role: "user", parts: [{ text: prompt }] }
            ],
            config: {
                temperature: 0.8,
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