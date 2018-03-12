webpackJsonp([3],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(4);

var _Header2 = _interopRequireDefault(_Header);

var _edite_article = __webpack_require__(93);

var _edite_article2 = _interopRequireDefault(_edite_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      article: $article,
      msg: "deital"
    };
  },
  created: function created() {},

  components: {
    Nav: _Header2.default,
    Article: _edite_article2.default
  },
  methods: {
    setResult: function setResult(result) {
      this.result = result;
    }
  }
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      article: $article,
      preview: false
    };
  },
  created: function created() {},

  methods: {
    preivew_btn: function preivew_btn() {
      var $dom = this.$refs["content"];
      var html = $dom.innerHTML;
      $article.content = html;
      this.$data.preview = !this.$data.preview;
    },
    save_btn: function save_btn() {
      var $dom = this.$refs["content"];
      var html = $dom.innerHTML;
      $article.content = html;
      delete $article.update_time;
      delete $article.t;
      ajax({
        type: "post",
        data: $article,
        url: "/huoshu/public/index/article/save",
        before: function before() {
          var index = layer.load(1, {
            shade: [0.1, "#fff"] //0.1透明度的白色背景
          });
        },
        success: function success(jsonReturn) {
          //   debugger;
          layer.closeAll();
          layer.msg("保存完毕");
          $article = JSON.parse(jsonReturn);
        }
      });
    }
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(90);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: "#root",
    template: '<App/>',
    components: {
        App: _app2.default
    }
});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0abbbf98_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0abbbf98_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\article\\edit\\app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0abbbf98", Component.options)
  } else {
    hotAPI.reload("data-v-0abbbf98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7ef4c576", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbbf98\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbbf98\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_161b5689_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_edite_article_vue__ = __webpack_require__(96);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_161b5689_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_edite_article_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\article\\edit\\edite_article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-161b5689", Component.options)
  } else {
    hotAPI.reload("data-v-161b5689", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7b1c93ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-161b5689\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./edite_article.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-161b5689\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./edite_article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.editer .content {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  line-height: 25px;\r\n  letter-spacing: 1px;\n}\n.editer .padding10 {\r\n  padding: 10px;\n}\n.right {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\n}\n.content1 {\r\n  background: #eeee;\r\n  min-height: 40px;\n}\n.content2 {\r\n  min-height: 40px;\r\n  background: #fff;\n}\n.label_all {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  font-size: 12px;\n}\n.preview_title {\r\n  font-size: 21px;\n}\r\n", "", {"version":3,"sources":["D:/phpStudy/WWW/huoshu/application/index/view/article/edit/application/index/view/article/edit/edite_article.vue"],"names":[],"mappings":";AACA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;CACA;AACA;EACA,cAAA;CACA;AACA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,sBAAA;EAAA,kCAAA;UAAA,0BAAA;CACA;AACA;EACA,kBAAA;EACA,iBAAA;CACA;AACA;EACA,iBAAA;EACA,iBAAA;CACA;AACA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,gBAAA;CACA;AACA;EACA,gBAAA;CACA","file":"edite_article.vue","sourcesContent":["<style>\r\n.editer .content {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  line-height: 25px;\r\n  letter-spacing: 1px;\r\n}\r\n.editer .padding10 {\r\n  padding: 10px;\r\n}\r\n.right {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.content1 {\r\n  background: #eeee;\r\n  min-height: 40px;\r\n}\r\n.content2 {\r\n  min-height: 40px;\r\n  background: #fff;\r\n}\r\n.label_all {\r\n  display: flex;\r\n  font-size: 12px;\r\n}\r\n.preview_title {\r\n  font-size: 21px;\r\n}\r\n</style>\r\n\r\n<template>\r\n  <div class=\"editer \">\r\n    <div class=\"container\">\r\n      <div class=\"title\">\r\n        <input type=\"text\" class=\"form-control\" v-model=\"article.title\" v-show=\"!preview\">\r\n        <div v-show=\"preview\" class=\"preview_title\">{{article.title}}</div>\r\n        <div class=\"label_all padding10\">\r\n          <span class=\"label_title\">更新时间：</span>\r\n          <span class=\"label_content\">{{article.update_time}}</span>\r\n        </div>\r\n        <div class=\"padding10 right\">\r\n          <button class=\"btn btn-primary\" id=\"preview_btn\" @click=\"preivew_btn\" v-show=\"!preview\">预览</button>\r\n          <button class=\"btn btn-primary\" id=\"preview_btn\" @click=\"preivew_btn\" v-show=\"preview\">返回</button>\r\n          <button class=\"btn btn-success\" id=\"save_btn\" @click=\"save_btn\" v-show=\"!preview\">保存</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"content1\" v-html=\"article.content\" contenteditable=\"true\" ref=\"content\" v-show=\"!preview\"> </div>\r\n        <div class=\"content2\" v-html=\"article.content\" v-show=\"preview\"> </div>\r\n      </div>\r\n      <!-- <pre> -->\r\n      <!-- {{article}} -->\r\n      <!-- </pre> -->\r\n    </div>\r\n\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      article: $article,\r\n      preview: false\r\n    };\r\n  },\r\n  created() {},\r\n  methods: {\r\n    preivew_btn() {\r\n      var $dom = this.$refs[\"content\"];\r\n      var html = $dom.innerHTML;\r\n      $article.content = html;\r\n      this.$data.preview = !this.$data.preview;\r\n    },\r\n    save_btn() {\r\n      var $dom = this.$refs[\"content\"];\r\n      var html = $dom.innerHTML;\r\n      $article.content = html;\r\n      delete $article.update_time;\r\n      delete $article.t;\r\n      ajax({\r\n        type: \"post\",\r\n        data: $article,\r\n        url: \"/huoshu/public/index/article/save\",\r\n        before() {\r\n          var index = layer.load(1, {\r\n            shade: [0.1, \"#fff\"] //0.1透明度的白色背景\r\n          });\r\n        },\r\n        success(jsonReturn) {\r\n          //   debugger;\r\n          layer.closeAll();\r\n          layer.msg(\"保存完毕\");\r\n          $article = JSON.parse(jsonReturn);\r\n        }\r\n      });\r\n    }\r\n  }\r\n};\r\n</script>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "editer " }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "title" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.article.title,
              expression: "article.title"
            },
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.preview,
              expression: "!preview"
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text" },
          domProps: { value: _vm.article.title },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.article, "title", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.preview,
                expression: "preview"
              }
            ],
            staticClass: "preview_title"
          },
          [_vm._v(_vm._s(_vm.article.title))]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "label_all padding10" }, [
          _c("span", { staticClass: "label_title" }, [_vm._v("更新时间：")]),
          _vm._v(" "),
          _c("span", { staticClass: "label_content" }, [
            _vm._v(_vm._s(_vm.article.update_time))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "padding10 right" }, [
          _c(
            "button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.preview,
                  expression: "!preview"
                }
              ],
              staticClass: "btn btn-primary",
              attrs: { id: "preview_btn" },
              on: { click: _vm.preivew_btn }
            },
            [_vm._v("预览")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.preview,
                  expression: "preview"
                }
              ],
              staticClass: "btn btn-primary",
              attrs: { id: "preview_btn" },
              on: { click: _vm.preivew_btn }
            },
            [_vm._v("返回")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.preview,
                  expression: "!preview"
                }
              ],
              staticClass: "btn btn-success",
              attrs: { id: "save_btn" },
              on: { click: _vm.save_btn }
            },
            [_vm._v("保存")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.preview,
              expression: "!preview"
            }
          ],
          ref: "content",
          staticClass: "content1",
          attrs: { contenteditable: "true" },
          domProps: { innerHTML: _vm._s(_vm.article.content) }
        }),
        _vm._v(" "),
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.preview,
              expression: "preview"
            }
          ],
          staticClass: "content2",
          domProps: { innerHTML: _vm._s(_vm.article.content) }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-161b5689", esExports)
  }
}

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("Nav", { attrs: { setResult: _vm.setResult } }),
      _vm._v(" "),
      _c("Article")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0abbbf98", esExports)
  }
}

/***/ })

},[89]);
//# sourceMappingURL=article_edit.js.map