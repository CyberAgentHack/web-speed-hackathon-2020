# WIC Speed Hackathon Online

## 概要

「WIC Speed Hackathon Online」はリモート参加型のハッカソンです。
予め準備してある Web アプリケーションのパフォーマンスを改善することで競い合います。

## 課題

架空のブログサイト、Amida Blog (あみぶろ)のパフォーマンスを改善してください。
https://web-speed-hackathon-online-prd.herokuapp.com/

※注意: かなり遅いサイトとなっております

## 環境作成

**評価対象となる環境(URL)を作成し、提出してください。**

任意の場所にデプロイいただくことができますが、すぐに準備できない方のために Heroku Review Apps によるデプロイも用意してあります。

1. 作業ブランチ `user/${your GitHub account name}` を作成
2. Pull Request の作成
3. 自動的に Heroku Review Apps でブランチの URL が作成されます

外部のサービスは全て無料枠の範囲内で使用してください。万が一コストが発生した場合は全て自己負担となります。

## 採点方法

1. [Lighthouse v6](https://github.com/GoogleChrome/lighthouse)を用いてトップ、ブログ、記事(2 ページ)、404 ページの計 5 ページを検査します
2. 各ページ毎に [Lighthouse Performance Scoring](https://web.dev/performance-scoring/#lighthouse-6) に基づき以下の点数の総和を計算し、ページのスコアとします
   - Performance Score (0-100 点)
   - First Contentful Paint の相対スコア × 3 (0-3 点)
   - Speed Index の相対スコア × 3 (0-3 点)
   - Largest Contentful Paint の相対スコア × 5 (0-5 点)
   - Time To Interactive の相対スコア × 3 (0-3 点)
   - Total Blocking Time の相対スコア × 5 (0-5 点)
   - Cumulative Layout Shift の相対スコア × 1 (0-1 点)
3. 各ページの合計のスコアを得点とします
4. 後述するレギュレーションに違反している場合、得点を 0 点とします

## レギュレーション

- このリポジトリにあるコードはすべて変更してよい
- 提供された Heroku Review Apps の他に自ら deploy 先を作成してよい
- 外部のサービス (SaaS 等) も自由に利用してよい
- **Google Chrome 最新版において、機能落ちやデザイン差異が発生していないこと** を必須要件とします。
  - 以下を満たない場合は、得点を得られません。
  - a. ページ読み込み完了時のデザイン差異がない（フォントの指定やウィンドウをリサイズしたときのデザインを含む）
  - b. ページをスクロールしたときに得られる情報に差異がない
  - c. ページ遷移、文字のアニメーション、「いいね」押下などの機能が正しく動作する
  - d. API が返却した内容とページで表示される内容に差異がない

## 開発

### 環境

- Node.js (+13)
- yarn

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
### 初期状態
## Lighthouse
![スクリーンショット 2020-09-22 17 13 59](https://user-images.githubusercontent.com/19602112/93858405-15bc3900-fcf7-11ea-8b9c-accd0ed07d83.png)

## Webpack Analyzer
![スクリーンショット 2020-09-22 17 12 26](https://user-images.githubusercontent.com/19602112/93858270-dbeb3280-fcf6-11ea-80c8-64d5f9ee8c5e.png)
