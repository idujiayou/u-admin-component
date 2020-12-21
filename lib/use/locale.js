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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("ant-design-vue/es/locale/zh_CN");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "core-js/modules/es.array.index-of"
var es_array_index_of_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys"
var es_object_keys_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__(19);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace"
var es_string_replace_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/es.string.split"
var es_string_split_ = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// CONCATENATED MODULE: ./src/lang/zh_CN.js
/* harmony default export */ var zh_CN = ({
  uForm: {
    rule: '规则',
    save: '提交',
    cancel: '取消',
    tips: '提示',
    open: '展开',
    close: '收起',
    selectPlaceholder: '请选择'
  },
  uUpload: {
    upload: '上传',
    uploading: '上传中...',
    validator: {
      uploading: '图片尚未上传完成'
    }
  },
  uValidator: {
    required: '不能为空',
    isPassword: '密码格式xxxxx'
  },
  uEditor: {
    placeholder: '在这里输入...',
    imgTitle: '上传图片',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    title: '上传图片',
    validator: {
      uploading: '图片尚未上传完成'
    }
  },
  uTable: {
    refresh: '刷新'
  },
  uSearchBar: {
    searchBtnText: '查询',
    searchResetText: '重置'
  },
  uSearchBtn: {
    title: '高级搜索',
    selectedTitle: '当前搜索条件',
    empty: '暂无搜索条件'
  },
  uExportBtn: {
    text: '导出',
    loading: '导出中...',
    success: '导出成功',
    fail: '导出失败'
  },
  uFormBtn: {
    loading: '提交中...',
    success: '提交成功',
    fail: '提交失败'
  }
});
// EXTERNAL MODULE: external "ant-design-vue/es/locale/zh_CN"
var zh_CN_ = __webpack_require__(8);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/lang/index.js









var messages = {
  zhCN: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, zh_CN_default.a), zh_CN)
};
var lang_locale = messages;
function getLanguage(messages) {
  var chooseLanguage = localStorage.getItem('language');
  if (chooseLanguage) return chooseLanguage;
  var language = (navigator.language || navigator.browserLanguage).replaceAll('-', '');
  var locales = Object.keys(messages);

  for (var _i = 0, _locales = locales; _i < _locales.length; _i++) {
    var _locale = _locales[_i];

    if (language.indexOf(_locale) > -1) {
      return _locale;
    }
  }

  return 'zhCN';
}
function getPathKeys(key) {
  var path = key.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var keyArr = path.split('.');
  return keyArr;
}
function getLocaleValue(obj, path) {
  var empty = path;

  if (!Object(external_lodash_["isPlainObject"])(obj)) {
    return empty;
  }

  var paths = getPathKeys(path);
  var len = paths.length;

  if (len) {
    var last = obj;
    var i = 0;

    while (i < len) {
      var value = last[paths[i]];

      if (value === undefined) {
        return empty;
      }

      last = value;
      i++;
    }

    return last;
  } else {
    return empty;
  }
}
// CONCATENATED MODULE: ./src/use/locale.js


/* harmony default export */ var use_locale = __webpack_exports__["default"] = (function () {
  var _ref = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["inject"])('configProvider') || {},
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? {} : _ref$locale;

  var translate = function translate(key) {
    return getLocaleValue(locale, key);
  };

  return {
    locale: locale,
    translate: translate
  };
});

/***/ })
/******/ ]);