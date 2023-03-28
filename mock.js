/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-02-28 15:37:36
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-03-15 19:23:07
 * @FilePath: /auto-test-jest-learn/6.jest中的mock/mock.js
 * @Description: 
 */
import axios from 'axios'

export const runFn = (fn) => {
  fn(123);
}

export const getData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json').then((res) => {
    return res.data;
  })
}

export const getCode = () => {
  return 'Zero';
}

export const timer = (fn) => {
  setTimeout(() => {
    fn();
    setTimeout(() => {
      fn();
    }, 3000)
  }, 3000)
}