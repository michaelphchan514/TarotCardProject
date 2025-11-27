// 必要なモジュールを読み込む
const http = require('http'); 
const fs = require('fs');
const path = require('path');

const port = 3000; 

// MIMEタイプを返すヘルパー関数
const getContentType = (filePath) => {
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
    };
    return mimeTypes[extname] || 'application/octet-stream';
};

// HTTPサーバーを作成
const server = http.createServer((req, res) => {
    // リクエストされたパスに応じてファイルパスを決定
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index2.html'; // ルートアクセス時は index2.html を返す
    }
    
    // APIキーがハードコードされているため、今回はファイルのサーブのみに集中
    if (filePath.endsWith('.js') && path.basename(filePath) === 'server.js') {
         // server.jsが誤って公開されないようにブロック（セキュリティ強化のため）
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // ファイルが存在しない場合
                res.writeHead(404);
                res.end('File Not Found');
            } else {
                // サーバーエラー
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            // 成功した場合、適切なContent-Typeを設定してファイルを返す
            res.writeHead(200, { 'Content-Type': getContentType(filePath) });
            res.end(content, 'utf-8');
        }
    });
});

// サーバーを指定されたポートで起動
server.listen(port, () => {
    console.log(`サーバーが起動しました: http://localhost:${port}/`);
    console.log('ブラウザで上記URLにアクセスしてください。');
});
