// function expect(result) {
//   return {
//     toBe: function(actual) {
//       if(result !== actual) {
//         throw new Error(`预期值和计算值不相等,预期是${actual}, 结果是${result}`)
//       }
//     }
//   }
// }

// function test(desc, cb) {
//   try {
//     cb();
//     console.log(`${desc}, 通过测试`);
//   } catch (error) {
//     console.log(`${desc}, 没有通过测试, ${error}`);
//   }
// }


// test("测试加法", () => {
//   expect(add(3, 3)).toBe(6);
// })

// expect(add(3, 3)).toBe(6);
// expect(minus(3, 3)).toBe(9);

const {
  expect
} = require('@jest/globals');
// const { add, minus } = require('./index');
import {
  add,
  minus,
  mulit
} from './index';

const a = {
  name: 1
}

let b = null;
let c = undefined;

test('测试加法', () => {
  expect(add(3, 3)).toBe(6);
});
test('测试减法', () => {
  expect(minus(3, 3)).toBe(0);
});
test('测试乘法', () => {
  expect(mulit(3, 3)).toBe(9);
});
test('测试乘法', () => {
  expect(mulit(3, 35)).toBe(105);
});
// test('测试是否相等', () => {
//   expect(aa).toBe({name: 1})
// toBe 检查的是引用
// });
test('测试是否相等', () => {
  // toEqual检查的是内容
  expect(a).toEqual({
    name: 1
  });
});

// 是否为空
test('测试是否是null', () => {
  expect(b).toBeNull();
});

// test('测试undefined和null', () => {
//   expect(c).toBeNull()
// });

// 是否为undefined
test('测试undefined', () => {
  expect(c).toBeUndefined();
});

// 是否定义过
test('测试defined', () => {
  expect(a).toBeDefined()
});

// 是否为真
test('测试tobetruthy', () => {
  expect(" ").toBeTruthy();
});

// 是否为假
test('测试toBeFalsy', () => {
  expect("").toBeFalsy();
});

// not匹配器
test('测试not ', () => {
  expect(" ").not.toBeFalsy();
});

//数字相关的匹配器
test('测试toBeGreaterThan ', () => {
  const a = 9;
  expect(a).toBeGreaterThan(8);
});


test('测试toBeLessThan ', () => {
  const a = 5;
  expect(a).toBeLessThan(8);
});

test('测试toBeGreaterThanOrEqual', () => {
  const a = 5;
  expect(a).toBeGreaterThanOrEqual(5);
});

test('测试toBeCloseTo', () => {
  const firstNumber = 0.1;
  const lastNumber = 0.2;
  //浮点数不准确
  expect(firstNumber + lastNumber).toBeCloseTo(0.3);
});

// string
test('测试toMatch', () => {
  const str = "www.baidu.com"
  expect(str).toMatch(/baidu/);
});

// array 匹配器
test('测试toContain', () => {
  const arr = ['dell', 'ausa', 'huawei']
  const data = new Set(arr)
  expect(data).toContain('ausa');
});


