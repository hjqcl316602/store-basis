/*
 * @Description: In User Settings Edie
 * @Author: your name
 * @Date: 2019-08-02 18:20:50
 * @LastEditTime: 2019-08-11 15:07:18
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
 * @description: 获取元素的宽度
 * @param { ele } 元素
 * @return:
 */
export function getWidth(ele) {
  return ele.getBoundingClientRect().width;
}
/**
 * @description: 获取鼠标或手指的X位置
 * @param { event }
 * @return: [ object ]
 */
export function getClientX(event) {
  if (event.touches && event.touches[0]) {
    return event.touches[0].pageX || event.touches[0].clientX;
  } else {
    return event.pageX || event.clientX;
  }
}

/**
 * @description: 获取指定的class类
 * @param {  callback } [ function ]
 * @return:
 */

export function getClassRules(callback) {
  let styles = document.getElementsByTagName('style');
  let res = [];
  for (let n = 0; n < styles.length; n++) {
    let temp = styles[n];
    let rules = temp.sheet.rules;
    if (rules.length > 0) {
      for (let k = 0; k < rules.length; k++) {
        let text = rules[k]['selectorText'];
        if (callback.call(this, text || '')) {
          res.push(text);
        }
      }
    }
  }
  return res;
}
