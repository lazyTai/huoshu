webpackJsonp([5],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(116);

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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_34a259ca_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_34a259ca_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\login\\app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34a259ca", Component.options)
  } else {
    hotAPI.reload("data-v-34a259ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c3dfa228", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34a259ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34a259ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n._form {\r\n  margin: 100px auto;\r\n  width: 400px;\n}\n.register {\r\n  font-size: 12px;\r\n  text-align: right;\r\n  line-height: 40px;\n}\r\n", "", {"version":3,"sources":["D:/phpStudy/WWW/huoshu/application/index/view/login/application/index/view/login/app.vue"],"names":[],"mappings":";AA8BA;EACA,mBAAA;EACA,aAAA;CACA;AACA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;CACA","file":"app.vue","sourcesContent":["<template>\r\n  <div>\r\n    <Header />\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-offset-1  col-xs-10 form-group\">\r\n          <label for=\"name\">name</label>\r\n          <input v-model=\"name\" type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"name\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-10 col-xs-offset-1  form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input type=\"password\" v-model=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-10 col-xs-offset-1\">\r\n          <button class=\"btn btn-primary\" @click=\"login\">login</button>\r\n          <a class=\"register\">register</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<style>\r\n._form {\r\n  margin: 100px auto;\r\n  width: 400px;\r\n}\r\n.register {\r\n  font-size: 12px;\r\n  text-align: right;\r\n  line-height: 40px;\r\n}\r\n</style>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      msg: \"fuck\",\r\n      name: \"\",\r\n      password: \"\"\r\n    };\r\n  },\r\n  methods: {\r\n    login() {\r\n      var self = this;\r\n      ajax({\r\n        url: \"/huoshu/public/index/Login/logining\",\r\n        type: \"post\",\r\n        data: {\r\n          name: self.$data.name,\r\n          password: self.$data.password\r\n        },\r\n        success(json) {\r\n          var $result = JSON.parse(json);\r\n          if ($result[\"success\"]) {\r\n            layer.msg($result[\"result\"]);\r\n            location.href = \"/huoshu/public/index\";\r\n          } else {\r\n            layer.msg($result[\"result\"]);\r\n          }\r\n        }\r\n      });\r\n    }\r\n  },\r\n  components: {\r\n    Header: require(\"../components/Header.vue\").default\r\n  }\r\n};\r\n</script>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Header"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-offset-1  col-xs-10 form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "name", id: "name", placeholder: "name" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-10 col-xs-offset-1  form-group" }, [
            _c("label", { attrs: { for: "exampleInputPassword1" } }, [
              _vm._v("Password")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                id: "exampleInputPassword1",
                placeholder: "Password"
              },
              domProps: { value: _vm.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-10 col-xs-offset-1" }, [
            _c(
              "button",
              { staticClass: "btn btn-primary", on: { click: _vm.login } },
              [_vm._v("login")]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "register" }, [_vm._v("register")])
          ])
        ])
      ])
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-34a259ca", esExports)
  }
}

/***/ }),

/***/ 17:
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

exports.default = {
  props: {
    setResult: Function
  },
  data: function data() {
    return {
      user: $user,
      search_input: ""
    };
  },

  methods: {
    tipLayer: function tipLayer() {},
    click_search: function click_search() {
      var self = this;
      ajax({
        type: "post",
        url: "/huoshu/public/index/index/getList_by_title",
        data: {
          title: self.$data.search_input
        },
        before: function before() {
          var index = layer.load(1, {
            shade: [0.1, "#fff"] //0.1透明度的白色背景
          });
        },
        success: function success(result) {
          layer.closeAll();
          // debugger;
          self.setResult && self.setResult(JSON.parse(result));
        }
      });
    }
  },
  components: {
    Tip: __webpack_require__(32).default
  }
};

/***/ }),

/***/ 18:
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

