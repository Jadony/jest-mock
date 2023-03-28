// 使用 mock 方法引用 __mocks__ 下创建的 mock.js
jest.mock("./mock");
// 执行完上面的方法，会直接寻找 __mocks__ 下的getData，而不是正常的请求文件
// 由于 mock 中没有 getCode 方法，最好只 mock 异步函数，同步函数直接测试即可
// 可以不必须创建 __mocks__ 文件夹
import {
  getData,
  // getCode
} from "./mock";

// 需要使用下面的 requireActual 方法来引用非 mock 文件夹下的 getCode
const { getCode } = jest.requireActual("./mock");

// 高阶mock
// 此处直接使用 __mocks__ 目录下的 mock 文件中的函数
test("测试 getData", () => {
  return getData().then((data) => {
    expect(eval(data)).toEqual("123");
  });
});

// 不引用 mock 时
test("测试 getCode", () => {
  expect(getCode()).toBe("Zero");
});
