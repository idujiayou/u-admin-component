module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/locale");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons-vue");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/config");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.splice");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find-index");

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(30);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n/* you can make up upload button and sample style by using stylesheets */\n.ant-upload-select-picture-card i {\n  font-size: 32px;\n  color: #999;\n}\n.ant-upload-select-picture-card .ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(5);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/u-upload/src/index.vue?vue&type=template&id=3763b722


const _hoisted_1 = {
  class: "clearfix",
  style: {"line-height":"0"}
}
const _hoisted_2 = { key: 0 }
const _hoisted_3 = { class: "ant-upload-text" }
const _hoisted_4 = { class: "ant-upload-drag-icon" }
const _hoisted_5 = /*#__PURE__*/Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("p", { class: "ant-upload-text" }, " 点击或拖拽到此区域上传 ", -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_plus_outlined = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("plus-outlined")
  const _component_a_upload = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-upload")
  const _component_inbox_outlined = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("inbox-outlined")
  const _component_a_upload_dragger = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-upload-dragger")
  const _component_u_dialog = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-dialog")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_1, [
    ($props.listType === 'picture-card')
      ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_a_upload, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({
          key: 0,
          ref: "upload",
          "list-type": "picture-card",
          "file-list": $data.fileList,
          onPreview: $options.handlePreview,
          remove: $options.removeChange
        }, $options.props2), {
          default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
            ($data.fileList.length < $props.limit && !$options.isShow)
              ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_2, [
                  Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_plus_outlined),
                  Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_3, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($setup.translate('uUpload.upload')), 1 /* TEXT */)
                ]))
              : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)
          ]),
          _: 1
        }, 16 /* FULL_PROPS */, ["file-list", "onPreview", "remove"]))
      : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_a_upload_dragger, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({
          key: 1,
          name: "file",
          ref: "upload",
          multiple: $props.multiple,
          "file-list": $data.fileList,
          remove: $options.removeChange
        }, $options.props2), {
          default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
            (!$options.isShow)
              ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], { key: 0 }, [
                  Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("p", _hoisted_4, [
                    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_inbox_outlined)
                  ]),
                  _hoisted_5
                ], 64 /* STABLE_FRAGMENT */))
              : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)
          ]),
          _: 1
        }, 16 /* FULL_PROPS */, ["multiple", "file-list", "remove"])),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_u_dialog, {
      visible: $data.previewVisible,
      footer: null,
      onCancel: $options.handleCancel
    }, {
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        ($data.previewImage)
          ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("img", {
              key: 0,
              style: {"width":"100%"},
              src: $data.previewImage
            }, null, 8 /* PROPS */, ["src"]))
          : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)
      ]),
      _: 1
    }, 8 /* PROPS */, ["visible", "onCancel"])
  ]))
}
// CONCATENATED MODULE: ./src/components/u-upload/src/index.vue?vue&type=template&id=3763b722

// EXTERNAL MODULE: external "core-js/modules/es.array.find"
var es_array_find_ = __webpack_require__(52);

// EXTERNAL MODULE: external "core-js/modules/es.array.find-index"
var es_array_find_index_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.array.splice"
var es_array_splice_ = __webpack_require__(27);

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor"
var es_number_constructor_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__(10);

// EXTERNAL MODULE: external "core-js/modules/es.string.split"
var es_string_split_ = __webpack_require__(11);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(7);

// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// EXTERNAL MODULE: external "@ant-design/icons-vue"
var icons_vue_ = __webpack_require__(4);

// EXTERNAL MODULE: external "u-admin-component/lib/use/locale"
var locale_ = __webpack_require__(3);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "u-admin-component/lib/config"
var config_ = __webpack_require__(12);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/u-upload/src/index.vue?vue&type=script&lang=js


















