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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
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
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/config");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__);




function _toConsumableArray(arr) {
  return _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0___default()(arr) || _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1___default()(arr) || _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2___default()(arr) || _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3___default()();
}

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/unsupportedIterableToArray");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/request");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/arrayWithoutHoles");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/iterableToArray");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/nonIterableSpread");

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/u-table/src/index.vue?vue&type=template&id=5e455c7c


const _hoisted_1 = { class: "u-table" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_table = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-table")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_1, [
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_table, $options.opts, null, 16 /* FULL_PROPS */)
  ]))
}
// CONCATENATED MODULE: ./src/components/u-table/src/index.vue?vue&type=template&id=5e455c7c

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// EXTERNAL MODULE: external "u-admin-component/lib/use/locale"
var locale_ = __webpack_require__(3);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "@ant-design/icons-vue"
var icons_vue_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/u-table/src/index.vue?vue&type=script&lang=js




/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'uTable',
  comments: {
    SyncOutlined: icons_vue_["SyncOutlined"]
  },
  setup: function setup() {
    var _localeUse = locale_default()(),
        translate = _localeUse.translate;

    return {
      translate: translate
    };
  },
  data: function data() {
    var _this = this;

    var h = this.$createElement;
    return {
      pagination: {
        pageSize: 10,
        showSizeChanger: true,
        itemRender: function itemRender(_ref) {
          var page = _ref.page,
              type = _ref.type,
              originalElement = _ref.originalElement;
          return type === 'next' ? Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
            "style": "position: relative;"
          }, [originalElement, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
            "class": "ant-pagination-item-link ant-pagination-item-refresh",
            "onClick": function onClick(evt) {
              return _this.refresh(evt);
            },
            "title": _this.translate('uTable.refresh')
          }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(icons_vue_["SyncOutlined"], null, null)])]) : originalElement;
        }
      }
    };
  },
  computed: {
    opts: function opts() {
      var $attrs = this.$attrs,
          pagination2 = this.pagination2;
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, $attrs), {}, {
        rowKey: $attrs.rowKey || 'id',
        pagination: pagination2
      });
    },
    pagination2: function pagination2() {
      var pagination = this.pagination,
          $attrs = this.$attrs;
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, pagination), $attrs.pagination);
    }
  },
  methods: {
    refresh: function refresh(evt) {
      evt.stopPropagation();
      this.$emit('refresh');
    }
  }
});
// CONCATENATED MODULE: ./src/components/u-table/src/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/u-table/src/index.vue



srcvue_type_script_lang_js.render = render

/* harmony default export */ var src = __webpack_exports__["a"] = (srcvue_type_script_lang_js);

/***/ }),
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
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/table");

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
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
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(5);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/u-async-select/src/index.vue?vue&type=template&id=988632bc


