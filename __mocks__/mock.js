// 自定义异步请求
export const getData = () => {
  return new Promise((resolove, reject) => {
    resolove(`(function () { return '123' })()`)
  })
};