# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

職務経歴書（レジュメ）の管理リポジトリ。Markdown をソースとして、GitHub Pages（Jekyll）による HTML 公開と md-to-pdf による PDF 生成を行う。コンテンツは日本語。

## よく使うコマンド

```bash
# 依存関係のインストール
yarn install
bundle install

# テキストリント（日本語校正）
yarn lint
yarn lint --fix    # 自動修正

# PDF 生成
yarn build:pdf     # docs/README.pdf を生成

# Jekyll ローカルプレビュー
bundle exec jekyll serve --source docs --config docs/_config.yml
```

## アーキテクチャ

- **docs/README.md** — 職務経歴書の本体（単一ソースオブトゥルース）
- **docs/details.md, docs/difficult-experiences.md** — 詳細な経歴・技術課題の補足ページ
- **pdf-configs/** — md-to-pdf の設定（config.js）とスタイル（style.css）
- **docs/_config.yml** — Jekyll 設定（テーマ: cayman）

### CI/CD（GitHub Actions）

- **lint-text.yml** — 全プッシュで `yarn lint` を実行
- **build-pdf.yml** — `v*` タグで PDF をビルドし GitHub Release にアップロード
- **create-issue.yml** — 3 ヶ月ごとに更新リマインドの Issue を自動作成

### Git フック

- **pre-commit**（Husky）— コミット前に `npm run lint` を自動実行

## テキストリントのルール

`.textlintrc` で日本語技術文書向けのルールを多数設定。主な制約:

- 文の最大長: 120 文字（警告）
- 読点の最大数: 3
- 漢字連続の最大長: 8 文字
- 本文は「ですます」調、箇条書きは「である」調
- 全角・半角間にスペースを入れる（`ja-space-between-half-and-full-width`）
- 箇条書き末尾に句点を付けない

## リリースフロー

Git タグ（`v*`）をプッシュすると GitHub Actions が PDF をビルドし、GitHub Release を作成してアセットとしてアップロードする。