const _hoisted_1 = { class: "u-async-select" }
const _hoisted_2 = { class: "u-async-select-show-tags" }
const _hoisted_3 = /*#__PURE__*/Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])("清空")
const _hoisted_4 = {
  key: 0,
  ref: "showTags",
  class: "u-show-tags"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tag = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-tag")
  const _component_u_table = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-table")
  const _component_a_input = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-input")
  const _component_a_popover = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-popover")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_1, [
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_popover, {
      visible: $data.visible,
      "onUpdate:visible": _cache[5] || (_cache[5] = $event => ($data.visible = $event)),
      placement: "topLeft",
      ref: "popover",
      trigger: "click"
    }, {
      content: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_2, [
          (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])(_ctx.selectedRows, (tag, index) => {
            return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_a_tag, {
              key: tag[$props.rowKey],
              closable: "",
              onClose: $event => ($options.handleClose(index))
            }, {
              default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
                Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(tag[$props.showKey]), 1 /* TEXT */)
              ]),
              _: 2
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClose"]))
          }), 128 /* KEYED_FRAGMENT */)),
          Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_tag, {
            class: "u-async-select-show-tags",
            color: "error",
            onClick: $options.clearTags,
            style: {"cursor":"pointer"}
          }, {
            default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
              _hoisted_3
            ]),
            _: 1
          }, 8 /* PROPS */, ["onClick"])
        ], 512 /* NEED_PATCH */), [
          [external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], $options.showTags]
        ]),
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_u_table, {
          ref: "table",
          style: {"margin-top":"8px"},
          size: "small",
          loading: _ctx.pageLoading,
          "row-selection": { 
            selectedRowKeys: _ctx.selectedRowKeys, 
            onChange: _ctx.onSelectChange,
            type: $props.multiple ? 'checkbox' : 'radio'
          },
          rowKey: $props.rowKey,
          columns: $setup.columns2,
          "data-source": _ctx.tableData,
          onRefresh: _ctx.loadPage,
          scroll: {
            y: 200,
            x: 500
          },
          pagination: _ctx.pagination
        }, null, 8 /* PROPS */, ["loading", "row-selection", "rowKey", "columns", "data-source", "onRefresh", "pagination"]), [
          [external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.showTags]
        ])
      ]),
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
          class: "u-async-select-input",
          onClick: _cache[4] || (_cache[4] = (...args) => ($options.stopPropagation(...args)))
        }, [
          ($options.firstTag)
            ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_4, [
                Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_tag, {
                  visible: "",
                  closable: "",
                  onClose: _cache[1] || (_cache[1] = $event => ($options.handleClose(0))),
                  onClick: _cache[2] || (_cache[2] = $event => ($options.firstTag && $options.tagClick($event))),
                  style: {"cursor":"pointer"}
                }, {
                  default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
                    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($options.firstTag[$props.showKey]), 1 /* TEXT */)
                  ]),
                  _: 1
                })
              ], 512 /* NEED_PATCH */))
            : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true),
          (_ctx.selectedRows.length > 1)
            ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_a_tag, {
                key: 1,
                onClick: $options.numClick,
                style: {"cursor":"pointer","margin-right":"0"}
              }, {
                default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
                  Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(" +" + Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(_ctx.selectedRows.length - 1), 1 /* TEXT */)
                ]),
                _: 1
              }, 8 /* PROPS */, ["onClick"]))
            : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true),
          Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_input, {
            onClick: $options.stopPropagation,
            onFocus: $options.onFocus,
            onBlur: $options.onBlur,
            value: _ctx.pageParams[$props.keywordKey],
            "onUpdate:value": _cache[3] || (_cache[3] = $event => (_ctx.pageParams[$props.keywordKey] = $event)),
            onChange: $options.onChange
          }, null, 8 /* PROPS */, ["onClick", "onFocus", "onBlur", "value", "onChange"])
        ])
      ]),
      _: 1
    }, 8 /* PROPS */, ["visible"])
  ]))
}
// CONCATENATED MODULE: ./src/components/u-async-select/src/index.vue?vue&type=template&id=988632bc

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.array.splice"
var es_array_splice_ = __webpack_require__(27);

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor"
var es_number_constructor_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
var toConsumableArray = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/u-table/src/index.vue + 4 modules
var src = __webpack_require__(23);

// EXTERNAL MODULE: external "u-admin-component/lib/use/request"
var request_ = __webpack_require__(16);
var request_default = /*#__PURE__*/__webpack_require__.n(request_);

// EXTERNAL MODULE: external "u-admin-component/lib/use/table"
var table_ = __webpack_require__(32);
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// EXTERNAL MODULE: external "u-admin-component/lib/config"
var config_ = __webpack_require__(12);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/u-async-select/src/index.vue?vue&type=script&lang=js












