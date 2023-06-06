<!--
 * @Author: ReturnMars
 * @Date: 2023-06-05 18:17:29
 * @LastEditors: ReturnMars
 * @LastEditTime: 2023-06-05 19:24:17
 * @Description: file content
-->

# 函数注释规范

对于功能单一的小型函数，直接使用 **[单行注释](/content/%E6%B3%A8%E9%87%8A%E8%A7%84%E8%8C%83/%E6%99%AE%E9%80%9A%E6%B3%A8%E9%87%8A%E8%A7%84%E8%8C%83/#_1-%E5%8D%95%E8%A1%8C%E6%B3%A8%E9%87%8A)** 即可。

对于一个功能完整复杂，比较大型，或者是一个 vue3 的 hook 的函数时，需要使用特定的函数注释。
函数注释的语法：

```js
/**
 * 函数说明
 * @描述
 * @关键字
 */
```

## 常用注释关键字

| 注释名       |                   语法                    |                                     含义 | 示例                                         |
| ------------ | :---------------------------------------: | ---------------------------------------: | -------------------------------------------- |
| @function    |            @function 简要描述             | 用于定义当前对象是一个函数，后面可跟描述 | @function 处理表格的行                       |
| @description |           @description 描述信息           |                                 用于描述 | @description 合并 Grid 的行                  |
| @param       |     @param 参数名 {参数类型} 描述信息     |                           描述参数的信息 | @param name {String} 传入名称                |
| @return      |        @return {返回类型} 描述信息        |                         描述返回值的信息 | @return {Boolean} true:可执行;false:不可执行 |
| @author      | @author 作者信息 [附属信息：如邮箱、日期] |                     描述此函数作者的信息 | @author 张三 2015/07/21                      |
| @version     |             @version XX.XX.XX             |                       描述此函数的版本号 | @version 1.0.3                               |
| @example     |             @example 示例代码             |                           演示函数的使用 | @example setTitle('测试')                    |

## 一个注释的示例

```js
/**
 * @function
 * @description
 * @param
 * @return
 * @author
 */
```

## 一个函数+注释的示例

```js
/**
 * @function 处理表格的行
 * @description 合并Grid的行
 * @param grid {Ext.Grid.Panel} 需要合并的Grid
 * @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
 * @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
 * @return void
 * @author mars 2023/06/05
 */
function mergeCells(grid, cols, isAllSome) {
  // Do Something
}
```
