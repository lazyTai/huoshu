webpackJsonp([7],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(147);

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

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0abbbf98_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(154);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1d7495f4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbbf98\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0abbbf98\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_161b5689_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_edite_article_vue__ = __webpack_require__(194);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(192)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-161b5689"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_edite_article_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_161b5689_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_edite_article_vue__["a" /* default */],
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [_c("Header_back"), _vm._v(" "), _c("Article")],
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

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0078365c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1403392c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./icon.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1403392c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./icon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.icon {\r\n  width: 1em;\r\n  height: 1em;\r\n  vertical-align: -0.15em;\r\n  fill: currentColor;\r\n  overflow: hidden;\n}\r\n", "", {"version":3,"sources":["D:/phpStudy/WWW/huoshu/application/index/view/components/application/index/view/components/icon.vue"],"names":[],"mappings":";AACA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,mBAAA;EACA,iBAAA;CACA","file":"icon.vue","sourcesContent":["<style>\r\n.icon {\r\n  width: 1em;\r\n  height: 1em;\r\n  vertical-align: -0.15em;\r\n  fill: currentColor;\r\n  overflow: hidden;\r\n}\r\n</style>\r\n<script>\r\nexport default {\r\n  props: {\r\n    icon: String\r\n  },\r\n  data() {\r\n    return {};\r\n  }\r\n};\r\n</script>\r\n\r\n<template>\r\n<svg class=\"icon\" aria-hidden=\"true\">\r\n    <use :xlink:href=\"'#icon-'+icon\"></use>\r\n</svg>\r\n</template>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("svg", { staticClass: "icon", attrs: { "aria-hidden": "true" } }, [
    _c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1403392c", esExports)
  }
}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("56f1d812", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-161b5689\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./edite_article.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-161b5689\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./edite_article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.editer[data-v-161b5689] {\r\n  margin: 10px;\r\n  margin-bottom: 50px;\n}\n.editer .content[data-v-161b5689] {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  line-height: 25px;\r\n  letter-spacing: 1px;\n}\n.editer .padding10[data-v-161b5689] {\r\n  padding: 10px;\n}\n.right[data-v-161b5689] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\n}\n.content1[data-v-161b5689] {\r\n  background: #eeee;\r\n  min-height: 40px;\n}\n.content2[data-v-161b5689] {\r\n  min-height: 40px;\r\n  background: #fff;\n}\n.label_all[data-v-161b5689] {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  font-size: 12px;\n}\n.preview_title[data-v-161b5689] {\r\n  font-size: 21px;\n}\n[data-v-161b5689].content1 .image_content {\r\n  max-width: 100px;\r\n  max-height: 100px;\n}\n[data-v-161b5689].content1 .image_content img {\r\n  width: 100%;\r\n  height: 100%;\n}\r\n", "", {"version":3,"sources":["D:/phpStudy/WWW/huoshu/application/index/view/article/edit/application/index/view/article/edit/edite_article.vue"],"names":[],"mappings":";AACA;EACA,aAAA;EACA,oBAAA;CACA;AACA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;CACA;AACA;EACA,cAAA;CACA;AACA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,sBAAA;EAAA,kCAAA;UAAA,0BAAA;CACA;AACA;EACA,kBAAA;EACA,iBAAA;CACA;AACA;EACA,iBAAA;EACA,iBAAA;CACA;AACA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,gBAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;EACA,iBAAA;EACA,kBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;CACA","file":"edite_article.vue","sourcesContent":["<style scoped>\r\n.editer {\r\n  margin: 10px;\r\n  margin-bottom: 50px;\r\n}\r\n.editer .content {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  line-height: 25px;\r\n  letter-spacing: 1px;\r\n}\r\n.editer .padding10 {\r\n  padding: 10px;\r\n}\r\n.right {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.content1 {\r\n  background: #eeee;\r\n  min-height: 40px;\r\n}\r\n.content2 {\r\n  min-height: 40px;\r\n  background: #fff;\r\n}\r\n.label_all {\r\n  display: flex;\r\n  font-size: 12px;\r\n}\r\n.preview_title {\r\n  font-size: 21px;\r\n}\r\n:global(.content1 .image_content) {\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n:global(.content1 .image_content img) {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n</style>\r\n\r\n<template>\r\n  <div class=\"editer \">\r\n    <div class=\"container\">\r\n      <div class=\"title\">\r\n        <input type=\"text\" class=\"form-control\" ref=\"title_input\" v-show=\"!preview\" :value=\"$store.state.article.title\" />\r\n        <div v-show=\"preview\" class=\"preview_title\">{{$store.state.article.title}}</div>\r\n        <div class=\"label_all padding10\">\r\n          <span class=\"label_title\">更新时间：</span>\r\n          <span class=\"label_content\">{{$store.state.article.update_time}}</span>\r\n        </div>\r\n        <div class=\"padding10 right\">\r\n          <button class=\"btn btn-primary\" id=\"preview_btn\" @click=\"preivew_btn\" v-show=\"!preview\">预览</button>\r\n          <button class=\"btn btn-primary\" id=\"preview_btn\" @click=\"preivew_btn\" v-show=\"preview\">返回</button>\r\n          <button class=\"btn btn-success\" id=\"save_btn\" @click=\"save_btn\" v-show=\"!preview\">保存</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"content\">\r\n        <div class=\"content1\" v-html=\"$store.state.article.content\" contenteditable=\"true\" ref=\"content\" v-show=\"!preview\"> </div>\r\n        <div class=\"content2\" v-html=\"$store.state.article.content\" v-show=\"preview\"> </div>\r\n      </div>\r\n      <!-- <pre> -->\r\n      <!-- {{article}} -->\r\n      <!-- </pre> -->\r\n    </div>\r\n    <Bottom />\r\n  </div>\r\n</template>\r\n<script>\r\nimport Bottom from \"./bottom.vue\";\r\nimport { set_article, set_dom } from \"../detail/vuex/actionTypes\";\r\nimport { save_articel } from \"../../util/fetch\";\r\nexport default {\r\n  data() {\r\n    return {\r\n      preview: false\r\n    };\r\n  },\r\n  components: { Bottom },\r\n  created() {},\r\n  mounted() {\r\n    var self = this;\r\n    this.dom_title_input = this.$refs[\"title_input\"];\r\n    this.dom_content_input = this.$refs[\"content\"];\r\n    this.$store.dispatch(set_dom, {\r\n      title: self.dom_title_input,\r\n      content: self.dom_content_input\r\n    });\r\n  },\r\n  methods: {\r\n    change_title() {},\r\n    preivew_btn() {\r\n      var html = this.dom_content_input.innerHTML;\r\n      $article.content = html;\r\n      this.$data.preview = !this.$data.preview;\r\n    },\r\n    save_before() {\r\n      var { dispatch, state } = this.$store;\r\n      var { article } = state;\r\n      var content = this.dom_content_input.innerHTML;\r\n      var title = this.dom_title_input.value;\r\n      article.title = title;\r\n      article.content = content;\r\n      dispatch(set_article, { article });\r\n    },\r\n    save_btn() {\r\n      var { dispatch, state } = this.$store;\r\n      var { article } = state;\r\n      this.save_before();\r\n      save_articel({\r\n        data: article,\r\n        before() {\r\n          var index = layer.load(1, {\r\n            shade: [0.1, \"#fff\"] //0.1透明度的白色背景\r\n          });\r\n        },\r\n        success(jsonReturn) {\r\n          //   debugger;\r\n          layer.closeAll();\r\n          layer.msg(\"保存完毕\");\r\n          $article = JSON.parse(jsonReturn);\r\n        }\r\n      });\r\n    }\r\n  }\r\n};\r\n</script>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "editer " },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "title" }, [
          _c("input", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.preview,
                expression: "!preview"
              }
            ],
            ref: "title_input",
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.$store.state.article.title }
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
            [_vm._v(_vm._s(_vm.$store.state.article.title))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "label_all padding10" }, [
            _c("span", { staticClass: "label_title" }, [_vm._v("更新时间：")]),
            _vm._v(" "),
            _c("span", { staticClass: "label_content" }, [
              _vm._v(_vm._s(_vm.$store.state.article.update_time))
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
            domProps: { innerHTML: _vm._s(_vm.$store.state.article.content) }
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
            domProps: { innerHTML: _vm._s(_vm.$store.state.article.content) }
          })
        ])
      ]),
      _vm._v(" "),
      _c("Bottom")
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-161b5689", esExports)
  }
}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(67);

