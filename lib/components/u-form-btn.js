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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/locale");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/dialog");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(5);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/u-form-btn/src/index.vue?vue&type=template&id=d5ba8f60


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-button")
  const _component_u_form = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-form")
  const _component_u_dialog = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-dialog")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, [
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_a_button, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])(_ctx.$attrs, {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.toggle('visible'))),
      loading: $data.loading
    }), {
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "default", {loading: $data.loading}, () => [
          Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($data.loading ? $setup.translate('uFormBtn.loading') : $props.text), 1 /* TEXT */)
        ])
      ]),
      _: 3
    }, 16 /* FULL_PROPS */, ["loading"]),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_u_dialog, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({
      visible: _ctx.visible,
      "onUpdate:visible": _cache[3] || (_cache[3] = $event => (_ctx.visible = $event)),
      title: ($props.dialogProps && $props.dialogProps.title) || $props.text
    }, $options.dialogProps2, {
      onOk: _cache[4] || (_cache[4] = $event => (_ctx.toggle('visible')))
    }), {
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        (_ctx.visible)
          ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_u_form, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["mergeProps"])({ key: 0 }, $options.formProps2, {
              onCancel: _cache[2] || (_cache[2] = $event => (_ctx.toggle('visible')))
            }), null, 16 /* FULL_PROPS */))
          : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)
      ]),
      _: 1
    }, 16 /* FULL_PROPS */, ["visible", "title"])
  ], 64 /* STABLE_FRAGMENT */))
}
// CONCATENATED MODULE: ./src/components/u-form-btn/src/index.vue?vue&type=template&id=d5ba8f60

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(2);

// EXTERNAL MODULE: external "u-admin-component/lib/use/locale"
var locale_ = __webpack_require__(3);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "u-admin-component/lib/use/dialog"
var dialog_ = __webpack_require__(33);
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/u-form-btn/src/index.vue?vue&type=script&lang=js



/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'u-form-btn',
  props: {
    text: String,
    dialogProps: Object,
    formProps: Object
  },
  setup: function setup(props) {
    var _localeUse = locale_default()(),
        translate = _localeUse.translate;

    var dialogObj = dialog_default()('visible');
    return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, dialogObj), {}, {
      translate: translate
    });
  },
  data: function data() {
    return {
      loading: false
    };
  },
  computed: {
    formProps2: function formProps2() {
      var _this$formProps = this.formProps,
          formProps = _this$formProps === void 0 ? {} : _this$formProps;
      return Object(objectSpread2["a" /* default */])({}, formProps);
    },
    dialogProps2: function dialogProps2() {
      var _this$dialogProps = this.dialogProps,
          dialogProps = _this$dialogProps === void 0 ? {} : _this$dialogProps;
      return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, dialogProps), {}, {
        width: dialogProps.width || 600,
        footer: dialogProps.footer || null
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/u-form-btn/src/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/u-form-btn/src/index.vue



srcvue_type_script_lang_js.render = render

/* harmony default export */ var src = (srcvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/u-form-btn/index.js



src.install = function (app) {
  app.component(src.name, src);
};

/* harmony default export */ var u_form_btn = __webpack_exports__["default"] = (src);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ })

/******/ });