<!--
 * @Author: ReturnMars
 * @Date: 2023-06-05 17:32:04
 * @LastEditors: ReturnMars
 * @LastEditTime: 2023-06-05 19:37:06
 * @Description: 注释规范-文件注释规范
-->

# 文件注释规范

文件的注释规范主要时文件头的注释规范，基于 VSCode，推荐使用插件 **_korofileheader_**；
文件头的注释，应当包括:**@Author 作者** 、**@Date 日期**、**@LastEditors 最近修改人**、**@LastEditTime 最近修改时间** 和 **@Description 文件描述**，即：

```js
<!--
 * @Author: 作者
 * @Date: 日期
 * @LastEditors: 最近修改人
 * @LastEditTime: 最近修改时间
 * @Description: 文件描述
-->
```

文件描述基本要求：描述文件最近所属位置和文件功能，例如一个 index.vue 文件：

```
├─ 大数据分析
│  ├─ 人口大数据
│  │  └─ index.vue

```

**文件头注释** 应当写成：

```js
<!--
 * @Author: 作者
 * @Date: 日期
 * @LastEditors: 最近修改人
 * @LastEditTime: 最近修改时间
 * @Description: 大数据分析-人口大数据
-->
```