function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'uUpload',
  props: {
    value: [Array, String],
    multiple: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    action: String,
    listType: {
      type: String,
      default: 'picture-card'
    },
    mode: {
      type: String,
      default: 'edit' // 'show'

    }
  },
  components: {
    PlusOutlined: icons_vue_["PlusOutlined"],
    InboxOutlined: icons_vue_["InboxOutlined"]
  },
  setup: function setup() {
    var _localeUse = locale_default()(),
        translate = _localeUse.translate;

    var _ref = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["inject"])('uConfig') || config_default.a,
        uploadImgConfig = _ref.upload;

    return {
      translate: translate,
      uploadImgConfig: uploadImgConfig
    };
  },
  data: function data() {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: []
    };
  },
  computed: {
    isShow: function isShow() {
      return this.mode === 'show';
    },
    props2: function props2() {
      var $attrs = this.$attrs,
          handleChange = this.handleChange,
          isShow = this.isShow;
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, $attrs), {}, {
        action: $attrs.action || this.uploadImgConfig.action,
        disabled: isShow ? true : $attrs.disabled,
        onChange: function onChange(evt) {
          if (Object(external_lodash_["isFunction"])($attrs.onChange)) {
            $attrs.onChange(evt);
          }

          handleChange(evt);
        }
      });
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        var _this = this;

        if (Array.isArray(val)) {
          var fileList = [];
          var $fileList = this.fileList;
          val.forEach(function (item) {
            var uid = Math.random();
            var img = $fileList.find(function (obj) {
              var index = fileList.findIndex(function (v) {
                return v.uid === obj.uid;
              });
              return index === -1 && item === _this.getUrl(obj);
            });

            if (!img) {
              var arr = item.split('/');
              img = {
                uid: uid,
                name: arr[arr.length - 1]
              };
            }

            fileList.push(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, img), {}, {
              status: 'done',
              url: item
            }));
          });
          var flag = false; // 是否列表是否已经修改 防止重复修改

          if (fileList.length === $fileList.length) {
            $fileList.forEach(function (item, index) {
              if (item.uid !== fileList[index]) {
                flag = true;
              }
            });
          } else {
            flag = true;
          }

          if (flag) {
            this.fileList = fileList;
          }
        }
      }
    }
  },
  methods: {
    isDone: function isDone() {
      var flag = true;
      this.fileList.find(function (obj) {
        if (obj.status === 'uploading') {
          flag = false;
        }
      });
      return flag;
    },
    handleCancel: function handleCancel() {
      this.previewVisible = false;
    },
    removeChange: function removeChange() {
      var _this2 = this;

      setTimeout(function () {
        _this2.uploadChange();
      });
    },
    handlePreview: function handlePreview(file) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!file.url && !file.preview)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return getBase64(file.originFileObj);

              case 3:
                file.preview = _context.sent;

              case 4:
                _this3.previewImage = file.url || file.preview;
                _this3.previewVisible = true;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    isSuccesss: function isSuccesss(file) {
      var uploadImgConfig = this.uploadImgConfig;
      return uploadImgConfig && Object(external_lodash_["isFunction"])(uploadImgConfig.requestFormat) && uploadImgConfig.requestFormat(file) || file.response && file.response.code + '' === '200';
    },
    getUrl: function getUrl(file) {
      var uploadImgConfig = this.uploadImgConfig;
      return uploadImgConfig && Object(external_lodash_["isFunction"])(uploadImgConfig.getUrl) && uploadImgConfig.getUrl(file) || file.response && file.response.data && file.response.data.url || file.url;
    },
    uploadChange: function uploadChange() {
      var fileList = this.fileList,
          getUrl = this.getUrl;
      var arr = [];
      fileList.forEach(function (item) {
        arr.push(getUrl(item));
      });
      this.$emit('upload-change', this.limit > 1 ? arr : arr + '');
    },
    handleChange: function handleChange(_ref2) {
      var fileList = _ref2.fileList,
          file = _ref2.file;
      var isSuccesss = this.isSuccesss;

      if (file.status === 'error') {
        var index = this.fileList.findIndex(function (v) {
          return v.uid === file.uid;
        });

        if (index !== -1) {
          this.fileList.splice(index, 1);
        }

        return;
      }

      this.fileList = fileList;

      if (file.status === 'done' && isSuccesss(file)) {
        this.uploadChange();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/u-upload/src/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(22);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist??ref--1!./src/components/u-upload/src/index.vue?vue&type=style&index=0&id=3763b722&lang=css
var srcvue_type_style_index_0_id_3763b722_lang_css = __webpack_require__(38);
var srcvue_type_style_index_0_id_3763b722_lang_css_default = /*#__PURE__*/__webpack_require__.n(srcvue_type_style_index_0_id_3763b722_lang_css);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist??ref--1!./src/components/u-upload/src/index.vue?vue&type=style&index=0&id=3763b722&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(srcvue_type_style_index_0_id_3763b722_lang_css_default.a, options);



/* harmony default export */ var u_upload_srcvue_type_style_index_0_id_3763b722_lang_css = (srcvue_type_style_index_0_id_3763b722_lang_css_default.a.locals || {});
// CONCATENATED MODULE: ./src/components/u-upload/src/index.vue?vue&type=style&index=0&id=3763b722&lang=css

// CONCATENATED MODULE: ./src/components/u-upload/src/index.vue





srcvue_type_script_lang_js.render = render

/* harmony default export */ var src = (srcvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/u-upload/index.js



src.install = function (app) {
  app.component(src.name, src);
};

/* harmony default export */ var u_upload = __webpack_exports__["default"] = (src);

/***/ })
/******/ ]);