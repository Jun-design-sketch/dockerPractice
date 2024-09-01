import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

await connectToDatabase();

app.listen(3000);

// 実行は簡単だ。。
// docker build .
// docker run <imageid>
// docker ps
// docker stop <container>
// ...
// 前もなんとなく触ってはいたけれど…

// image vs container

// image
// Template/Blueprints for container
// contains codes + required tools/Environment
// イメージは全ての設定命令とコードが含まれた、共有可能なパッケージ

// containers
// 何かを含むパッケージ The running "unit of software"
// コンテナはイメージの具体的な実行インスタンス

// つまり、イメージを基盤とするコンテナを実行するのだ。

// imageはどこから持ってくるか？
// 誰かが作ったものを使うか、dockerHubから持ってくるかとかになる
// dockerHubからNodeを持ってくるとしたら
// docker run nodeしコンテナを作る。
// Status: Downloaded newer image for node:latest
// ダウンロードしたが、nodeShellとか出てこないしDockerDesktopからもExitedしている
// 疎通したいと docker run -it nodeすると、nodeシェルが出てくる

// これではNodeが実行はできるだろうが（ローカルにNodeをインストールしていなくとも）
// 私のコードを持つコンテナを作るには、イメージを基盤に自分のイメージを作るべき。


