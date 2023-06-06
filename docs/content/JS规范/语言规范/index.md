<!--
 * @Author: ReturnMars
 * @Date: 2023-06-06 10:02:36
 * @LastEditors: ReturnMars
 * @LastEditTime: 2023-06-06 10:38:33
 * @Description: JS规范-语言规范
-->

# 语言规范

## 1. 请使用字面量值创建对象

```js
// bad
const a = new Object{}

// good
const a = {}
```

## 2. 请使用对象方法的简写方式

```js
// bad
const item = {
  value: 1,

  addValue: function (val) {
    return item.value + val;
  },
};

// good
const item = {
  value: 1,

  addValue(val) {
    return item.value + val;
  },
};
```

## 3. 请使用对象属性值的简写方式

```js
const job = "FrontEnd";

// bad
const item = {
  job: job,
};

// good
const item = {
  job,
};
```

## 4. 只对非法标识符的属性使用引号

```js
// bad
const bad = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};
```

## 5. 当需要使用对象的多个属性时，请使用解构赋值

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;

  return `${firstName} ${lastName}`;
}

// better
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

## 6. 程序化生成字符串时，请使用模板字符串

```js
const test = "test";

// bad
const str = ["a", "b", test].join();

// bad
const str = "a" + "b" + test;

// good
const str = `ab${test}`;
```

## 7. 调用可变参数函数时建议使用展开运算符 ...

```js
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// good
new Date(...[2016, 8, 5]);
```

## 8. 如果函数体只包含一条没有副作用的返回表达式的语句，可以省略花括号并使用隐式的 return， 否则保留花括号并使用 return 语句

```js
// bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1`A string containing the ${nextNumber}.`;
});

// good
[(1, 2, 3)].map((number) => `A string containing the ${number}.`);

// good
[(1, 2, 3)].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[(1, 2, 3)].map((number, index) => ({
  index: number,
}));

// good
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => (bool = true));

// good
foo(() => {
  bool = true;
});
```

## 7. 调用可变参数函数时建议使用展开运算符 ...

```js
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// good
new Date(...[2016, 8, 5]);
```

## 9. 同个文件每个模块只允许 import 一次，有多个 import 请书写在一起

```js
// bad
import foo from "foo";
import { named1, named2 } from "foo";

// good
import foo, { named1, named2 } from "foo";
```

## 10. 不要使用 iterators，建议使用 JS 更高优先级的函数代替 for-in 或 for-of 循环，除非迫不得已

```js
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

// good
let sum = 0;
numbers.forEach((num) => (sum += num));

// better
const sum = numbers.reduce((total, num) => total + num, 0);
```
