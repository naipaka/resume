# 職務経歴書

## 基本情報

| key      | value                       |
| -------- | --------------------------- |
| 氏名     | 小林遼太（Ryota Kobayashi） |
| 生年月日 | 1995/12/22                  |
| 最終学歴 | 新潟大学工学部卒（2018/03） |

## 各種アカウント

[![image](https://img.shields.io/badge/naipaka-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/naipaka) [![image](https://img.shields.io/badge/naipakapaka-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/naipakapaka) [![image](https://img.shields.io/badge/naipaka-3EA8FF?style=flat-square&logo=Zenn&logoColor=white)](https://zenn.dev/naipaka) [![image](https://img.shields.io/badge/naipaka-55C500?style=flat-square&logo=qiita&logoColor=white)](https://qiita.com/naipaka) [![Hatena Blog](https://img.shields.io/badge/naipaka-00A4DE?style=flat-square&logo=hatenabookmark&logoColor=white)](https://naipaka.hatenablog.com/)

## 保有スキル

- Flutter/Dart によるモバイルアプリ開発：5 年以上にわたり、新規開発・リプレイス、技術選定、設計・実装・リリース、ライブラリやサーバー側まで遡る不具合調査を経験。iOS/Android/macOS に対応
- 個人プロダクトの開発・長期運用：登録ユーザー 20 万人超、MAU 2 万超の掃除管理アプリを 6 年間運用。複数のアプリを開発・公開し、継続的に改善
- 開発基盤・生産性改善：CI/CD の設計・構築・運用、Custom Lint ルールの設計・実装、OpenAPI を用いた API 連携基盤の構築
- チーム開発とプロジェクト推進：アプリ側からの API 仕様の起草、レビュー方法の改善、受託案件での進行管理と顧客との窓口
- Firebase・Go によるバックエンド開発：Firestore・Cloud Functions の設計・実装、Go REST API、Cloud Run・Cloud SQL・Docker を用いた実装
- OSS 貢献・技術発信：Flutter/Dart 関連の Issue・PR、個人アプリの OSS 公開、35 本以上の技術記事執筆、Flutter Tokyo での登壇

## 技術スタック

| 技術                  | 経験年数 | 詳細                                                                                                                                                                                                  |
| --------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Flutter / Dart        | 5年以上  | モバイルアプリの新規開発、リプレイス、既存アプリの機能拡張を担当<br>アーキテクチャ設計、パッケージ分割、コードレビュー、CI/CD の整備<br>iOS/Android/macOS に対応したアプリの開発経験                    |
| Firebase              | 5年以上  | Firestore の設計や Functions を使った API 実装を担当<br>認証、ストレージ、アナリティクスなど、アプリ運用に必要な範囲を一通り扱う                                                                      |
| Go                    | 1年      | 自社アプリの API を一人で新規開発し、リリース後の機能追加も担当<br>DB 設計、認証、サブスクリプションのレシート検証、画像のサムネイル生成を実装                                                         |
| Swift / SwiftUI       | 1年      | iOS アプリの機能追加や不具合調査を担当<br>Pigeon や Method Channel を使用したネイティブ連携機能の実装（写真からの動画生成、アプリ内課金、Apple Watch との連携など）<br>個人開発で UIKit、SwiftUI、WidgetKit を使ったアプリを公開 |
| Kotlin / Java         | 1年      | BtoB システムの保守や Method Channel を使用したネイティブ連携機能の実装                                                                                                                              |
| TypeScript            | 1年      | Cloud Functions を使い、業務と個人開発の複数のアプリでバックエンドの処理を実装<br>個人開発で React と WXT を使った Chrome 拡張機能を公開                                                               |
| Google Cloud / Docker | 1年      | Cloud Run、Cloud SQL を用いたデプロイ環境を構築<br>API 開発のローカル環境を Docker Compose で整備                                                                                                     |
| AWS                   | 1年未満  | Lambda、Cognito、S3、CloudWatch を使用<br>iOS アプリでの認証機能や定期実行処理を実装                                                                                                                  |

## 職務経歴

エンジニアとして 8 年以上、うち 5 年以上は Flutter/Dart によるモバイルアプリ開発に携わってきました。

自社開発と受託開発の複数のプロジェクトで新規開発やリプレイスを担い、技術選定から設計、実装、リリースまで経験しています。

原因がわからない不具合は、ライブラリやサーバー側の実装まで遡って特定し、チームの境界にまたがる食い違いは仕組みで解消することを大切にしています。

CI/CD、Custom Lint、OpenAPI による自動生成を整備し、リリースやコードレビュー、API 連携を仕組みで支えてきました。

個人開発では、登録ユーザー 20 万人超の掃除管理アプリを 6 年間運用しています。

Flutter/Dart を中心に 35 本以上の技術記事を執筆し、Flutter Tokyo ではアプリの自動デプロイについて登壇しました。

### Altive 株式会社（2023/04〜現在）

Flutter/Dart を中心に、自社開発と受託開発の複数のプロジェクトを並行して担当しています。
各プロジェクトの詳細は [職務経歴 詳細](./details.md) に記載しています。

#### 自社アプリの要件定義から運用まで一人で担当

要件定義から Flutter アプリ、Go による API、Cloud Run と Cloud SQL を用いたインフラまでを担い、初期リリースまで一人で進めました。
アプリ、API、管理ツール、OpenAPI 定義を monorepo にまとめて型で整合を取り、リリース後もサブスクリプション、通報と審査の仕組み、画像のサイズを約 98％削減するサムネイル生成などを追加しています。

#### ライブラリやサーバーの実装まで遡る不具合調査

チーム内で再現できずに止まっていた通知の不具合では、再現条件を突き止め、OS ごとに異なる原因を特定して解消しました。
パッケージに原因がある場合は内部の実装まで調べ、決済パッケージの不具合は開発元へ Issue と PR で報告しています。

#### アプリ側からの API 設計とサーバー側との調整

サーバーを別チームが担う案件では、アプリ側から API の仕様を起草し、サーバー側と調整してから実装する進め方をとっています。
OpenAPI から生成したクライアントとサーバーの食い違いは生成テンプレートで解消し、サーバー側の不具合は Laravel のコードまで調べて修正の PR を出しました。

#### リリース自動化とレビューの仕組みづくり

ビルドからストア提出の直前までを GitHub Actions と Xcode Cloud で自動化し、人が操作する時間を 1 回あたり約 1〜2 分にして、複数のプロジェクトへ展開しました。
レビューでは、定型的な確認を Custom Lint で自動化し、設計判断をモブプログラミングで共有する形に変えて、数十件に及んでいたやり取りを数件に減らしました。
追加した lint ルールは、社外のリポジトリでも使われています。

#### 受託案件のプロジェクトリード

進行管理、顧客との窓口、メンバーへのタスクの割り振りを担いながら実装も進め、複数の案件と並行しつつ、実装開始から 1 か月未満で審査提出まで進めた案件もあります。

#### 組織への提案

MVV の策定と経営ロードマップのたたき台づくり、リモートワークでの Gather の導入を提案しました。

### 株式会社ライトコード（2020/01〜2023/04）

ネイティブアプリや Web、API の案件を経て Flutter の案件へ移り、複数チームでの開発と、一人でのアプリ開発の両方を経験しました。
各プロジェクトの詳細は [職務経歴 詳細](./details.md) に記載しています。

大手通信キャリアのアプリでは、3 つの開発チームが並行して開発する体制に、サービス開始前から加わりました。
一方、自社アプリのプロトタイプでは、要件定義とデザインから、2 つのアプリと CI/CD の構築まで一人で担当しました。

チームでは、レビューが Flutter 経験者に偏ってレビュー待ちが溜まり、未経験のメンバーが学ぶ機会もなかったため、レビュアをランダムに割り当てる制度を提案して導入しました。
ほかにも Flutter 未経験のメンバーへの研修を教材づくりから担ったり、プロジェクトを離れる際に知見をドキュメントに残したりして、知識が特定の人にとどまらず、誰が入っても開発を進められるチームにすることを意識してきました。

### NEC ソリューションイノベータ株式会社（2018/04〜2019/12）

エンタープライズ向けの BtoB システムの開発で、Java や TypeScript を用いて、要件定義から設計、実装、テストまでの一連の流れを身につけました。

業務でプログラミングを学ぶうちに自分でもアプリを作れると気づき、個人で iOS アプリを作って App Store で公開しました。これがモバイルアプリ開発へ進むきっかけになりました。

## 業務外活動

### 副業・業務委託（2020/11〜休止中）

Flutter を用いたモバイルアプリ開発を中心に、複数のプロジェクトに参画しました。
開発途中のアプリを引き継いだプロジェクトでは、静的解析を導入して使われていないコードを整理し、TestFlight と Google Play への配布を GitHub Actions と fastlane で自動化しました。

プロジェクトの一部は、2023 年 4 月の Altive 株式会社への参画を機に本業として引き継いでいます。

### OSS開発

#### 自社

Altive が公開している OSS では、次の開発を担当しました。

- [altive_lints](https://pub.dev/packages/altive_lints): Dart の Lint ルール集。Custom Lint のルールを設計・実装し、社外のリポジトリでも使われている
- [flutter_app_template](https://github.com/altive/flutter_app_template): Flutter アプリのテンプレート。使いながら気づいた改善点を自ら起票して実装
- [altfire](https://github.com/altive/altfire): Firebase の各機能を包むパッケージ群。中心となって開発して公開し、その後、廃止を提案してアーカイブ

#### 外部

業務や個人開発で使っているパッケージに不具合を見つけたときは、原因を調べて、開発元へ Issue や PR で報告しています。

- [dart-lang/native](https://github.com/dart-lang/native): ffigen が標準以外の場所にある Xcode の SDK を見つけられない不具合を報告し、修正する PR を作成
- [flutter/website](https://github.com/flutter/website): FFI のドキュメントの誤りを修正する PR を作成
- [cli_launcher](https://github.com/blaugold/cli_launcher): melos の内部で使われているパッケージ。不具合 2 件を報告し、それぞれ修正する PR を作成
- [flutter_stripe](https://github.com/flutter-stripe/flutter_stripe): 決済まわりの不具合 2 件を報告し、PR を作成
- [swagger_parser](https://github.com/Carapacik/swagger_parser): コード生成の不具合 2 件を報告
- [day_night_time_picker](https://github.com/subhamayd2/day_night_time_picker): RouteSettings を渡せるようにする PR を作成

### 個人開発

身近な困りごとをもとにアプリを作り、公開後の運用や収益化まで自分で行っています。
中でも掃除管理アプリ PikaPika は、ユーザーの声や数値を見ながら改善を続け、登録ユーザー 20 万人超、MAU 2 万超のアプリになりました。

[掃除管理アプリ - PikaPika](https://apps.apple.com/jp/app/%E6%8E%83%E9%99%A4%E7%AE%A1%E7%90%86%E3%82%92%E5%AE%B6%E6%97%8F%E3%81%A8%E5%85%B1%E6%9C%89-pikapika/id1521863528)（2020/07〜、iOS/Android）
- 一緒に暮らす人の間で、掃除が必要だと感じる基準の違いから不公平感が生まれるのを防ぐため、共通のルールを決めて分担できるアプリを作った
- 企画、設計、実装から、リリース、収益化まで自分で行っている
- 初回の導線を作り直して離脱を約 6 割から約 2 割に減らしたほか、レビュー依頼の見直し、広告と Pro プランの設計、10 言語への対応などを進めてきた
- 国内外から届く要望をもとに、休暇中に掃除の予定を止める機能や、カレンダーでの予定表示、Apple Watch 対応などを追加した。既存の機能で解決できる要望には、機能を増やさず、使い方に気づけるよう画面の見せ方を変えて対応している
- Flutter/Firebase、Riverpod、RevenueCat、GitHub Actions/Codemagic

[One Page](https://apps.apple.com/us/app/one-page-simple-diary/id6738889085)（2024/12〜、iOS/Android）
- 毎年書いている 1 年の振り返りで、何をしていたか思い出せないことに困っていたため、その日の出来事をさっと書けて、無限スクロールで振り返れる日記アプリを作った。操作性を優先し、広告は入れていない
- 機能ごとにパッケージを分ける設計をこのアプリで試し、コードを [OSS として公開](https://github.com/naipaka/onepage) している
- Flutter、melos、Drift、Riverpod

[GitHub Issue Notes](https://chromewebstore.google.com/detail/github-issue-notes/iodoilfmmpjkkcamhbmdjpbjecmgladm)（2026/02、Chrome 拡張機能）
- 追いかけている Issue や Pull Request について、なぜ追っていたかを忘れてしまう自分の困りごとを解消するために作り、Chrome Web Store で公開した（[OSS公開](https://github.com/naipaka/github-issue-notes)）
- メモは開発者のサーバーに預けず、利用者自身の Private Gist に保存して、どの PC からでも見られるようにしている
- 作成した背景や機能の詳細は [こちら](https://naipaka.hatenablog.com/entry/2026/02/23/110309)
- TypeScript、React、WXT

[次いつ晴れる？](https://apps.apple.com/jp/app/%E6%AC%A1%E3%81%84%E3%81%A4%E6%99%B4%E3%82%8C%E3%82%8B/id1537055268)（2020/10、iOS）
- 一人暮らしをしていて洗濯物を外に干したいとき、天気アプリのウィジェットには今日と明日の天気しか出なかったため、ホーム画面のウィジェットを見るだけで次に晴れる日がわかるアプリを作った（[OSS公開](https://github.com/naipaka/NextSunnyDay-iOS)）
- SwiftUI/Combine、WidgetKit

[PinMusubi](https://apps.apple.com/jp/app/pinmusubi-%E4%B8%AD%E9%96%93%E5%9C%B0%E7%82%B9%E3%81%8B%E3%82%89%E6%8E%A2%E3%81%99%E3%82%B9%E3%83%9D%E3%83%83%E3%83%88%E6%A4%9C%E7%B4%A2%E3%82%A2%E3%83%97%E3%83%AA/id1489074206)（2019/11、iOS）
- 離れて住む人と会うとき、お互いの中間地点の周辺で遊べる場所を探せるアプリを作った。NEC 在籍中に、企画、デザインから公開まで自分で進めた
- Swift/UIKit

## アウトプット

### 記事執筆

- [Zenn](https://zenn.dev/naipaka)
  - 業務で得た Flutter/Dart の知見（Custom Lint、自動デプロイ、Pigeon など）を執筆
- [Qiita](https://qiita.com/naipaka)
  - Swift を使用した iOS アプリ開発における技術記事を中心に執筆
- [ブログ](https://naipaka.hatenablog.com/)
  - 個人開発で試したこと（Flutter の E2E テスト、FFI、CI の Self-hosted runner への移行、AI エージェントを使った開発など）を執筆

### 登壇

- [Flutter Tokyo #5](https://flutter-jp.connpass.com/event/346464/) にて [Flutterアプリ自動デプロイフロー](https://docs.google.com/presentation/d/1l0zFEQcM8y2JQ44kz8NOul9U3ywWgJHHfofVhzxSKmU/edit#slide=id.g3325192d92d_1_5) について発表

## 意欲・興味

- Flutter を中心に、バックエンドや Web 開発など、プロジェクトに応じて幅を広げたい
- 同じプロダクトに複数のエンジニアで向き合い、設計や実装の方針を日常的に話し合えるチームで開発したい
- 技術的な提案や改善を自分から出しながら、レビューや設計の議論でほかのエンジニアからフィードバックを受けて、判断の精度を上げていきたい

## 価値観

- ユーザーのためになっていると実感できたときに一番幸せを感じる
  - 職場の清掃を担当している人から「頑張りに誰も気づいてくれない中で、このアプリだけが褒めてくれる。もう少しこの仕事を頑張ってみる」というレビューが届いたときは、「このために生まれてきた」と思えるほど嬉しかった
- 業務外での開発を通じて得た知見をチームに共有し、貢献することを重視
- 心理的安全性が高い場所で、仕事のパフォーマンスを発揮できる
  - 誰もが意見を言える、レビューの指摘にトゲがない、チームのメンバーを信頼できるなど
- 同じ船に乗ったチームのみんなで、同じ目的地に向かって進みたい

## 資格

- 2017/11 基本情報技術者
- 2018/06 応用情報技術者
- 2019/07 Java Silver

## 補足資料

- [職務経歴 詳細](./details.md) - プロジェクトごとの詳細な業務内容を記載

---

最終更新日： 2026 年 9 月 28 日

以上
