import { timer } from './mock';

jest.setTimeout(300000)

// 使用 useFakeTimers 方法告知 jest 在下面的测试用例，如果用到了定时器异步函数的时候，都是用假的 timers 进行模拟
jest.useFakeTimers();

test('测试 timer', () => {
  // 因为是异步代码，所以要在结尾添加 done
  // 但是如果这种方法时间过长，显然没办法快速测试
  // timer(() => {
  //   expect(1).toBe(1);
  //   done();
  // })

  const fn = jest.fn();
  timer(fn);

  // 使用 runAllTimers 方法，让定时器立即执行，和 useFakeTimers 配合使用
  // 形参不要写 done，会有问题，测试用例一直处于执行的 loading 状态，原因是 jest 会认为你当前的测试用例还没有执行完，只有在最后的时候使用了 done() 才会执行结束
  // jest.runAllTimers();

  // 如果代码中有多个定时器嵌套，只想测试最外层的定时器，则需要使用 runOnlyPendingTimers 方法
  // 这个方法会只执行当前在队列中的函数，可以多次调用
  // jest.runOnlyPendingTimers();
  // jest.runOnlyPendingTimers();

  // advanceTimersByTime 方法，可以快进时间
  // 因为 timer 中，三秒后只执行了第一层，如果是六秒，则会执行两次 fn
  jest.advanceTimersByTime(3000);

  // 这样才能测试出函数被执行了几次
  expect(fn).toHaveBeenCalledTimes(1);
})