exports.default = {
  props: {
    left: String
  },
  data: function data() {
    return {
      msg: "asda",
      show: false,
      children_top: 0,
      children_left: 0,
      children_width: 0,
      children_height: 0
    };
  },

  methods: {
    _mousedown: function _mousedown() {
      this.$data.show = !this.$data.show;
    },
    _mouseup: function _mouseup() {}
  },
  mounted: function mounted() {
    var $tip_children = this.$refs["tip_children"];
    var all_width = document.body.offsetWidth;
    var _height = $tip_children.offsetHeight;
    var _width = $tip_children.offsetWidth;
    var _top = $tip_children.offsetTop;
    var _left = $tip_children.offsetLeft;

    this.$data.children_top = _top;
    this.$data.children_left = _left;
    // if (this.left) {
    //   this.$data.children_left = this.left;
    // }
    if (all_width < 768) {
      /* 小屏幕 */
      this.$data.children_left = 50;
    }
    if (768 < all_width) {
      this.$data.children_left = -100;
    }
    this.$data.children_width = _width;
    this.$data.children_height = _height;

    // if (_width + _left > all_width - 200) {
    //   debugger;
    //   this.$data.children_left = _left - 200;
    // }
  },

  computed: {
    tip_tip_style: function tip_tip_style() {
      return {};
    },
    tip_style: function tip_style() {
      var _$data = this.$data,
          children_top = _$data.children_top,
          children_left = _$data.children_left,
          children_width = _$data.children_width,
          children_height = _$data.children_height;

      return {
        position: "absolute",
        top: children_height + children_top + "px",
        left: parseInt(children_left) + children_width / 2 + "px"
      };
    }
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Header_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_695e56a0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__(34);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_695e56a0_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-695e56a0", Component.options)
  } else {
    hotAPI.reload("data-v-695e56a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_tip_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_tip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_tip_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_tip_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_tip_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_37f2bfb8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_tip_vue__ = __webpack_require__(33);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_tip_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_37f2bfb8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_tip_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\tip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37f2bfb8", Component.options)
  } else {
    hotAPI.reload("data-v-37f2bfb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "tip_children", staticClass: "tip_tip", style: _vm.tip_tip_style },
    [
      _c("div", { on: { mousedown: _vm._mousedown } }, [_vm._t("children")], 2),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            }
          ],
          ref: "tip_tiptip",
          style: _vm.tip_style
        },
        [_vm._t("tip")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-37f2bfb8", esExports)
  }
}

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar navbar-default" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "nav collapse navbar-collapse",
          attrs: { id: "bs-example-navbar-collapse-1" }
        },
        [
          _c("div", { staticClass: "navbar-form navbar-left" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search_input,
                    expression: "search_input"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Search" },
                domProps: { value: _vm.search_input },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search_input = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button" },
                on: { click: _vm.click_search }
              },
              [_vm._v("提交")]
            )
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "nav navbar-nav navbar-right" }, [
            _vm.user
              ? _c(
                  "li",
                  {
                    staticClass: "dropdown",
                    staticStyle: {
                      "padding-top": "17px",
                      "text-align": "center"
                    },
                    attrs: { id: "tipLayer" }
                  },
                  [
                    _c("Tip", { attrs: { left: "50" } }, [
                      _c(
                        "a",
                        { attrs: { slot: "children" }, slot: "children" },
                        [_vm._v(_vm._s(_vm.user.name))]
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticStyle: {
                            width: "100px",
                            marginTop: "10px",
                            padding: "0px 10px",
                            background: "#fff"
                          },
                          attrs: { slot: "tip" },
                          slot: "tip"
                        },
                        [
                          _c(
                            "li",
                            {
                              staticStyle: {
                                padding: "10px 0px",
                                cursor: "pointer"
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "/huoshu/public/index/my_self"
                                  }
                                },
                                [_vm._v("详细信息")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("li", { staticStyle: { cursor: "pointer" } }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "/huoshu/public/index/login/unlogin"
                                }
                              },
                              [_vm._v("注销")]
                            )
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.user
              ? _c("li", { staticClass: "dropdown" }, [
                  _c("a", { attrs: { href: "/huoshu/public/index/Login/" } }, [
                    _vm._v("登录/注册")
                  ])
                ])
              : _vm._e()
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-header" }, [
      _c(
        "button",
        {
          staticClass: "navbar-toggle collapsed",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#bs-example-navbar-collapse-1",
            "aria-expanded": "false"
          }
        },
        [
          _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")]),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "navbar-brand",
          attrs: { href: "/huoshu/public/index" }
        },
        [_vm._v("活书")]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-695e56a0", esExports)
  }
}

/***/ }),

/***/ 54:
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

exports.default = {
  data: function data() {
    return {
      msg: "fuck",
      name: "",
      password: ""
    };
  },

  methods: {
    login: function login() {
      var self = this;
      ajax({
        url: "/huoshu/public/index/Login/logining",
        type: "post",
        data: {
          name: self.$data.name,
          password: self.$data.password
        },
        success: function success(json) {
          var $result = JSON.parse(json);
          if ($result["success"]) {
            layer.msg($result["result"]);
            location.href = "/huoshu/public/index";
          } else {
            layer.msg($result["result"]);
          }
        }
      });
    }
  },
  components: {
    Header: __webpack_require__(31).default
  }
};

/***/ })

},[115]);
//# sourceMappingURL=login.js.map