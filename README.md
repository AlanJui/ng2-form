## 專案摘要

PluralSight 課程-[《Angular 2 Forms》](https://app.pluralsight.com/library/courses/angular-2-forms/table-of-contents)，學習：如何在 Angular 2 平台製作「表單」。



## 基本需求

 - 使用之「軟體配置架構」- [Angular 2 Seed](https://github.com/mgechev/angular-seed)
   (Modular starter project for Angular 2 (and beyond) with statically typed build and AoT compilation)

 - [NodeJS](https://nodejs.org/) 版本需求：v5+
 
 - NPM 版本需求：v3+
 
 - Global NodeJS Modules:
 
    * webpack
    * webpack-dev-server
    * typescript
 
 - `WINDOWS 環境必需：` 安裝共用 NodeJS Modules:

```
  $ npm install -g webpack webpack-dev-server typescript 
```
  

### 操作使用

 1. 執行 git clone
 
```
  $ git clone https://github.com/AlanJui/ng2-form <LocalRepoName>
```
 
 2. 安裝專案所需使用之 NodeJS Modules
  
```
  $ npm install
``` 
 
<<<<<<< HEAD
 3. 啟動 NodeJS Server
 
```
  $ npm run server
``` 
 
 4. 啟動開發用 Web Server
  
```
  $ npm start
```

 5. 自瀏覽器觀察輸出結果
=======
 3. 啟動開發用 Web Server
  
  ```angular2html
  $ npm start
```

 4. 自瀏覽器觀察輸出結果
>>>>>>> 76f919c83118b1d830afd9ffc8f3de57d52f8861
 
    使用瀏覽器，觀察「網址」：[`http://localhost:3000`](http://localhost:3000)  的輸出結果。



###【附註】：
  
若欲更改 Web Server 使用的 Port 號，可藉由編輯 `package.json` 檔案，在 `scripts` 裡，變更 port 號。
  
預設的內容：
  
```
scripts": {
  ...,
  "server": "webpack-dev-server --inline --progress --port 3000 --content-base src",
  ...
}    
```   
