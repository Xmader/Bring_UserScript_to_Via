# Bring UserScript to Via Browser

> 将 UserScript/油猴脚本 带到Via浏览器

## 功能

* 在Via浏览器中安装 UserScript/油猴脚本

    * 自动设置脚本所匹配的域名

    * 仅在 UserScript/油猴脚本 中所定义的网址 (脚本头部的`@match`字段) 中运行脚本

    * 脚本完全安装在本地，提升页面加载速度
    > Via浏览器对于GreasyFork中的脚本的原生行为是安装一个对远程脚本的引用


## [安装](https://www.xmader.com/Bring_UserScript_to_Via/)

## 使用

* 在 Greasy Fork 上的任一脚本页面点击 `安装此脚本` 按钮

或

* 在 Via 浏览器中打开任一包含UserScript脚本的 `.js` 文件

## 自行构建

```bash
npm install
npm run clean
npm run build
```

构建生成的文件在`dist`目录下

## License

MIT


