/*
 * @Description: In User Settings Edie
 * @Author: your name
 * @Date: 2019-08-02 18:20:50
 * @LastEditTime: 2019-08-09 22:11:22
 * @LastEditors: Please set LastEditors
 */
import { humpToLink } from './string';

function createStyleSheet(name) {
  let style = document.getElementById('style-sheet-' + name);
  if (!style) {
    style = document.createElement('style');
    style.id = 'style-sheet-' + name;
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
  }
  return style.sheet;
}

export function addRule(selector, css, name) {
  var stylesheet = createStyleSheet(name);
  var propText =
    typeof css === 'string'
      ? css
      : Object.keys(css)
          .map(function(p) {
            return humpToLink(p) + ':' + (p === 'content' ? "'" + css[p] + "'" : css[p]);
          })
          .join(';');
  //console.log(propText);
  if (stylesheet.insertRule) {
    // 标准浏览器支持的
    stylesheet.insertRule(selector + '{' + propText + '}', stylesheet.cssRules.length);
  } else if (stylesheet.addRule) {
    // IE支持的
    stylesheet.addRule(selector, propText, stylesheet.cssRules.length);
  }
}
/**
 * @description: 获取鼠标或手指的位置
 * @param { event }
 * @return: [ object ]
 */
export function getClient(event) {
  if (event.touches && event.touches[0]) {
    return {
      x: event.touches[0].pageX || event.touches[0].clientX,
      y: event.touches[0].pageY || event.touches[0].clientY
    };
  } else {
    return {
      x: event.pageX || event.clientX,
      y: event.pageY || event.clientY
    };
  }
}
