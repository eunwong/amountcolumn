(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["amount-column"] = factory();
	else
		root["amount-column"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".amountBorder[data-v-1019a229]{border:1px solid #ccc}.amount[data-v-1019a229]{width:100%;height:100%;display:flex;flex-direction:column;position:relative}.amount .inputHidden[data-v-1019a229]{width:0;height:0;position:absolute;opacity:0;padding:0;border:0}.amount .header[data-v-1019a229]{flex-grow:1;font-size:14px;flex-shrink:0;flex-basis:0}.amount .header+.content[data-v-1019a229]{border-top:1px solid #ccc}.amount .content[data-v-1019a229]{flex-grow:2;flex-shrink:0;flex-basis:0}.amount .content .division[data-v-1019a229]{height:100%;line-height:100%}.division[data-v-1019a229]{width:100%;height:100%;display:flex;justify-content:space-between}.division li[data-v-1019a229]{flex-grow:1;position:relative;display:flex;justify-content:center;align-items:center;width:0;flex-shrink:0}.division li+li[data-v-1019a229]:before{position:absolute;content:\"\";display:block;height:calc(100% + var(--yaxis));width:0;border-left:1px solid #ccc;left:0;top:50%;transform:translateY(-50%)}.division li.blue[data-v-1019a229]:before{border-color:blue}.division li.red[data-v-1019a229]:before{border-color:red}.division li span[data-v-1019a229]{position:relative}.division li span.cursor[data-v-1019a229]:after{position:absolute;width:0;height:1.5em;border-left:2px solid #555;content:\"\";display:block;animation:blink-1019a229 1s step-start infinite;right:-5px;top:50%;transform:translateY(-50%)}@keyframes blink-1019a229{0%,to{border-width:0}50%{border-width:2px}}ul[data-v-1019a229]{list-style:none;margin:0;padding:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 962:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(934);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("68bdbe08", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/amount-column/src/index.vue?vue&type=template&id=1019a229&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"amount",class:{amountBorder:_vm.border},style:({'--yaxis':_vm.yaxis+'px'})},[(_vm.head)?_c('div',{staticClass:"header"},[_c('ul',{staticClass:"division"},_vm._l((_vm.unit),function(item,index){return _c('li',{key:index,class:_vm.lineColor[index]},[_vm._v(_vm._s(item))])}),0)]):_vm._e(),(_vm.input)?_c('div',{staticClass:"content"},[_c('ul',{staticClass:"division"},_vm._l((_vm.formatMoney),function(item,index){return _c('li',{key:index,class:_vm.lineColor[index],on:{"click":function($event){return _vm.focusBlinkhandler(index)}}},[_c('span',{staticClass:"cursorInit",class:{cursor:(_vm.cursor === index)},staticStyle:{"cursor":"text"}},[_vm._v(_vm._s(item))])])}),0)]):_vm._e(),_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.money),expression:"money",modifiers:{"trim":true}}],ref:"input",staticClass:"inputHidden",attrs:{"type":"text"},domProps:{"value":(_vm.money)},on:{"blur":[_vm.inputBlurHandler,function($event){return _vm.$forceUpdate()}],"keyup":_vm.cursorKeyupHandler,"input":[function($event){if($event.target.composing)return;_vm.money=$event.target.value.trim()},_vm.cursorInputHandler]}})])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/amount-column/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'AmountColumn',
  data() {
    return {
      unit: ['亿', '千', '百', '十', '万', '千', '百', '十', '元', '角', '分'],
      lineColor: {
        3: 'blue',
        6: 'blue',
        9: 'red'
      },
      money: '',
      formatMoney: '           ',
      cursor: ''
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    input: {
      type: Boolean,
      default: true
    },
    head: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    yaxis: {
      type: [String, Number],
      default: 0
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        let i = parseFloat(val);
        if (isNaN(i)) {
          i = '';
        } else {
          i = i.toFixed(2);
        }
        this.money = i;
        this.formatMoneyHandler();
      }
    }
  },
  methods: {
    inputBlurHandler() {
      const m = this.money;
      if (!m || m.trim() === '.') {
        this.cursor = '';
        this.money = '';
        return;
      }
      let num = parseFloat(m);
      if (isNaN(num)) {
        this.money = '0.00';
      } else {
        this.money = num.toFixed(2);
      }
      this.$emit('change', parseFloat(this.money));
      this.formatMoneyHandlerAndSetBlink();
      this.cursor = '';
    },
    /**补全小数位 */
    formatDecimalEvent(num) {
      let endNum = 0;
      if (num.lastIndexOf('.') !== -1) {
        endNum = num.length - num.lastIndexOf('.') - 1;
      } else {
        num += '.';
      }
      for (let i = 0; i < 2 - endNum; i++) {
        num = num + ' ';
      }
      return num;
    },
    formatMoneyHandlerAndSetBlink() {
      let val = this.money;
      let num = this.formatDecimalEvent(val);
      const input = this.$refs.input;
      const i = input.selectionStart;
      let f = this.insertStr(num, i, '|');
      const isJiao = f.includes('.|');
      f = f.replace('.', '');
      f = this.fixZeroStart(f, ' ', this.unit.length + 1);
      let len = 1;
      if (isJiao) {
        len = 0;
      }
      let blink = f.indexOf('|') - len;
      f = f.replace('|', '');
      this.cursor = blink;
      this.formatMoney = f;
    },
    formatMoneyHandler() {
      let val = this.money;
      let num = this.formatDecimalEvent(val);
      let f = this.fixZeroStart(num, ' ', this.unit.length + 1);
      f = f.replace('.', '');
      this.formatMoney = f;
    },
    cursorInputHandler() {
      let m = this.money;
      let s = m.split('.');
      const input = this.$refs.input;
      let i = input.selectionStart;
      let reBlink = false;
      if (!m.includes('.')) {
        reBlink = true;
      }
      const z = s[0] || '';
      const x = s[1] || '';
      this.money = z.substr(-9) + '.' + x.slice(0, 2);
      this.$nextTick(() => {
        if (z.length > 9) {
          i--;
          input.setSelectionRange(i, i);
        }
        if (reBlink) {
          input.setSelectionRange(i, i);
        }
        this.formatMoneyHandlerAndSetBlink();
      });
    },
    fixZeroStart(str, c, n) {
      return (Array(n).join(c) + str).slice(-n);
    },
    cursorKeyupHandler(e) {
      if (['Backspace', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        const a = this.$refs.input;
        let i = a.selectionStart;
        let num = this.formatDecimalEvent(this.money);
        let len = num.length;
        let f = this.insertStr(this.money, i, '|');
        if (
          (e.code === 'ArrowLeft' || e.code === 'Backspace') &&
          f.includes('.|')
        ) {
          i--;
        } else if (e.code === 'ArrowRight' && f.includes('.|')) {
          i++;
        }
        a.setSelectionRange(i, i);
        i = len - i;
        i > 1 && i--;
        this.cursor = 10 - i;
      }
    },
    insertStr(soure, start, newStr) {
      return soure.slice(0, start) + newStr + soure.slice(start);
    },
    focusBlinkhandler(index) {
      index = 10 - index;
      let len = this.money.length;
      if (index > 1) {
        index++;
      }
      index = len - index;
      if (index < 0) {
        index = 0;
      }
      let a = this.$refs.input;
      a.focus();
      a.setSelectionRange(index, index);
      this.formatMoneyHandlerAndSetBlink();
    }
  }
});

;// CONCATENATED MODULE: ./packages/amount-column/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var amount_column_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/amount-column/src/index.vue?vue&type=style&index=0&id=1019a229&prod&lang=css&scoped=true&
var srcvue_type_style_index_0_id_1019a229_prod_lang_css_scoped_true_ = __webpack_require__(962);
;// CONCATENATED MODULE: ./packages/amount-column/src/index.vue?vue&type=style&index=0&id=1019a229&prod&lang=css&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/amount-column/src/index.vue



;


/* normalize component */

var component = normalizeComponent(
  amount_column_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1019a229",
  null
  
)

/* harmony default export */ var amount_column_src = (component.exports);
;// CONCATENATED MODULE: ./packages/amount-column/index.js

// 为组件提供install 安装方法，供按需引入
amount_column_src.install = function (Vue) {
    Vue.component(amount_column_src.name, amount_column_src)
}

// 默认导出组件
/* harmony default export */ var amount_column = (amount_column_src);
;// CONCATENATED MODULE: ./packages/index.js
 // 引入封装好的组件
// 存储组件列表
// const components = [AmountColumn]
// // 定义install 安装方法, 接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
// const install = function (Vue) {
//     // 判断是否安装
//     if (install.installed) return;
//     //遍历注册去全局组件
//     components.forEach(component => {
//         Vue.component(component.name, component)
//     });
// }
// //判断是否直接引入文件
// if (typeof window !== "undefined" && window.Vue) {
//     install(window.Vue)
// }

// 默认导出组件
/* harmony default export */ var packages_0 = (amount_column);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=amount-column.umd.js.map