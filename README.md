# 个人网站

这是一个静态个人网站模板，包含首页、关于、项目和联系部分。你可以直接打开 `index.html` 进行预览。

## 文件说明

- `index.html` - 主页结构
- `styles.css` - 样式表
- `script.js` - 暗黑/亮色模式切换脚本

## 使用方法

1. 将目录放入本地 web 服务器或直接在浏览器中打开 `index.html`。
2. 修改 `index.html` 中的文本内容以替换你的个人信息。
3. 可根据需要更改 `styles.css` 的配色与布局。

## 部署到 GitHub Pages

1. 在 GitHub 上创建一个新仓库，例如 `personal-site`。
2. 将本地仓库关联到远程仓库：
   ```bash
   git remote add origin https://github.com/amanwanzy/personal-site.git
   git push -u origin main
   ```
3. 在 GitHub 仓库页面中，打开 `Settings` -> `Pages`。
4. 选择 `Branch: main`，然后保存。
5. 稍等片刻，GitHub 会生成一个访问地址，通常类似：
   `https://amanwanzy.github.io/personal-site/`

## 本地预览

如果你只是想本地查看网站，可在项目目录运行：

```bash
python -m http.server 8000
```

然后访问：

```
http://localhost:8000
```
