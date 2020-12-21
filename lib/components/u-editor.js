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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/config");

/***/ }),

/***/ 22:
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("u-admin-component/lib/use/locale");

/***/ }),

/***/ 30:
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

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("quill");

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(30);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ql-editor {\n  min-height: 200px;\n  max-height: 600px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("ant-design-vue");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = require("quill/dist/quill.core.css");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("quill/dist/quill.snow.css");

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = require("quill/dist/quill.bubble.css");

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(5);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/u-editor/src/index.vue?vue&type=template&id=fae0b9be


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_quillEditor = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("quillEditor")
  const _component_uUpload = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("uUpload")
  const _component_u_dialog = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("u-dialog")

  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", null, [
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_quillEditor, {
      style: {"line-height":"normal","white-space":"pre-wrap"},
      ref: "editor",
      value: $data.model,
      options: $options.editorOption,
      class: "quill-editor",
      onInput: $options.editorChange
    }, null, 8 /* PROPS */, ["value", "options", "onInput"]),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_u_dialog, {
      visible: $data.visible,
      "onUpdate:visible": _cache[1] || (_cache[1] = $event => ($data.visible = $event)),
      width: 750,
      title: $setup.translate('uEditor.title'),
      "ok-text": $setup.translate('uEditor.confirmButtonText'),
      "cancel-text": $setup.translate('uEditor.cancelButtonText'),
      onOk: $options.okFn
    }, {
      default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(() => [
        Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_uUpload, {
          ref: "uploadImg",
          value: $data.uploadImg,
          multiple: "",
          onUploadChange: $options.uploadChange
        }, null, 8 /* PROPS */, ["value", "onUploadChange"])
      ]),
      _: 1
    }, 8 /* PROPS */, ["visible", "title", "ok-text", "cancel-text", "onOk"])
  ]))
}
// CONCATENATED MODULE: ./src/components/u-editor/src/index.vue?vue&type=template&id=fae0b9be

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(7);

// EXTERNAL MODULE: external "u-admin-component/lib/use/locale"
var locale_ = __webpack_require__(3);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// EXTERNAL MODULE: external "quill"
var external_quill_ = __webpack_require__(36);
var external_quill_default = /*#__PURE__*/__webpack_require__.n(external_quill_);

// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--1!./src/components/vue-quill-editor/src/editor.vue?vue&type=template&id=2e2780db


const _hoisted_1 = { class: "quill-editor" }
const _hoisted_2 = { ref: "editor" }

function editorvue_type_template_id_2e2780db_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_1, [
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "toolbar"),
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_2, null, 512 /* NEED_PATCH */)
  ]))
}
// CONCATENATED MODULE: ./src/components/vue-quill-editor/src/editor.vue?vue&type=template&id=2e2780db

// CONCATENATED MODULE: ./src/components/vue-quill-editor/src/options.js
/* harmony default export */ var options = ({
  theme: 'snow',
  boundary: document.body,
  modules: {
    toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
      'header': 1
    }, {
      'header': 2
    }], [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }], [{
      'script': 'sub'
    }, {
      'script': 'super'
    }], [{
      'indent': '-1'
    }, {
      'indent': '+1'
    }], [{
      'direction': 'rtl'
    }], [{
      'size': ['small', false, 'large', 'huge']
    }], [{
      'header': [1, 2, 3, 4, 5, 6, false]
    }], [{
      'color': []
    }, {
      'background': []
    }], [{
      'font': []
    }], [{
      'align': []
    }], ['clean'], ['link', 'image', 'video']]
  },
  placeholder: 'Insert text here ...',
  readOnly: false
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/vue-quill-editor/src/editor.vue?vue&type=script&lang=js
/* eslint-disable vue/no-reserved-keys */
// require sources


var Quill = window.Quill || external_quill_default.a; // pollfill

if (typeof Object.assign != 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function value(target, varArgs) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
} // export


