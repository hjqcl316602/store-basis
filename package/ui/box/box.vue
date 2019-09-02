<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 20:36:55
 * @LastEditTime: 2019-09-02 22:48:20
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  inlineBlock: false,
  inline: false,
  none: false,
  sizes: ["smaller", "small", "medium", "large", "larger"],
  padding: "",
  margin: "",
  height: "",
  width: "",
  borderRadius: "",
  backgroundColor: "",
  boxShadow: ""
};
const instance = {};
instance.name = "vui-box";
instance.props = {
  inlineBlock: {
    type: Boolean,
    default: config.inlineBlock
  },
  inline: {
    type: Boolean,
    default: config.inline
  },
  none: {
    type: Boolean,
    default: config.none
  },
  padding: {
    type: String,
    default: config.padding
  },
  paddingBottom: {
    type: String,
    default: config.padding
  },
  paddingTop: {
    type: String,
    default: config.padding
  },
  paddingLeft: {
    type: String,
    default: config.padding
  },
  paddingRight: {
    type: String,
    default: config.padding
  },
  margin: {
    type: String,
    default: config.margin
  },
  marginBottom: {
    type: String,
    default: config.margin
  },
  marginTop: {
    type: String,
    default: config.margin
  },
  marginLeft: {
    type: String,
    default: config.margin
  },
  marginRight: {
    type: String,
    default: config.margin
  },
  height: {
    type: String,
    default: config.height
  },
  minHeight: {
    type: String,
    default: config.height
  },
  maxHeight: {
    type: String,
    default: config.height
  },
  width: {
    type: String,
    default: config.width
  },
  minWidth: {
    type: String,
    default: config.width
  },
  maxWidth: {
    type: String,
    default: config.width
  },
  borderRadius: {
    type: String,
    default: config.borderRadius
  },
  borderTopLeftRadius: {
    type: String,
    default: config.borderRadius
  },
  borderTopRightRadius: {
    type: String,
    default: config.borderRadius
  },
  borderBottomLeftRadius: {
    type: String,
    default: config.borderRadius
  },
  borderBottomRightRadius: {
    type: String,
    default: config.borderRadius
  },
  backgroundColor: {
    type: String,
    default: config.backgroundColor
  },
  boxShadow: {
    type: String,
    default: config.boxShadow
  }
};
instance.data = function() {
  return {};
};
instance.computed = {
  styles() {
    let className = ["vui-box"];
    let style = {};
    if (this.inlineBlock) {
      className.push("vui-box--inline-block");
    }
    if (this.inline) {
      className.push("vui-box--inline");
    }
    if (this.none) {
      className.push("vui-box--none");
    }

    if (this.padding) {
      if (config.sizes.includes(this.padding)) {
        className.push("vui-box-padding--" + this.padding);
      } else {
        style["padding"] = this.padding;
      }
    }
    if (this.paddingTop) {
      if (config.sizes.includes(this.paddingTop)) {
        className.push("vui-box-padding-top--" + this.paddingTop);
      } else {
        style["padding-top"] = this.paddingTop;
      }
    }
    if (this.paddingBottom) {
      if (config.sizes.includes(this.paddingBottom)) {
        className.push("vui-box-padding-bottom--" + this.paddingBottom);
      } else {
        style["padding-bottom"] = this.paddingBottom;
      }
    }
    if (this.paddingLeft) {
      if (config.sizes.includes(this.paddingLeft)) {
        className.push("vui-box-padding-left--" + this.paddingLeft);
      } else {
        style["padding-left"] = this.paddingLeft;
      }
    }
    if (this.paddingRight) {
      if (config.sizes.includes(this.paddingRight)) {
        className.push("vui-box-padding-right--" + this.paddingRight);
      } else {
        style["padding-right"] = this.paddingRight;
      }
    }
    if (this.margin) {
      if (config.sizes.includes(this.margin)) {
        className.push("vui-box-margin--" + this.margin);
      } else {
        style["margin"] = this.margin;
      }
    }
    if (this.marginTop) {
      if (config.sizes.includes(this.marginTop)) {
        className.push("vui-box-margin-top--" + this.marginTop);
      } else {
        style["margin-top"] = this.marginTop;
      }
    }
    if (this.marginBottom) {
      if (config.sizes.includes(this.marginBottom)) {
        className.push("vui-box-margin-bottom--" + this.marginBottom);
      } else {
        style["margin-bottom"] = this.marginBottom;
      }
    }
    if (this.marginLeft) {
      if (config.sizes.includes(this.marginLeft)) {
        className.push("vui-box-margin-left--" + this.marginLeft);
      } else {
        style["margin-left"] = this.marginLeft;
      }
    }
    if (this.marginRight) {
      if (config.sizes.includes(this.marginRight)) {
        className.push("vui-box-margin-right--" + this.marginRight);
      } else {
        style["margin-right"] = this.marginRight;
      }
    }

    if (this.width) {
      if (config.sizes.includes(this.width)) {
        className.push("vui-box-width--" + this.width);
      } else {
        style["width"] = this.width;
      }
    }
    if (this.minWidth) {
      if (config.sizes.includes(this.minWidth)) {
        className.push("vui-box-min-width--" + this.minWidth);
      } else {
        style["min-width"] = this.minWidth;
      }
    }
    if (this.maxWidth) {
      if (config.sizes.includes(this.maxWidth)) {
        className.push("vui-box-max-width--" + this.maxWidth);
      } else {
        style["max-width"] = this.maxWidth;
      }
    }

    if (this.height) {
      if (config.sizes.includes(this.height)) {
        className.push("vui-box-height--" + this.height);
      } else {
        style["height"] = this.height;
      }
    }
    if (this.minHeight) {
      if (config.sizes.includes(this.minHeight)) {
        className.push("vui-box-min-height--" + this.minHeight);
      } else {
        style["min-height"] = this.minHeight;
      }
    }
    if (this.maxHeight) {
      if (config.sizes.includes(this.maxHeight)) {
        className.push("vui-box-max-height--" + this.maxHeight);
      } else {
        style["max-height"] = this.maxHeight;
      }
    }
    let borderRadiusTypes = [
      "smaller",
      "small",
      "medium",
      "large",
      "larger",
      "round"
    ];
    if (this.borderRadius) {
      if (borderRadiusTypes.includes(this.borderRadius)) {
        className.push("vui-box-border-radius--" + this.borderRadius);
      } else {
        style["border-radius"] = this.borderRadius;
      }
    }
    if (this.borderTopLeftRadius) {
      if (borderRadiusTypes.includes(this.borderTopLeftRadius)) {
        className.push(
          "vui-box-border-top-left-radius--" + this.borderTopLeftRadius
        );
      } else {
        style["border-top-left-radius"] = this.borderTopLeftRadius;
      }
    }
    if (this.borderTopRightRadius) {
      if (borderRadiusTypes.includes(this.borderTopRightRadius)) {
        className.push(
          "vui-box-border-top-right-radius--" + this.borderTopRightRadius
        );
      } else {
        style["border-top-right-radius"] = this.borderTopRightRadius;
      }
    }
    if (this.borderBottomLeftRadius) {
      if (borderRadiusTypes.includes(this.borderBottomLeftRadius)) {
        className.push(
          "vui-box-border-bottom-left-radius--" + this.borderBottomLeftRadius
        );
      } else {
        style["border-bottom-left-radius"] = this.borderBottomLeftRadius;
      }
    }
    if (this.borderBottomRightRadius) {
      if (borderRadiusTypes.includes(this.borderBottomRightRadius)) {
        className.push(
          "vui-box-border-bottom-right-radius--" + this.borderBottomRightRadius
        );
      } else {
        style["border-bottom-right-radius"] = this.borderBottomRightRadius;
      }
    }

    let backgroundColorTypes = [
      "default",
      "primary",
      "success",
      "warning",
      "danger",
      "white",
      "black"
    ];

    if (this.backgroundColor) {
      if (backgroundColorTypes.includes(this.backgroundColor)) {
        className.push("vui-box-background-color--" + this.backgroundColor);
      } else {
        style["background-color"] = this.backgroundColor;
      }
    }

    let boxShadowTypes = ["around", "top", "bottom", "left", "right"];
    if (this.boxShadow) {
      if (boxShadowTypes.includes(this.boxShadow)) {
        className.push("vui-box-shadow--" + this.boxShadow);
      } else {
        style["box-shadow"] = this.boxShadow;
      }
    }
    return {
      className,
      style
    };
  }
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
instance.watch = {};
export default instance;
</script>

<template>
  <div :class="styles.className" :style="styles.style">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>