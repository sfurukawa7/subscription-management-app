# サブスク管理Webアプリ

## 動作環境

- Node.js: v16.19.0
- Next.js: v13.1.2
- React: v18.2.0

## 環境構築

### 1. Dockerをインストールする（インストール済みならスキップ）

- 詳細は[こちら](https://docs.docker.jp/engine/installation/)から
- Windows Homeの場合，WSL2をインストールする必要があるため注意

### 2. Dockerfileをダウンロードする

- CLIの場合： `curl -O https://raw.githubusercontent.com/sfurukawa7/subscription-management-app/develop/Dockerfile`
- 手動で作成する場合： 空のDockerfileを作成し[こちら](https://raw.githubusercontent.com/sfurukawa7/subscription-management-app/develop/Dockerfile)をコピペ
- その他：リポジトリをzipでダウンロードしその中のDockerfileを使う

### 3. Dockerイメージをビルド

- コマンド（MacOS/Linux）： `sudo docker build -t <イメージ名> <Dockerfileのパス>`

### 4. Dockerコンテナを作成

- 開発モードでNext.jsを起動させてページを確認するために，ローカルホストのポート番号9000をコンテナのポート番号3000にポートフォワードさせる
- ローカルホストからコンテナ内のファイルにアクセスするためにマウントする
- コマンド（MacOS/Linux）：　`sudo docker run -it -p 9000:3000 --name <コンテナ名> -v <ホストのマウント先>/:/home/workspace <イメージ名>`

### 5. コンテナ内でリポジトリをクローン&npmモジュールをインストール

1. `git clone https://github.com/sfurukawa7/subscription-management-app.git`
2. `cd subscription-management-app`
3. `npm install`

### 6. `.env.local`の作成

- 開発には環境変数をまとめた`.env.local`が必要となります
- このファイルはバージョン管理していないため，開発者から共有してもらいリポジトリのルートに置いてください

## 使い方

- developmentモードで実行: `npm run dev`
- productionモードで実行: `npm run start`

## 開発手順

### 1. Issueを立てる
- Issue名：XX画面（<PC|スマホ>）

### 2. Issue番号に基づいてBranchを切る
- Branch名：`<Type>/#<Issue番号>-<キーワード>`
- Typeは[こちら](https://gist.github.com/seunggabi/87f8c722d35cd07deb3f649d45a31082)を参考にする

### 3. 2で切ったBranchで開発する
- その都度，commit&push

### 4. Figmaの画面通りに開発完了できればPull Request
- 問題なければdevelopブランチにMergeして，IssueをClose

## その他

### デプロイについて

- mainブランチにpushすると自動でデプロイ
- developブランチからのみmainブランチにpush可能
