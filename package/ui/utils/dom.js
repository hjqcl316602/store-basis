import { humpToLink } from './string';

function createStyleSheet() {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(''));
  document.head.appendChild(style);
  return style.sheet;
}

export function addRule(selector, css) {
  var stylesheet = createStyleSheet();
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
