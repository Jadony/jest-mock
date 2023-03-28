/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-03-01 11:07:27
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-03-15 19:13:27
 * @FilePath: /auto-test-jest-learn/jest中的mock/__mocks__/mock.js
 * @Description:
 */

// 自定义异步请求
export const getData = () => {
  return new Promise((resolove, reject) => {
    resolove(`(function () { return '123' })()`)
  })
};