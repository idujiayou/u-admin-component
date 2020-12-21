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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace");

/***/ }),

/***/ 2:
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

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/locale");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/dialog");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons-vue");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(5);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/u-search-btn/src/index.vue?vue&type=template&id=c52baa3e


const _hoisted_1 = { class: "u-search-btn" }
const _hoisted_2 = { style: {"max-width":"500px"} }
const _hoisted_3 = {
  key: 0,
  style: {"color":"#999"}
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_tag = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-tag")
  const _component_SearchOutlined = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("SearchOutlined")
  const _component_a_button = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-button")
  const _component_a_popover = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-popover")
  const _component_u_export_btn = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-export-btn")
  const _component_u_form_btn = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-form-btn")
  const _component_a_button_group = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-button-group")
  const _component_uSearchBar = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("uSearchBar")
  const _component_u_dialog = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-dialog")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_1, [
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_button_group, null, {
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_popover, {
          title: $setup.translate('uSearchBtn.selectedTitle')
        }, {
          content: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
            Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_2, [
              (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($data.params, (item, index) => {
                return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_a_tag, {
                  key: index,
                  class: "ant-tag-primary",
                  style: {"margin-top":"4px","margin-bottom":"4px"}
                }, {
                  default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
                    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(item.label) + ": " + Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(item.value + ''), 1 /* TEXT */)
                  ]),
                  _: 2
                }, 1024 /* DYNAMIC_SLOTS */))
              }), 128 /* KEYED_FRAGMENT */)),
              (!$data.params.length)
                ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_3, [
                    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_SearchOutlined),
                    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(" " + Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($setup.translate('uSearchBtn.empty')), 1 /* TEXT */)
                  ]))
                : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)
            ])
          ]),
          default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
            Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_button, {
              onClick: _cache[1] || (_cache[1] = $event => (_ctx.toggle('visible')))
            }, {
              icon: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
                Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_SearchOutlined)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8 /* PROPS */, ["title"]),
        (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.btns, (btn, index) => {
          return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], { key: index }, [
            ($options.isType('export', btn))
              ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_u_export_btn, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({
                  key: 0,
                  text: btn.text
                }, btn.props), null, 16 /* FULL_PROPS */, ["text"]))
              : ($options.isType('form', btn))
                ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_u_form_btn, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({
                    key: 1,
                    text: btn.text
                  }, btn.props), null, 16 /* FULL_PROPS */, ["text"]))
                : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_a_button, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({ key: 2 }, btn.props), {
                    default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
                      Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(btn.text), 1 /* TEXT */)
                    ]),
                    _: 2
                  }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */))
          ], 64 /* STABLE_FRAGMENT */))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      _: 1
    }),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_u_dialog, {
      visible: _ctx.visible,
      "onUpdate:visible": _cache[2] || (_cache[2] = $event => (_ctx.visible = $event)),
      title: $setup.translate('uSearchBtn.title'),
      onOk: _cache[3] || (_cache[3] = $event => (_ctx.toggle('visible'))),
      width: 1000,
      footer: null
    }, {
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_uSearchBar, {
          onSearch: $options.searchFn,
          data: $props.data
        }, null, 8 /* PROPS */, ["onSearch", "data"])
      ]),
      _: 1
    }, 8 /* PROPS */, ["visible", "title"])
  ]))
}
// CONCATENATED MODULE: ./src/components/u-search-btn/src/index.vue?vue&type=template&id=c52baa3e

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.array.includes"
var es_array_includes_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.string.includes"
var es_string_includes_ = __webpack_require__(25);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// EXTERNAL MODULE: external "u-admin-component/lib/use/locale"
var locale_ = __webpack_require__(3);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "u-admin-component/lib/use/dialog"
var dialog_ = __webpack_require__(33);
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog_);

// EXTERNAL MODULE: external "@ant-design/icons-vue"
var icons_vue_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(8);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/u-search-btn/src/index.vue?vue&type=script&lang=js










/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'uSearchBtn',
  components: {
    SearchOutlined: icons_vue_["SearchOutlined"]
  },
  props: {
    data: Array,
    btns: Array
  },
  setup: function setup() {
    var _localeUse = locale_default()(),
        translate = _localeUse.translate;

    var dialogObj = dialog_default()('visible');
    return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, dialogObj), {}, {
      translate: translate
    });
  },
  data: function data() {
    return {
      params: []
    };
  },
  methods: {
    isType: function isType(type, item) {
      var arr = Object(external_lodash_["isArray"])(type) ? type : [type];
      return arr.includes(item.type);
    },
    filterParams: function filterParams(params) {
      var arr = [];
      params.forEach(function (item) {
        var value = item.value;

        if (!Object(utils["d" /* isRequired */])(value)) {
          arr.push(item);
        }
      });
      return arr;
    },
    searchFn: function searchFn(_ref) {
      var params = _ref.params,
          labelParams = _ref.labelParams;
      this.params = this.filterParams(labelParams);
      this.toggle('visible');
      this.$emit('search', params);
    }
  }
});
// CONCATENATED MODULE: ./src/components/u-search-btn/src/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/u-search-btn/src/index.vue



srcvue_type_script_lang_js.render = render

/* harmony default export */ var src = (srcvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/u-search-btn/index.js



src.install = function (app) {
  app.component(src.name, src);
};

/* harmony default export */ var u_search_btn = __webpack_exports__["default"] = (src);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getValueByKey; });
/* unused harmony export getModelKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return downloadFile; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var isRequired = function isRequired(value) {
  return value !== true && !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(value) && Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(value);
};
var getKeys = function getKeys(key) {
  var path = key.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var keyArr = path.split('.');
  return keyArr;
};
var getValueByKey = function getValueByKey(key, modelRef) {
  var val = '';

  if (key) {
    var keyArr = getKeys(key);
    var len = keyArr.length;
    var tempObj = modelRef;
    keyArr.forEach(function (k, i) {
      if (len === i + 1) {
        val = tempObj ? tempObj[k] : '';
      } else {
        tempObj[k] = tempObj[k] || {};
        tempObj = tempObj[k];
      }
    });
  }

  return val;
};
var getModelKey = function getModelKey(key, modelRef) {
  var val = {};

  if (key) {
    var keyArr = getKeys(key);
    var len = keyArr.length;
    var tempObj = modelRef;
    keyArr.forEach(function (k, i) {
      if (len === i + 1) {
        val = tempObj;
      } else {
        tempObj[k] = tempObj[k] || {};
        tempObj = tempObj[k];
      }
    });
  }

  return val;
};
function downloadFile(href, name) {
  var a = document.createElement('a');
  a.href = href;
  a.download = name || '';
  a.target = '_blank';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ })

/******/ });