# JavaScriptEnvironment

# Description

ディレクトリ構成

```
|--- public                // 外部に公開するディレクトリ  
|  |-- assets              // webpack で 生成したjs,cssが吐かれるディレクトリ  
|
|--- webpack               // webpack でのコンパイル対象となるファイルはここに配置  
|  |-- src                 // コンパイル前のソースを配置
|  |-- package.json        // npm パッケージ管理ファイル
|  |-- webpack.config.js   // webpack 設定ファイル
|
```

# Usage

webpack へ ディレクトリを移動する　

```
$ cd webpack
```

npm でパッケージをダウンロードする

```
$ npm install
```

webpack でコンパイルを行

```
$ npm run build
```

### npm script 一覧

node_modules と npm のキャッシュを削除する

```
$ npm run clean
```

souce-mapあり,minify化せずにコンパイルを行う

```
$ npm run devBuild
```

souce-mapなし,minify化しコンパイルを行う

```
$ npm run build
```
