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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons-vue");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(5);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/u-dialog/src/index.vue?vue&type=template&id=dd0afcce


const _hoisted_1 = { class: "u-dialog-title" }
const _hoisted_2 = { class: "u-dialog-title-l" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FullscreenExitOutlined = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("FullscreenExitOutlined")
  const _component_FullscreenOutlined = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("FullscreenOutlined")
  const _component_a_modal = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("a-modal")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_a_modal, {
    class: ["u-dialog", {'u-dialog-full': $data.isFullscreen}]
  }, {
    title: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
      Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_1, [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_2, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.title), 1 /* TEXT */),
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
          class: "u-dialog-title-r",
          onClick: _cache[1] || (_cache[1] = $event => ($options.toggle('isFullscreen')))
        }, [
          ($data.isFullscreen)
            ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_FullscreenExitOutlined, {
                key: 0,
                class: "u-dialog-title-icon"
              }))
            : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_FullscreenOutlined, {
                key: 1,
                class: "u-dialog-title-icon"
              }))
        ])
      ])
    ]),
    default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
      Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8 /* PROPS */, ["class"]))
}
// CONCATENATED MODULE: ./src/components/u-dialog/src/index.vue?vue&type=template&id=dd0afcce

// EXTERNAL MODULE: external "@ant-design/icons-vue"
var icons_vue_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/u-dialog/src/index.vue?vue&type=script&lang=js

/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'uDialog',
  components: {
    FullscreenExitOutlined: icons_vue_["FullscreenExitOutlined"],
    FullscreenOutlined: icons_vue_["FullscreenOutlined"]
  },
  props: {
    title: String
  },
  data: function data() {
    return {
      isFullscreen: false
    };
  },
  methods: {
    toggle: function toggle(key) {
      this[key] = !this[key];
    }
  }
});
// CONCATENATED MODULE: ./src/components/u-dialog/src/index.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/u-dialog/src/index.vue



srcvue_type_script_lang_js.render = render

/* harmony default export */ var src = (srcvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/u-dialog/index.js



src.install = function (app) {
  app.component(src.name, src);
};

/* harmony default export */ var u_dialog = __webpack_exports__["default"] = (src);

/***/ })

/******/ });