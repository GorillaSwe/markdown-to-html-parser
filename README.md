## このリポジトリについて

TypeScript で Markdown を解析するプロジェクトです。

- Markdown の基本構文を文字列として受け取り
- AST（抽象構文木）に変換し
- HTML として出力する

という一連のパース処理を、実装していきます。

## 開発環境

- Node.js v22.14.0
- yarn v1.22.19

## セットアップ方法

### 依存パッケージのインストール

```bash
$ yarn install
```

## 実行方法

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## テスト実行方法

```bash
# unit tests
$ yarn run test
```
