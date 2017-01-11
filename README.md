# Patch of BITJWC
修复北京理工大学教务处网站教务管理系统页面上的显示 Bug。

Patch of BITJWC 是一个[用户脚本](http://userscripts-mirror.org/)，Chrome 浏览器原生支持用户脚本，Firefox 在安装 [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) 扩展后可以使用。

*由于原生 Chrome 不再支持用户自定义添加用户脚本，下载 - 安装模式不再支持原生 Chrome，使用原生 Chrome 的用户请使用下面的“Bookmarklet 模式”*

## 下载 - 安装模式

### 下载
下载文件 [patch-of-bitjwc.user.js](https://github.com/fenprace/Patch-of-BITJWC/raw/master/patch-of-bitjwc.user.js)。

### 安装
Chromium 类浏览器（包括 360 急速浏览器等）点击下载，有提示按照提示允许安装即可。若无提示，则可以直接将 patch-of-bitjwc.user.js 拖入 `选项 > 其他工具 > 扩展元件` 页面，确认安装即可。

Firefox 浏览器安装 GreaseMonkey 后，点击下载链接会直接提示安装，按照提示确认安装即可。

### 使用
安装完成后，打开或刷新教务处教务管理系统页面，下拉菜单已经可以正常显示。

## Bookmarklet 模式
将这个链接 [教务处一键修复][1] 拖入或加入书签栏中，每次打开教务处遇到问题的页面，点击一下该书签即修复。

[1]: javacript:(function() {var replacer = document.createElement("script"); replacer.innerHTML = "function hidemenu(main, menuid){ var element = document.getElementById(menuid); element.style.cssText = 'visibility: hidden;';} function showmenu(main, menuid) { var switcher = document.getElementById(main); var element = document.getElementById(menuid); element.style.cssText = 'visibility: visible; top: 84px; left: ' + switcher.offsetLeft + 'px;';}" document.body.insertBefore(replacer, document.body.lastChild); })();

![](https://github.com/fenprace/Patch-of-BITJWC/raw/master/screenshot.png)
