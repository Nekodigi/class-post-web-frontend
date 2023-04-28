# class-post-web-frontend
[![ClassPostWeb](https://user-images.githubusercontent.com/38092328/235031280-c7963c69-5957-4a1b-9ecb-4227c3d99877.png)](https://nekodigi.hatenablog.com/entry/2023/04/28/101354)

- [Blog](#blog)
- [Feature](#feature)
- [Miscellaneous](#miscellaneous)
- [TODO](#todo)
- [Setup](#setup)
- [Usage](#usage)
  - [STEP 1: Spreadsheetに予定を記入](#step-1-spreadsheet%E3%81%AB%E4%BA%88%E5%AE%9A%E3%82%92%E8%A8%98%E5%85%A5)
  - [STEP 2: 予定を表示](#step-2-%E4%BA%88%E5%AE%9A%E3%82%92%E8%A1%A8%E7%A4%BA)
- [Source Code](#source-code)
  - [Frontend](#frontend)
  - [Backend](#backend)

## Blog
画像つきの詳細な解説はBlogを参照ください。  
[Blogへ移動](https://nekodigi.hatenablog.com/entry/2023/04/28/101354)

## Feature

- Spreadsheetからカレンダーを自動生成
- 今日のイベントの一覧、カレンダーの一覧を表示
- 選択した日にちのイベントの確認も可能
- フルスクリーン表示も可能

## Miscellaneous

- QRコードをクリックでも移動できる
- Google Calendar埋め込み

## TODO

- 複数日にまたがったイベント、時間指定のあるイベント

## Setup

1. SpreadsheetのQuickstart等を使ってtokenを取得

スコープの変更が必要。

`const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', '``https://www.googleapis.com/auth/calendar'];`

[https://developers.google.com/sheets/api/quickstart/nodejs](https://developers.google.com/sheets/api/quickstart/nodejs)

1. dev.envをboilerplateに沿って入力(Backend)

Firebaseプロジェクト、Token、Spreadsheetを準備する必要があります。

1. Frontendの環境変数

.env.localにBackendをデプロイしたAPI_URLを入力します。上手くいけば予定が表示される様になります。

## Usage

### STEP 1: Spreadsheetに予定を記入

 Sheet名をイベントの名前に変更して、必須項目の[A行:タイトル,B行:開始時刻]を入力します。

D行:担当をカンマ区切りで入力すると、イベントの詳細に表示されます。

以下のURLにアクセスするとカレンダーが更新されます。
`[backend url]/[calendar/update](https://class-post-web-backend-o3mmnjeefa-an.a.run.app/calendar/update)`


### STEP 2: 予定を表示

- スマホ表示

日にちを選択して、その日の予定を表示できます。下には、クリック可能なカレンダーへのQRコードが表示されます。スマホでの使用を想定しています。

`[frontend url]`

- スクリーン表示

フルスクリーンボタンがあり、教室の画面全体に映すことができます。カレンダーと簡易表示がセットで表示されます。

`[frontend url]/test`

## Source Code

- Frontend

[https://github.com/Nekodigi/class-post-web-frontend](https://github.com/Nekodigi/class-post-web-backend)

- Backend

[https://github.com/Nekodigi/class-post-web-backend](https://github.com/Nekodigi/class-post-web-backend)
