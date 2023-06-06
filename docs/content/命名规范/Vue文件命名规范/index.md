<!--
 * @Author: ReturnMars
 * @Date: 2023-06-06 09:37:16
 * @LastEditors: ReturnMars
 * @LastEditTime: 2023-06-06 11:08:20
 * @Description: 命名规范-Vue命名规范
-->

# Vue 文件命名规范

Vue 文件（ 即 \*.vue ）命名规范遵循如下规则

## 1. 普通的 Vue 文件

遵循 [HTML&CSS 文件命名规范](/content/%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83/HTML%26CSS%E6%96%87%E4%BB%B6%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83/index.md)，例如：

```
<!-- Vue -->
index.vue
tcc_test.vue
parking_list.vue
user_detail.vue
...
```

## 2. 用作组件的 Vue 文件

用作组件的 Vue 文件也是 \*.vue，但是需要按照官方的组件命名规则，即文件的每个单词首字母必须大写，且为了与 HTML 元素区分（所有的 HTML 元素名称都是单个单词），用作组件的 Vue 文件的文件名单词组成大于 2：

```
<!-- Vue 组件 -->
HandlerList.vue
AutoHeightBox.vue
SealedTable.vue
...
```
