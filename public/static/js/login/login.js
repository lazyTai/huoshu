webpackJsonp([5],{

/***/ 16:
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
    Header: __webpack_require__(4).default
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(56);

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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_34a259ca_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(59);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
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

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c2fe6766", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34a259ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34a259ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n._form {\r\n  margin: 100px auto;\r\n  width: 400px;\n}\n.register {\r\n  font-size: 12px;\r\n  text-align: right;\r\n  line-height: 40px;\n}\r\n", "", {"version":3,"sources":["D:/phpStudy/WWW/huoshu/application/index/view/login/application/index/view/login/app.vue"],"names":[],"mappings":";AA8BA;EACA,mBAAA;EACA,aAAA;CACA;AACA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;CACA","file":"app.vue","sourcesContent":["<template>\r\n  <div>\r\n    <Header />\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-offset-1  col-xs-10 form-group\">\r\n          <label for=\"name\">name</label>\r\n          <input v-model=\"name\" type=\"name\" class=\"form-control\" id=\"name\" placeholder=\"name\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-10 col-xs-offset-1  form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input type=\"password\" v-model=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-10 col-xs-offset-1\">\r\n          <button class=\"btn btn-primary\" @click=\"login\">login</button>\r\n          <a class=\"register\">register</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<style>\r\n._form {\r\n  margin: 100px auto;\r\n  width: 400px;\r\n}\r\n.register {\r\n  font-size: 12px;\r\n  text-align: right;\r\n  line-height: 40px;\r\n}\r\n</style>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      msg: \"fuck\",\r\n      name: \"\",\r\n      password: \"\"\r\n    };\r\n  },\r\n  methods: {\r\n    login() {\r\n      var self = this;\r\n      ajax({\r\n        url: \"/huoshu/public/index/Login/logining\",\r\n        type: \"post\",\r\n        data: {\r\n          name: self.$data.name,\r\n          password: self.$data.password\r\n        },\r\n        success(json) {\r\n          var $result = JSON.parse(json);\r\n          if ($result[\"success\"]) {\r\n            layer.msg($result[\"result\"]);\r\n            location.href = \"/huoshu/public/index\";\r\n          } else {\r\n            layer.msg($result[\"result\"]);\r\n          }\r\n        }\r\n      });\r\n    }\r\n  },\r\n  components: {\r\n    Header: require(\"../components/Header.vue\").default\r\n  }\r\n};\r\n</script>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 59:
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

/***/ })

},[55]);
//# sourceMappingURL=login.js.map