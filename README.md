# 小林遼太(naipaka)の職務経歴書

[日本語 | [English](https://github.com/naipaka/Resume/blob/main/README.en.md)]

## Data

- [GitHub Pages](https://naipaka.github.io/resume)
- [PDF](https://github.com/naipaka/Resume/releases)
- [File](https://github.com/naipaka/Resume/blob/main/docs/README.md)

## Features

### 💅 Lint text

[textlint](https://github.com/textlint/textlint) での自動校正が可能です。

```
$ yarn lint --fix
```

[husky](https://github.com/typicode/husky) によって commit 前にも自動で実行されます。  
校正のルールは`.textlintrc`に記載しています。

### 📝 Convert MD to PDF

[md-to-pdf](https://www.npmjs.com/package/md-to-pdf) での PDF 生成が可能です。

```
$ yarn build:pdf
```

The output PDF can be styled as you like with CSS. Edit the `pdf-configs/style.css`.

### 🧑‍💻 Build

ローカルで職務経歴書をビルドするには、以下のコマンドを実行します。

```
$ bundle install
$ bundle exec jekyll serve --source docs --config docs/_config.yml
```

### 🛠 Create release

`v**` tag をつけて push すると GitHub Actions でビルドが走り、PDF の生成、Release の作成、Assets へ PDF の登録が実行されます。

```
$ git commit -m "add job"
$ git tag v1.0
$ git push origin --tags
```

### 📆 Remind update

GitHub Actions の schedule trigger で 3 ヶ月に 1 回、職務経歴書の内容更新を促す issue が自動生成されます。

To change the duration or stop the job, edit `.github/workflows/create-issue.yml`.  
To change the issue contents, edit `.github/ISSUE_TEMPLATE.md`.

### 💡 References

この職務経歴書は下記を参考に作成しています。🙇‍♂️

- [GitHub の機能をフルに使って職務経歴書の継続的インテグレーションを実現する](https://zenn.dev/ryo_kawamata/articles/resume-on-github)
- [resume-template](https://github.com/kawamataryo/resume-template)
