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