/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'uAsyncSelect',
  props: {
    columns: Array,
    request: Function,
    params: Object,
    mode: String,
    rowKey: {
      type: String,
      default: 'id'
    },
    showKey: {
      type: String,
      default: 'name'
    },
    keywordKey: {
      type: String,
      default: 'name'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: [String, Array, Number],
    selected: [Array, Object],
    format: {
      type: String,
      default: 'array'
    }
  },
  setup: function setup(props) {
    var _ref = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["inject"])('uConfig') || config_default.a,
        asyncSelectConfig = _ref.asyncSelect;

    var getModeConfig = function getModeConfig() {
      var columns = props.columns,
          mode = props.mode;

      if (mode && asyncSelectConfig && asyncSelectConfig.mode && asyncSelectConfig.mode[mode]) {
        return asyncSelectConfig.mode[mode] || {};
      }

      return {};
    };

    var config = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["computed"])(function () {
      return getModeConfig();
    });
    var columns2 = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["computed"])(function () {
      var columns = props.columns;
      return columns || config.value.columns || asyncSelectConfig.defaultColumns;
    });
    var request2 = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["computed"])(function () {
      var request = props.request;
      return request || config.value.request;
    });

    var _requestUse = request_default()(request2.value),
        requestRowsFn = _requestUse.requestRows;

    return Object(objectSpread2["a" /* default */])({
      columns2: columns2
    }, table_default()(requestRowsFn, props.rowKey));
  },
  components: {
    uTable: src["a" /* default */]
  },
  data: function data() {
    return {
      isFocus: false,
      visible: false,
      isNumClick: false
    };
  },
  computed: {
    isArrayType: function isArrayType() {
      return this.multiple && this.format === 'array';
    },
    firstTag: function firstTag() {
      return this.selectedRows[0] || null;
    },
    showTags: function showTags() {
      return !this.isFocus && this.isNumClick;
    }
  },
  created: function created() {
    this.pageParams = Object(objectSpread2["a" /* default */])({}, this.params);
  },
  watch: {
    value: {
      handler: function handler(val) {
        if (val + '' !== this.selectedRowKeys + '') {
          if (!val.length) {
            this.selectedRows = [];
          }
        }
      }
    },
    selectedRowKeys: {
      handler: function handler(val) {
        if (!val.length) {
          this.toggle('isNumClick', false);
        }

        if (this.value + '' !== val + '') {
          if (this.isArrayType) {
            this.$emit('update:value', Object(toConsumableArray["a" /* default */])(val));
            this.$emit('change', Object(toConsumableArray["a" /* default */])(val));
          } else {
            this.$emit('update:value', val + '');
            this.$emit('change', val + '');
          }
        }
      },
      deep: true
    },
    selected: {
      handler: function handler(val) {
        var selectedRows = this.selectedRows,
            isEqualFn = this.isEqualFn;
        if (isEqualFn(val, selectedRows)) return;

        if (Object(external_lodash_["isArray"])(val)) {
          this.selectedRows = Object(toConsumableArray["a" /* default */])(val);
        } else {
          this.selectedRows = val ? [val] : [];
        }
      },
      immediate: true,
      deep: true
    },
    selectedRows: {
      handler: function handler(val) {
        var arr = this.getKeysItem(val);
        var selected = this.selected,
            selectedRowKeys = this.selectedRowKeys,
            isEqualFn = this.isEqualFn;
        var arr2 = this.getKeysItem(Object(external_lodash_["isArray"])(selected) ? selected : selected ? [selected] : []);

        if (arr.length !== selectedRowKeys.length || arr + '' !== selectedRowKeys + '') {
          this.selectedRowKeys = arr;
        }

        if (!isEqualFn(val, selected)) {
          this.$emit('selected-change', Object(toConsumableArray["a" /* default */])(val));
        }
      },
      immediate: true,
      deep: true
    },
    isFocus: function isFocus(val) {
      var _this = this;

      var num = val ? 10000 : 0;
      this.$nextTick(function () {
        _this.$refs.showTags && (_this.$refs.showTags.scrollLeft = num);
      });
    },
    visible: function visible(val) {
      if (val && !this.tableData.length) {
        this.loadPage();
      }
    }
  },
  mounted: function mounted() {
    if (this.visible) {
      this.loadPage();
    }
  },
  methods: {
    isEqualFn: function isEqualFn(arr1, arr2) {
      var rowKey = this.rowKey;
      var len1 = arr1.length;
      var len2 = arr2.length;

      if (len1 !== len2) {
        return false;
      } else if (len1 === 0 && len2 === 0) {
        return true;
      } else {
        var flag = true;
        Object(external_lodash_["forEach"])(arr1, function (item, index) {
          flag = item[rowKey] + '' === arr2[index][rowKey] + '';
          return flag;
        });
        return flag;
      }
    },
    getKeysItem: function getKeysItem(val) {
      var _this2 = this;

      var arr = [];
      val.forEach(function (item) {
        arr.push(item[_this2.rowKey]);
      });
      return arr;
    },
    toggle: function toggle(key, flag) {
      if (!key) return;

      if (Object(external_lodash_["isBoolean"])(flag)) {
        this[key] = flag;
      } else {
        this[key] = !this[key];
      }
    },
    tagClick: function tagClick(evt) {
      evt.stopPropagation();

      if (this.isNumClick) {
        this.toggle('visible', true);
      } else {
        this.toggle('visible');
      }

      this.toggle('isNumClick', false);
    },
    numClick: function numClick(evt) {
      evt.stopPropagation();
      this.toggle('visible', true);
      this.isNumClick = true;
    },
    handleClose: function handleClose(index) {
      this.selectedRows.splice(index, 1);
      this.selectedRowKeys.splice(index, 1);
    },
    onChange: function onChange(evt) {
      var val = evt.target.value;
      this.loadPage();
    },
    stopPropagation: function stopPropagation(evt) {
      evt.stopPropagation();
    },
    onFocus: function onFocus(evt) {
      evt.stopPropagation();
      this.isFocus = true;
      this.toggle('visible', true);
    },
    onBlur: function onBlur() {
      this.isFocus = false;
    },
    clearTags: function clearTags() {
      this.selectedRowKeys = [];
      this.selectedRows = [];
    }
  }
});
// CONCATENATED MODULE: ./src/components/u-async-select/src/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/u-async-select/src/index.vue



srcvue_type_script_lang_js.render = render

/* harmony default export */ var u_async_select_src = (srcvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/u-async-select/index.js



u_async_select_src.install = function (app) {
  app.component(u_async_select_src.name, u_async_select_src);
};

/* harmony default export */ var u_async_select = __webpack_exports__["default"] = (u_async_select_src);

/***/ })
/******/ ]);