/* harmony default export */ var editorvue_type_script_lang_js = ({
  name: 'quill-editor',
  data: function data() {
    return {
      _options: {},
      _content: '',
      defaultOptions: options
    };
  },
  props: {
    content: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    globalOptions: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    }
  },
  mounted: function mounted() {
    this.initialize();
  },
  beforeUnmount: function beforeUnmount() {
    this.quill = null;
    delete this.quill;
  },
  methods: {
    // Init Quill instance
    initialize: function initialize() {
      var _this = this;

      if (this.$el) {
        // Options
        this._options = Object.assign({}, this.defaultOptions, this.globalOptions, this.options); // Instance

        this.quill = new Quill(this.$refs.editor, this._options);
        this.quill.enable(false); // Set editor content

        if (this.value || this.content) {
          this.quill.pasteHTML(this.value || this.content);
        } // Disabled editor


        if (!this.disabled) {
          this.quill.enable(true);
        } // Mark model as touched if editor lost focus


        this.quill.on('selection-change', function (range) {
          if (!range) {
            _this.$emit('blur', _this.quill);
          } else {
            _this.$emit('focus', _this.quill);
          }
        }); // Update model if text changes

        this.quill.on('text-change', function (delta, oldDelta, source) {
          var html = _this.$refs.editor.children[0].innerHTML;
          var quill = _this.quill;

          var text = _this.quill.getText();

          if (html === '<p><br></p>') html = '';
          _this._content = html;

          _this.$emit('input', _this._content);

          _this.$emit('change', {
            html: html,
            text: text,
            quill: quill
          });
        }); // Emit ready event

        this.$emit('ready', this.quill);
      }
    }
  },
  watch: {
    // Watch content change
    content: function content(newVal, oldVal) {
      if (this.quill) {
        if (newVal && newVal !== this._content) {
          this._content = newVal;
          this.quill.pasteHTML(newVal);
        } else if (!newVal) {
          this.quill.setText('');
        }
      }
    },
    // Watch content change
    value: function value(newVal, oldVal) {
      if (this.quill) {
        if (newVal && newVal !== this._content) {
          this._content = newVal;
          this.quill.pasteHTML(newVal);
        } else if (!newVal) {
          this.quill.setText('');
        }
      }
    },
    // Watch disabled change
    disabled: function disabled(newVal, oldVal) {
      if (this.quill) {
        this.quill.enable(!newVal);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-quill-editor/src/editor.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/vue-quill-editor/src/editor.vue



editorvue_type_script_lang_js.render = editorvue_type_template_id_2e2780db_render

/* harmony default export */ var editor = (editorvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/vue-quill-editor/src/index.js


/*
* Vue-Quill-Editor index.js
* Author: surmon@foxmail.com
* Github: https://github.com/surmon-china/vue-quill-editor
*/


var src_Quill = window.Quill || external_quill_default.a;

var src_install = function install(app, globalOptions) {
  if (globalOptions) {
    editor.props.globalOptions.default = function () {
      return globalOptions;
    };
  }

  app.component(editor.name, editor);
};

var VueQuillEditor = {
  Quill: src_Quill,
  quillEditor: editor,
  install: src_install
};
/* harmony default export */ var src = (VueQuillEditor);

// EXTERNAL MODULE: external "ant-design-vue"
var external_ant_design_vue_ = __webpack_require__(48);

// EXTERNAL MODULE: external "quill/dist/quill.core.css"
var quill_core_css_ = __webpack_require__(54);

// EXTERNAL MODULE: external "quill/dist/quill.snow.css"
var quill_snow_css_ = __webpack_require__(55);

// EXTERNAL MODULE: external "quill/dist/quill.bubble.css"
var quill_bubble_css_ = __webpack_require__(56);

// EXTERNAL MODULE: external "u-admin-component/lib/config"
var config_ = __webpack_require__(12);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--1!./src/components/u-editor/src/index.vue?vue&type=script&lang=js










/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'uEditor',
  props: {},
  components: {
    quillEditor: editor
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
      model: '',
      visible: false,
      uploadImg: [],
      uploadIndex: 0
    };
  },
  computed: {
    editorOption: function editorOption() {
      var _this = this;

      var toolbarOptions = [['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'], [{
        'header': 1
      }, {
        'header': 2
      }], // custom button values
      [{
        'list': 'ordered'
      }, {
        'list': 'bullet'
      }], [{
        'script': 'sub'
      }, {
        'script': 'super'
      }], // superscript/subscript
      [{
        'indent': '-1'
      }, {
        'indent': '+1'
      }], // outdent/indent
      [{
        'direction': 'rtl'
      }], // text direction
      [{
        'size': ['small', false, 'large', 'huge']
      }], // custom dropdown
      [{
        'header': [1, 2, 3, 4, 5, 6, false]
      }], [{
        'color': []
      }, {
        'background': []
      }], // dropdown with defaults from theme
      [{
        'font': []
      }], [{
        'align': []
      }], ['link', 'image', 'video'], ['clean'] // remove formatting button
      ];
      return {
        placeholder: this.translate('uEditor.placeholder'),
        modules: {
          toolbar: {
            container: toolbarOptions,
            // 工具栏
            handlers: {
              'image': function image(value) {
                if (value) {
                  var quill = _this.$refs.editor.quill;
                  var length = quill.getSelection().index;
                  _this.uploadIndex = length;

                  _this.showModal();
                }
              }
            }
          }
        }
      };
    }
  },
  methods: {
    innerText: function innerText() {
      var quill = this.$refs.editor.quill;
      var length = this.uploadIndex;
      var uploadImg = this.uploadImg;

      if (uploadImg && uploadImg.length) {
        uploadImg.forEach(function (item) {
          // 插入图片，res为服务器返回的图片链接地址
          length += 1;
          quill.insertEmbed(length, 'image', item);
        }); // 调整光标到最后

        quill.setSelection(length + 1);
      } else {
        quill.setSelection(length);
      }
    },
    editorChange: function editorChange(val) {
      this.$emit('change', val);
    },
    uploadChange: function uploadChange(val) {
      this.uploadImg = val;
    },
    showModal: function showModal() {
      this.visible = true;
      this.uploadImg = [];
    },
    hideModal: function hideModal() {
      this.visible = false;
      this.uploadImg = [];
    },
    okFn: function okFn() {
      var uploadImg = this.uploadImg;
      var $uploadImg = this.$refs.uploadImg;

      if ($uploadImg && !$uploadImg.isDone()) {
        external_ant_design_vue_["message"].warning(this.translate('uEditor.validator.uploading'));
        return;
      }

      this.innerText();
      this.hideModal();
    }
  }
});
// CONCATENATED MODULE: ./src/components/u-editor/src/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(22);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-2!./node_modules/vue-loader/dist??ref--1!./src/components/u-editor/src/index.vue?vue&type=style&index=0&id=fae0b9be&lang=less
var srcvue_type_style_index_0_id_fae0b9be_lang_less = __webpack_require__(39);
var srcvue_type_style_index_0_id_fae0b9be_lang_less_default = /*#__PURE__*/__webpack_require__.n(srcvue_type_style_index_0_id_fae0b9be_lang_less);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--3-2!./node_modules/vue-loader/dist??ref--1!./src/components/u-editor/src/index.vue?vue&type=style&index=0&id=fae0b9be&lang=less

            

var srcvue_type_style_index_0_id_fae0b9be_lang_less_options = {};

srcvue_type_style_index_0_id_fae0b9be_lang_less_options.insert = "head";
srcvue_type_style_index_0_id_fae0b9be_lang_less_options.singleton = false;

var update = injectStylesIntoStyleTag_default()(srcvue_type_style_index_0_id_fae0b9be_lang_less_default.a, srcvue_type_style_index_0_id_fae0b9be_lang_less_options);



/* harmony default export */ var u_editor_srcvue_type_style_index_0_id_fae0b9be_lang_less = (srcvue_type_style_index_0_id_fae0b9be_lang_less_default.a.locals || {});
// CONCATENATED MODULE: ./src/components/u-editor/src/index.vue?vue&type=style&index=0&id=fae0b9be&lang=less

// CONCATENATED MODULE: ./src/components/u-editor/src/index.vue





srcvue_type_script_lang_js.render = render

/* harmony default export */ var u_editor_src = (srcvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/components/u-editor/index.js



u_editor_src.install = function (app) {
  app.component(u_editor_src.name, u_editor_src);
};

/* harmony default export */ var u_editor = __webpack_exports__["default"] = (u_editor_src);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ })

/******/ });