import axios from 'axios';
import { runFn, getData } from './mock';

jest.mock('axios');

test('测试 runFn', () => {
  // 通过 jest 的 fn 方法创建一个模拟函数，如果不传参数会默认生成一个函数
  // 1. 通过 func.mock 获取想要的值
  // 2. 可以自定义返回值
  // 3. 改变内部函数的实现，模拟接口请求，不请求代码中的接口
  const func = jest.fn( () => 456 );

  // 还可以使用 mockReturnValueOnce 方法进行控制输出，两种方法都使用时会覆盖 fn 方法中的返回值，支持链式调用
  // 将 Once 去掉与 fn 方法一样，多次会返回相同的值
  func.mockReturnValueOnce('zoo')

  // 返回 this 方法 mockReturnThis
  func.mockReturnThis();

  // 还可以使用 mockImplementation 方法书写函数内部，可以在函数内部写逻辑，与 jest.fn 方法的参数一样，还可以填加 Once
  // func.mockImplementation(() => {
  //   return '123';
  // })

  // 执行被测函数
  runFn(func);
  runFn(func);

  // 通过 toBeCalled 判断函数是否被调用
  expect(func).toBeCalled();

  // 判断当前函数调用了几次 被调用了两次
  expect(func.mock.calls.length).toBe(2);

  // 判断参数是什么
  expect(func.mock.calls[0]).toEqual([123]);

  // 判断每次调用的时候参数是什么
  expect(func).toBeCalledWith(123);

  // 判断返回值
  expect(func.mock.results[0].value).toBe('zoo');

  // console.log(func.mock)
  // 因为被调用了两次，所以长度都是 2
  // {
  //   calls: [ [123], [123] ],  // 每次的调用情况，传递的参数是什么
  //   instances: [ undefined, undefined ],  // 每次调用的 this 指向，被调用了几次
  //   invocationCallOrder: [ 1, 2 ],  // 执行顺序，可能会传入同一个或多个方法中，需要记录一下顺序
  //   results: [  // mock函数每次执行后的返回值
  //     { type: 'return', value: 456 },
  //     { type: 'return', value: 456 }
  //   ]
  // }
})

test('测试 getData', async () => {
  // 模拟请求成功结果
  // 去掉 Once 也可以使用，不支持链式调用
  axios.get.mockResolvedValueOnce({ data: 'zoo' })
  await getData().then((data) => {
    expect(data).toBe('zoo');
  })
})