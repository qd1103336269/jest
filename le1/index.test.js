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

const { expect } = require('@jest/globals');
const { add, minus } = require('./index')

test('测试加法', () => {
  expect(add(3, 3)).toBe(6)
});

