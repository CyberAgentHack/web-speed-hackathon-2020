# Web Speed Hackathon Online

## 概要

「Web Speed Hackathon Online」はリモート参加型のハッカソンです。  
予め準備してあるWebアプリケーションのパフォーマンスを改善することで競い合います。  
当日はSlackベースで進めますので、全国どこからでもご参加いただけます。

## 課題

架空のブログサイト、Amida Blog (あみぶろ)のパフォーマンスを改善してください。  
https://web-speed-hackathon-online-prd.herokuapp.com/
※注意: かなり遅いサイトとなっております

## 環境作成

**評価対象となる環境(URL)を作成し、提出してください。**  
すぐに準備できない方のためにHeroku Review Appsで簡易的な環境は準備可能です。

1. 作業ブランチ `user/${your GitHub account name}` を作成
2. Pull Requestの作成
3. 自動的にHeroku Review AppsでブランチのURLが作成されます

自ら作成した環境を使っていただいても構いません。

また、環境構築に伴い発生するコストについては、  
予算1万円を上限に、費用の精算をしていただけます。  
超過分は各自負担としてください。

## 採点方法

1. [Lighthouse](https://github.com/GoogleChrome/lighthouse)を用いてトップ、ブログ、記事(2ページ)、404ページの計5ページを検査します
2. 各ページ毎にPerformanceスコアと[How are the scores weighted](https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#how-are-the-scores-weighted)に記載のあるMetricsの重み付けを元に採点します
3. 各ページの合計のスコアを得点とします
4. 後述するレギュレーションに違反している場合、得点を0点とします

## レギュレーション

* このリポジトリにあるコードはすべて変更してよい
* 提供されたHeroku Review Appsの他に自らdeploy先を作成してよい
* **Google Chrome最新版において、機能落ちやデザイン差異が発生していないこと** を必須要件とします。
	* 以下を満たない場合は、得点を得られません。
	* a. ページ読み込み完了時のデザイン差異がない（フォントの指定やウィンドウをリサイズしたときのデザインを含む）
	* b. ページをスクロールしたときに得られる情報に差異がない
	* c. ページ遷移、文字のアニメーション、「いいね」押下などの機能が正しく動作する
	* d. API が返却した内容とページで表示される内容に差異がない

## 開発

### 環境
* Node.js (+13)
* yarn

### 準備
```bash
$ yarn install
```

### ビルド
```bash
$ yarn build
```

### ローカルサーバー
```bash
$ yarn serve
```
