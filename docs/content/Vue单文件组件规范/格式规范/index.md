<!--
 * @Author: ReturnMars
 * @Date: 2023-06-28 09:56:46
 * @LastEditors: ReturnMars
 * @LastEditTime: 2023-06-28 10:09:17
 * @Description: VUE单文件组件规范-格式规范
-->

# 格式规范

Vue 单文件组件的书写顺序：`<script></script>` => `<template></template>` => `<style scoped></style>`。
例如：

```vue
<script setup>
/* jscode... */
</script>
<template>
  <!-- templatecode... -->
</template>
<style scoped>
/* csscode... */
</style>
```

::: danger
注意：团队约定，`<style scoped></style>`中的 **scoped** 是必须的，否则局部的样式会污染全局，造成全局的样式不可控！！
:::
