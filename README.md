# zhihuManyPics

* chrome插件
* 当一个回答里包含上百张图片时, 难以一次性上传, 并且编辑起来很麻烦
* 可以先在word中将图文编辑好
* 然后将docx文件读取到剪贴板, 直接复制到回答框中
* 以此来简化知乎传图与排版步骤

## 使用说明
* 添加到chrome扩展
* 打开知乎问题页面
* 点击扩展browser action选择docx文件
   1. 新问题<br />
        自动将docx内容填入答题编辑器<br />
   2. 有草稿<br />
        保留原草稿, 另起一行将docx内容填入答题编辑器<br />
   3. 已回答<br />
        先手动点击编辑, 将答题编辑器打开后同有草稿处理<br />

## 程序流程
* 将docx文件转为html格式
* 将html文本中的图片上传到知乎服务器, 得到图片地址
* 生成新的html文本
* 把html文本放入剪贴板
* 查找当前页面中的答题编辑器, 并粘贴html文本

## PS
* 如果回答编辑框没有内容输入, 可以尝试在输入框直接粘贴

<<<<<<< HEAD
=======
<br />
<br />
<br />
<br />
<br />
## 捐赠

* 如果这个模块对您有用, 请大力 Star 它
* 如果您想给我捐赠, 可以选择微信或者支付宝:

![image](https://github.com/llwslc/zhihuManyPics/blob/master/QRCode/QR.png)
>>>>>>> b5d142f... update