var _icon2 = _interopRequireDefault(_icon);

var _actionTypes = __webpack_require__(35);

var _fetch = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.file = this.$refs["file"];
    this.file.onchange = this.chang_file;
  },

  methods: {
    save_before: function save_before() {
      var _$store = this.$store,
          dispatch = _$store.dispatch,
          state = _$store.state;
      var article = state.article,
          dom = state.dom;

      var content = dom.content.innerHTML;
      var title = dom.title.value;
      article.title = title;
      article.content = content;
      dispatch(_actionTypes.set_article, { article: article });
    },
    chang_file: function chang_file() {
      var self = this;
      var _$store2 = this.$store,
          dispatch = _$store2.dispatch,
          state = _$store2.state;
      var article = state.article,
          dom = state.dom;

      (0, _fetch.upload_image_in_artitle)({
        data: self.file.files,
        success: function success(resjson) {
          var returnJson = JSON.parse(resjson);
          if (returnJson.success) {
            article.content += "\n            <div   class=\"image_content\">\n              <img src=\"" + returnJson.message + "\" />\n            </div>\n             <br />\n            ";
            dispatch(_actionTypes.set_article, { article: article });
          }
        }
      });
    },
    click_file: function click_file() {
      var self = this;
      this.save_before();
      self.file.click();
    },
    click_type: function click_type() {
      this.save_before();
    },
    click_save: function click_save() {
      this.save_before();
    }
  },
  components: {
    Icon: _icon2.default
  }
}; //
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

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_78810384_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_bottom_vue__ = __webpack_require__(199);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-78810384"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_bottom_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_78810384_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_bottom_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\article\\edit\\bottom.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78810384", Component.options)
  } else {
    hotAPI.reload("data-v-78810384", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2d4fc63e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78810384\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./bottom.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78810384\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./bottom.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.bottom[data-v-78810384] {\r\n  border-top: 1px solid #eee;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  background: #fff;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\n}\n.item[data-v-78810384] {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1;\r\n          flex: 1;\r\n  cursor: pointer;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 4px;\r\n  height: 40px;\n}\n.item_font[data-v-78810384] {\r\n  font-size: 12px;\r\n  padding: 0px;\n}\r\n\r\n", "", {"version":3,"sources":["D:/phpStudy/WWW/huoshu/application/index/view/article/edit/application/index/view/article/edit/bottom.vue"],"names":[],"mappings":";AAqFA;EACA,2BAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;CACA;AACA;EACA,oBAAA;EAAA,gBAAA;UAAA,QAAA;EACA,gBAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,cAAA;EACA,yBAAA;EAAA,gCAAA;UAAA,wBAAA;EACA,0BAAA;EAAA,4BAAA;UAAA,oBAAA;EACA,6BAAA;EAAA,8BAAA;EAAA,+BAAA;UAAA,uBAAA;EACA,aAAA;EACA,aAAA;CACA;AACA;EACA,gBAAA;EACA,aAAA;CACA","file":"bottom.vue","sourcesContent":["<template>\r\n  <div class=\"bottom\">\r\n    <div class=\"item\" @click=\"click_file\">\r\n      <div>\r\n        <Icon :icon=\"'tupian'\" />\r\n      </div>\r\n      <div class=\"item_font\">图片</div>\r\n    </div>\r\n\r\n    <div @click=\"click_type\" class=\"item\">\r\n      <div>\r\n        <Icon :icon=\"'tag'\" />\r\n      </div>\r\n      <div class=\"item_font\">分类</div>\r\n    </div>\r\n\r\n    <div class=\"item\" @click=\"click_save\">\r\n      <div>\r\n        <Icon :icon=\"'save'\" />\r\n      </div>\r\n      <div class=\"item_font\">保存</div>\r\n    </div>\r\n    <input type=\"file\" v-show=\"false\" ref=\"file\">\r\n  </div>\r\n</template>\r\n<script>\r\nimport Icon from \"../../components/icon.vue\";\r\nimport { set_article } from \"../detail/vuex/actionTypes\";\r\nimport { upload_image_in_artitle } from \"../../util/fetch\";\r\nexport default {\r\n  data() {\r\n    return {};\r\n  },\r\n  mounted() {\r\n    this.file = this.$refs[\"file\"];\r\n    this.file.onchange = this.chang_file;\r\n  },\r\n  methods: {\r\n    save_before() {\r\n      var { dispatch, state } = this.$store;\r\n      var { article, dom } = state;\r\n      var content = dom.content.innerHTML;\r\n      var title = dom.title.value;\r\n      article.title = title;\r\n      article.content = content;\r\n      dispatch(set_article, { article });\r\n    },\r\n    chang_file() {\r\n      var self = this;\r\n      var { dispatch, state } = this.$store;\r\n      var { article, dom } = state;\r\n      upload_image_in_artitle({\r\n        data: self.file.files,\r\n        success(resjson) {\r\n          var returnJson = JSON.parse(resjson);\r\n          if (returnJson.success) {\r\n            article.content += `\r\n            <div   class=\"image_content\">\r\n              <img src=\"${returnJson.message}\" />\r\n            </div>\r\n             <br />\r\n            `;\r\n            dispatch(set_article, { article });\r\n          }\r\n        }\r\n      });\r\n    },\r\n    click_file() {\r\n      var self = this;\r\n      this.save_before();\r\n      self.file.click();\r\n    },\r\n    click_type() {\r\n      this.save_before();\r\n    },\r\n    click_save() {\r\n      this.save_before();\r\n    }\r\n  },\r\n  components: {\r\n    Icon\r\n  }\r\n};\r\n</script>\r\n<style scoped>\r\n.bottom {\r\n  border-top: 1px solid #eee;\r\n  display: flex;\r\n  background: #fff;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n.item {\r\n  flex: 1;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding: 4px;\r\n  height: 40px;\r\n}\r\n.item_font {\r\n  font-size: 12px;\r\n  padding: 0px;\r\n}\r\n\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bottom" }, [
    _c("div", { staticClass: "item", on: { click: _vm.click_file } }, [
      _c("div", [_c("Icon", { attrs: { icon: "tupian" } })], 1),
      _vm._v(" "),
      _c("div", { staticClass: "item_font" }, [_vm._v("图片")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "item", on: { click: _vm.click_type } }, [
      _c("div", [_c("Icon", { attrs: { icon: "tag" } })], 1),
      _vm._v(" "),
      _c("div", { staticClass: "item_font" }, [_vm._v("分类")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "item", on: { click: _vm.click_save } }, [
      _c("div", [_c("Icon", { attrs: { icon: "save" } })], 1),
      _vm._v(" "),
      _c("div", { staticClass: "item_font" }, [_vm._v("保存")])
    ]),
    _vm._v(" "),
    _c("input", {
      directives: [
        { name: "show", rawName: "v-show", value: false, expression: "false" }
      ],
      ref: "file",
      attrs: { type: "file" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-78810384", esExports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var set_comments = exports.set_comments = "set_comments";
var set_current_page = exports.set_current_page = "set_current_page";
var set_page_count = exports.set_page_count = "set_page_count";
var order_comments = exports.order_comments = "order_comments";
var set_article = exports.set_article = "set_article";
var set_dom = exports.set_dom = "set_dom";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header_back = __webpack_require__(9);

var _Header_back2 = _interopRequireDefault(_Header_back);

var _edite_article = __webpack_require__(150);

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

exports.default = {
  data: function data() {
    return {
      article: $article,
      msg: "deital"
    };
  },
  created: function created() {},

  components: {
    Header_back: _Header_back2.default,
    Article: _edite_article2.default
  },
  methods: {
    setResult: function setResult(result) {
      this.result = result;
    }
  }
};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bottom = __webpack_require__(196);

var _bottom2 = _interopRequireDefault(_bottom);

var _actionTypes = __webpack_require__(35);

var _fetch = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      preview: false
    };
  },

  components: { Bottom: _bottom2.default },
  created: function created() {},
  mounted: function mounted() {
    var self = this;
    this.dom_title_input = this.$refs["title_input"];
    this.dom_content_input = this.$refs["content"];
    this.$store.dispatch(_actionTypes.set_dom, {
      title: self.dom_title_input,
      content: self.dom_content_input
    });
  },

  methods: {
    change_title: function change_title() {},
    preivew_btn: function preivew_btn() {
      var html = this.dom_content_input.innerHTML;
      $article.content = html;
      this.$data.preview = !this.$data.preview;
    },
    save_before: function save_before() {
      var _$store = this.$store,
          dispatch = _$store.dispatch,
          state = _$store.state;
      var article = state.article;

      var content = this.dom_content_input.innerHTML;
      var title = this.dom_title_input.value;
      article.title = title;
      article.content = content;
      dispatch(_actionTypes.set_article, { article: article });
    },
    save_btn: function save_btn() {
      var _$store2 = this.$store,
          dispatch = _$store2.dispatch,
          state = _$store2.state;
      var article = state.article;

      this.save_before();
      (0, _fetch.save_articel)({
        data: article,
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
}; //
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

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_1403392c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(179);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_1403392c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1403392c", Component.options)
  } else {
    hotAPI.reload("data-v-1403392c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 68:
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

exports.default = {
  props: {
    icon: String
  },
  data: function data() {
    return {};
  }
};

/***/ })

},[146]);
//# sourceMappingURL=article_edit.js.map