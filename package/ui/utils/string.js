/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-02 18:23:33
 * @LastEditTime: 2019-08-10 09:06:47
 * @LastEditors: Please set LastEditors
 */
export function humpToLink(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return string.replace(/([A-Z])/g, function(a, b, c) {
    return '-' + b.toLowerCase();
  });
}

/**
 * @description: 判断字符串是否是一指定的字符串开始
 * @param { string }
 * @param { target}
 * @return: [ boolean ]
 */
export function isStart(string, target) {
  if (typeof string !== 'string') {
    throw new Error('The first argument must be string.');
  }
  if (typeof target !== 'string') {
    throw new Error('The second argument must be string.');
  }
  return string.slice(0, target.length) === target;
}
