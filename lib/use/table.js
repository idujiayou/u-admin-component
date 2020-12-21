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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function useReactiveRef(val) {
  var prevEle = val || null;
  var eleRef = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(prevEle);

  function setEle(ele) {
    if (prevEle === ele) return;
    prevEle = ele;
    eleRef.value = prevEle;
  }

  return [eleRef, setEle];
}

/* harmony default export */ __webpack_exports__["default"] = (useReactiveRef);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/unsupportedIterableToArray");

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
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/arrayWithoutHoles");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/iterableToArray");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/nonIterableSpread");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/arrayWithHoles");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/iterableToArrayLimit");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/nonIterableRest");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find");

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(24);

// EXTERNAL MODULE: external "core-js/modules/es.array.find"
var es_array_find_ = __webpack_require__(25);

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/arrayWithoutHoles"
var arrayWithoutHoles_ = __webpack_require__(10);
var arrayWithoutHoles_default = /*#__PURE__*/__webpack_require__.n(arrayWithoutHoles_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/iterableToArray"
var iterableToArray_ = __webpack_require__(11);
var iterableToArray_default = /*#__PURE__*/__webpack_require__.n(iterableToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/unsupportedIterableToArray"
var unsupportedIterableToArray_ = __webpack_require__(5);
var unsupportedIterableToArray_default = /*#__PURE__*/__webpack_require__.n(unsupportedIterableToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/nonIterableSpread"
var nonIterableSpread_ = __webpack_require__(12);
var nonIterableSpread_default = /*#__PURE__*/__webpack_require__.n(nonIterableSpread_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return arrayWithoutHoles_default()(arr) || iterableToArray_default()(arr) || unsupportedIterableToArray_default()(arr) || nonIterableSpread_default()();
}
// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/arrayWithHoles"
var arrayWithHoles_ = __webpack_require__(13);
var arrayWithHoles_default = /*#__PURE__*/__webpack_require__.n(arrayWithHoles_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/iterableToArrayLimit"
var iterableToArrayLimit_ = __webpack_require__(14);
var iterableToArrayLimit_default = /*#__PURE__*/__webpack_require__.n(iterableToArrayLimit_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/nonIterableRest"
var nonIterableRest_ = __webpack_require__(15);
var nonIterableRest_default = /*#__PURE__*/__webpack_require__.n(nonIterableRest_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return arrayWithHoles_default()(arr) || iterableToArrayLimit_default()(arr, i) || unsupportedIterableToArray_default()(arr, i) || nonIterableRest_default()();
}
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/use/useReactiveRef.js
var useReactiveRef = __webpack_require__(3);

// CONCATENATED MODULE: ./src/use/table.js










/* harmony default export */ var table = __webpack_exports__["default"] = (function (requestRowsFn) {
  var rowKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';

  var setPageValue = function setPageValue(key, val) {
    pagination.value[key] = val;
  };

  var _useReactiveRef = Object(useReactiveRef["default"])(false),
      _useReactiveRef2 = _slicedToArray(_useReactiveRef, 2),
      pageLoading = _useReactiveRef2[0],
      setLoading = _useReactiveRef2[1];

  var _useReactiveRef3 = Object(useReactiveRef["default"])([]),
      _useReactiveRef4 = _slicedToArray(_useReactiveRef3, 2),
      tableData = _useReactiveRef4[0],
      setTableData = _useReactiveRef4[1];

  var _useReactiveRef5 = Object(useReactiveRef["default"])({}),
      _useReactiveRef6 = _slicedToArray(_useReactiveRef5, 2),
      pageSearchParams = _useReactiveRef6[0],
      setPageSearchParams = _useReactiveRef6[1];

  var _useReactiveRef7 = Object(useReactiveRef["default"])({}),
      _useReactiveRef8 = _slicedToArray(_useReactiveRef7, 1),
      pageParams = _useReactiveRef8[0];

  var _useReactiveRef9 = Object(useReactiveRef["default"])([]),
      _useReactiveRef10 = _slicedToArray(_useReactiveRef9, 2),
      selectedRowKeys = _useReactiveRef10[0],
      setSelectedRowKeys = _useReactiveRef10[1];

  var _useReactiveRef11 = Object(useReactiveRef["default"])([]),
      _useReactiveRef12 = _slicedToArray(_useReactiveRef11, 2),
      selectedRows = _useReactiveRef12[0],
      setSelectedRows = _useReactiveRef12[1];

  var onSelectChange = function onSelectChange(keys, rows) {
    setSelectedRowKeys(keys);
    setSelectedRows(concatSelectedRow(rows));
  };

  var concatSelectedRow = function concatSelectedRow(rows) {
    var arr = Object(external_lodash_["uniqBy"])([].concat(_toConsumableArray(selectedRows.value), _toConsumableArray(rows)), rowKey);
    var temp = [];
    selectedRowKeys.value.forEach(function (item) {
      var obj = arr.find(function (v) {
        return item === v[rowKey];
      });

      if (obj) {
        temp.push(obj);
      }
    });
    return temp;
  };

  var clearSelection = function clearSelection() {
    setSelectedRowKeys([]);
    setSelectedRows([]);
  };

  var pagination = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["ref"])({
    total: 0,
    pageSize: 10,
    current: 1,
    onChange: function onChange(page) {
      setPageValue('current', page);
      loadPage();
    },
    onShowSizeChange: function onShowSizeChange(current, size) {
      setPageValue('current', current);
      setPageValue('pageSize', size);
      loadPage();
    }
  });

  var loadPage = function loadPage() {
    var pageQuery = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
      page: pagination.value.current,
      pageSize: pagination.value.pageSize
    }, pageSearchParams.value), pageParams.value);

    setLoading(true);
    if (!Object(external_lodash_["isFunction"])(requestRowsFn)) return;
    requestRowsFn(Object(objectSpread2["a" /* default */])({}, pageQuery)).then(function (_ref) {
      var data = _ref.data,
          total = _ref.total;
      setTableData(data);
      setPageValue('total', total);
      setLoading(false);
      tableData.value = data;
      console.log(tableData, 'tableData');
    }).catch(function (err) {
      setLoading(false);
    });
  };

  var onPageSearch = function onPageSearch(data) {
    clearSelection();
    setPageSearchParams(Object(objectSpread2["a" /* default */])({}, data));
    loadPage();
  };

  var resetPageLoad = function resetPageLoad() {
    resetPageParams();
    loadPage();
  };

  var resetPageParams = function resetPageParams() {
    setTableData([]);
    setPageValue('total', 0);
    setPageValue('pageSize', 10);
    setPageValue('current', 1);
  };

  return {
    pagination: pagination,
    pageLoading: pageLoading,
    loadPage: loadPage,
    tableData: tableData,
    resetPageLoad: resetPageLoad,
    resetPageParams: resetPageParams,
    pageSearchParams: pageSearchParams,
    onPageSearch: onPageSearch,
    pageParams: pageParams,
    onSelectChange: onSelectChange,
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    clearSelection: clearSelection
  };
});

/***/ })
/******/ ]);