##com-browserify

这是一个browserify的插件，用于将html\js\css文件打包成一个符合CommonJS规范的js文件

##Getting started

Install this grunt plugin with: 

```shell
npm install com-browserify --save-dev
```

##How to use

下面以在grunt的browserify下使用为例：

* 首先安装grunt和grunt-browserify模块；
* 配置browserify，引入我们的com-browserify插件：

```shell
var com = require('com-browserify');
browserify: {
    example: {
        src: ['a.js'],
        dest:'dist.js',
        options: {
            preBundleCB: function(b) {
                b.plugin(com);
            }
        }
    }
}
```

* 书写我们的业务代码：

文件a.js
 
```shell
var html = require('./a.html');
var css = require('./a.css');
var addStyle = require('com-browserify/addStyle');  // 如果想自己插入css，可以不引入

console.log(html);  // 输出html代码，可以将其append到DOM上
console.log(css);   // 输出css代码

addStyle(iframeCss);    // 将css应用到文档上，此时背景应该变为了红色
```

文件a.html

```shell
<div>
    <h1>Hello August!</h1>
</div>
```

文件a.css

```shell
body {
    background: red;
}
```

* 执行grunt的browserify构建；

##憧憬

* 在现有条件下，更方便实现组件化开发思想；
* 解除对browserify的依赖；

##联系

E-mail: august_dong@yahoo.com