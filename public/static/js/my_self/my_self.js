webpackJsonp([3],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uuid = uuid;
exports.dateFtt = dateFtt;
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
/**************************************时间格式化处理************************************/
function dateFtt(fmt, val) {
    //author: meizz   
    var date = new Date(val);
    var o = {
        "M+": date.getMonth() + 1, //月份   
        "d+": date.getDate(), //日   
        "h+": date.getHours(), //小时   
        "m+": date.getMinutes(), //分   
        "s+": date.getSeconds(), //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 42:
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

exports.default = {
  data: function data() {
    return {
      msg: "fuck"
    };
  },

  components: {
    Header: __webpack_require__(16).default,
    Infor: __webpack_require__(84).default
  }
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(18);

var _stringify2 = _interopRequireDefault(_stringify);

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
      user: $user,
      showAlert: true,
      show_upload_button: false
    };
  },
  mounted: function mounted() {
    var self = this;
    self.image_input = this.$refs["file_header_image"];
    self.image_input.addEventListener("change", function () {
      var formdata = new FormData();
      formdata.append("file", self.image_input.files[0]);
      ajaxForm({
        data: formdata,
        url: "/huoshu/public/index/my_self/changeImage",
        success: function success(json) {
          self.$data.user.profile["image_url"] = JSON.parse(json);
        }
      });
    });
  },

  methods: {
    _upload: function _upload() {
      this.image_input.click();
    },
    closeAlert: function closeAlert() {
      this.$data.showAlert = false;
    },
    sureAlert: function sureAlert() {
      console.log("sureAlert");
    },
    cancelAlert: function cancelAlert() {
      console.log("cancelAlert");
    },
    save: function save() {
      ajax({
        data: {
          user: (0, _stringify2.default)($user),
          profile: (0, _stringify2.default)($user.profile)
        },
        type: "post",
        url: "/huoshu/public/index/my_self/updateUserAndProfile",
        before: function before() {
          layer.load(1, {
            shade: [0.1, "#fff"] //0.1透明度的白色背景
          });
        },
        success: function success(json) {
          layer.closeAll();
          layer.msg("保存成功");
        }
      });
    }
  },
  components: {
    Alert: __webpack_require__(87).default
  }
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(17);

exports.default = {
  props: {
    show: Boolean,
    close: Function,
    width: Number,
    height: Number,
    isMark: Boolean,
    sure: Function,
    cancel: Function
    // body: Object
  },
  created: function created() {
    var self = this;
  },

  methods: {
    _cancel: function _cancel() {
      this.cancel && this.cancel.call(this);
      this._closeAlert1();
    },
    _sure: function _sure() {
      this.sure && this.sure.call(this);
      this._closeAlert1();
    },
    _closeAlert1: function _closeAlert1() {
      var self = this;
      self.$data._show = false;
      self.close && self.close.call(self);
    },
    _mousedown: function _mousedown(e) {
      this.startx = e.clientX;
      this.starty = e.clientY;
      this.oldx = e.clientX;
      this.oldy = e.clientY;
      this.diffx = 0;
      this.diffy = 0;
      this.isDown = true;
      document.addEventListener("mouseup", this._mouseUp);
      document.addEventListener("mousemove", this._mouseMove);
    },
    _mouseUp: function _mouseUp(e) {
      this.isDown = false;
    },
    _mouseMove: function _mouseMove(e) {
      if (this.isDown) {
        this.startx = e.clientX;
        this.starty = e.clientY;
        this.diffx = this.oldx - this.startx;
        this.diffy = this.oldy - this.starty;
        this.oldx = e.clientX;
        this.oldy = e.clientY;

        this.left -= this.diffx;
        this.top -= this.diffy;
      }
    },
    move: function move(top, left) {
      var _width = this.width || 200;
      var _height = this.height || 200;
      // var $alert = this.$refs[this.$data.uuid];
      this.top = top - _height / 2;
      this.left = left - _width / 2;
      // $alert.style.left = left - $alert.offsetWidth / 2;
      // $alert.style.top = top - $alert.offsetHeight / 2;
    }
  },
  data: function data() {
    var _show = this.show;
    return {
      top: 0,
      left: 0,
      _show: _show
    };
  },

  computed: {
    style_alert: function style_alert() {
      var _uuid = (0, _util.uuid)();
      var _width = this.width || 200;
      var _height = this.height || 200;
      var _top = this.top;
      var _left = this.left;
      var _show = this.$data._show;
      return {
        background: "#fff",
        width: _width + "px",
        height: _height + "px",
        top: _top + "px",
        left: _left + "px",
        boxSizing: "border-box",
        border: "1px solid #eee",
        display: _show ? "flex" : "none",
        position: "absolute",
        flexDirection: "column",
        zIndex: 99
      };
    },
    style_alert_header: function style_alert_header() {
      var _width = this.width || 200;
      var _height = this.height || 200;
      var _top = this.top;
      var _left = this.left;
      return {
        width: _width + "px",
        padding: 10,
        borderBottom: "1px solid #eee",
        display: "flex",
        cursor: "pointer"
        // border: "1px solid #eee"
      };
    },
    style_header_title_content: function style_header_title_content() {
      return {
        width: "100%"
      };
    },
    alert_body: function alert_body() {
      return {
        flex: 1,
        padding: 5
      };
    },
    style_alert_footer: function style_alert_footer() {
      return {
        padding: 10,
        borderTop: "1px solid #eee",
        textAlign: "right"
      };
    }
  },
  mounted: function mounted() {
    this._mousedown = this._mousedown.bind(this);
    this._mouseUp = this._mouseUp.bind(this);
    this._mouseMove = this._mouseMove.bind(this);
    if (this.isMark) {
      // if (true) {
      var $mark = document.querySelector(".mark");
      if ($mark) {} else {
        $mark = document.createElement("div");
        document.body.prepend($mark);
      }

      $mark.style.width = "100%";
      $mark.style.height = "100%";
      $mark.style.position = "absolute";
      $mark.style.background = "#222";
      $mark.style.top = "0";
      $mark.style.left = "0";
      $mark.style.zIndex = "1";
      $mark.style.opacity = ".5";
    }
    this.move.call(this, document.body.offsetHeight / 2, document.body.offsetWidth / 2);
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

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(78);

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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_619d5271_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(79)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_619d5271_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\my_self\\app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-619d5271", Component.options)
  } else {
    hotAPI.reload("data-v-619d5271", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("44bfcacc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-619d5271\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-619d5271\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_info_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_info_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_info_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_info_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_cca68de4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_info_vue__ = __webpack_require__(91);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_info_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_cca68de4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_info_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\my_self\\info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cca68de4", Component.options)
  } else {
    hotAPI.reload("data-v-cca68de4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("655e44ab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cca68de4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./info.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cca68de4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n._row .input-group-addon {\r\n  width: 80px;\r\n  overflow: hidden;\n}\n.image_wrapper {\r\n  width: 100;\r\n  height: 100;\r\n  display: inline-block;\r\n  border: 2px solid #ccc;\r\n  box-sizing: border-box;\n}\n.small {\r\n  color: #ccc;\r\n  margin: 10;\n}\n.image_wrapper img {\r\n  width: 100%;\r\n  height: 100%;\n}\n.label1 {\r\n  padding: 10;\r\n  font-size: 20px;\n}\n._row {\r\n  /* text-align: center; */\r\n  padding: 10;\r\n  margin: 10px;\n}\n.user_infor_defaitl {\r\n  border: 1px solid #eee;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  /* margin-left: 250; */\n}\r\n", "", {"version":3,"sources":["D:/phpStudy/WWW/huoshu/application/index/view/my_self/application/index/view/my_self/info.vue"],"names":[],"mappings":";AA4GA;EACA,YAAA;EACA,iBAAA;CACA;AACA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,YAAA;EACA,WAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;CACA;AACA;EACA,YAAA;EACA,gBAAA;CACA;AACA;EACA,yBAAA;EACA,YAAA;EACA,aAAA;CACA;AACA;EACA,uBAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;CACA","file":"info.vue","sourcesContent":["<template>\r\n  <div class=\"user_infor\">\r\n\r\n    <div class=\"user_infor_defaitl\">\r\n      <div class=\"_row\">\r\n        <span class=\"image_wrapper \" @mouseover=\"show_upload_button=!show_upload_button\" @mouseout=\"show_upload_button=!show_upload_button\">\r\n          <img :src=\"user.profile.image_url\" alt=\"touxain\">\r\n          <div v-show=\"show_upload_button\" @click=\"_upload\" style=\"marginTop:-15px;marginLeft:-2px;\r\n          padding:5px;\r\n          text-align:center;width:100px;cursor:pointer;position:absolute;background:#222;color:#fff;\">重新上传</div>\r\n          <input type=\"file\" v-show=\"false\" ref=\"file_header_image\">\r\n        </span>\r\n        <div>\r\n          <!-- <button class=\"btn btn-default\" @click=\"_upload\">重新上传</button> -->\r\n          <div class=\"small\">\r\n            支持jpg、jpeg、gif、png、bmp格式的图片\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"_row\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\" id=\"basic-addon1\">name</span>\r\n          <input type=\"text\" class=\"form-control\" v-model='user.name' aria-describedby=\"basic-addon1\">\r\n        </div>\r\n      </div>\r\n      <div class=\"_row\">\r\n\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\" id=\"basic-addon2\">address</span>\r\n          <input type=\"text\" class=\"form-control\" v-model='user.profile.address' aria-describedby=\"basic-addon2\">\r\n        </div>\r\n      </div>\r\n      <div class=\"_row\">\r\n        <button class=\"btn btn-primary\" @click='save'>保存</button>\r\n      </div>\r\n\r\n      <!-- <Alert :close=\"closeAlert\" :show=\"showAlert\" :sure=\"sureAlert\" :cancel=\"cancelAlert\">\r\n        <div>\r\n          shi fuck\r\n          <button>hllo</button>\r\n        </div>\r\n      </Alert> -->\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      user: $user,\r\n      showAlert: true,\r\n      show_upload_button: false\r\n    };\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    self.image_input = this.$refs[\"file_header_image\"];\r\n    self.image_input.addEventListener(\"change\", () => {\r\n      var formdata = new FormData();\r\n      formdata.append(\"file\", self.image_input.files[0]);\r\n      ajaxForm({\r\n        data: formdata,\r\n        url: \"/huoshu/public/index/my_self/changeImage\",\r\n        success(json) {\r\n          self.$data.user.profile[\"image_url\"] = JSON.parse(json);\r\n        }\r\n      });\r\n    });\r\n  },\r\n  methods: {\r\n    _upload() {\r\n      this.image_input.click();\r\n    },\r\n    closeAlert() {\r\n      this.$data.showAlert = false;\r\n    },\r\n    sureAlert() {\r\n      console.log(\"sureAlert\");\r\n    },\r\n    cancelAlert() {\r\n      console.log(\"cancelAlert\");\r\n    },\r\n    save() {\r\n      ajax({\r\n        data: {\r\n          user: JSON.stringify($user),\r\n          profile: JSON.stringify($user.profile)\r\n        },\r\n        type: \"post\",\r\n        url: \"/huoshu/public/index/my_self/updateUserAndProfile\",\r\n        before() {\r\n          layer.load(1, {\r\n            shade: [0.1, \"#fff\"] //0.1透明度的白色背景\r\n          });\r\n        },\r\n        success(json) {\r\n          layer.closeAll();\r\n          layer.msg(\"保存成功\");\r\n        }\r\n      });\r\n    }\r\n  },\r\n  components: {\r\n    Alert: require(\"../components/Alert\").default\r\n  }\r\n};\r\n</script>\r\n<style>\r\n._row .input-group-addon {\r\n  width: 80px;\r\n  overflow: hidden;\r\n}\r\n.image_wrapper {\r\n  width: 100;\r\n  height: 100;\r\n  display: inline-block;\r\n  border: 2px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n.small {\r\n  color: #ccc;\r\n  margin: 10;\r\n}\r\n.image_wrapper img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.label1 {\r\n  padding: 10;\r\n  font-size: 20px;\r\n}\r\n._row {\r\n  /* text-align: center; */\r\n  padding: 10;\r\n  margin: 10px;\r\n}\r\n.user_infor_defaitl {\r\n  border: 1px solid #eee;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  /* margin-left: 250; */\r\n}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Alert_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Alert_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Alert_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Alert_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_3ba81ace_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Alert_vue__ = __webpack_require__(90);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Alert_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_3ba81ace_hasScoped_false_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Alert_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "application\\index\\view\\components\\Alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ba81ace", Component.options)
  } else {
    hotAPI.reload("data-v-3ba81ace", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("78e9abb4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ba81ace\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.10@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ba81ace\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Alert.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "alert1", style: _vm.style_alert }, [
    _c(
      "div",
      {
        staticClass: "alert_header",
        style: _vm.style_alert_header,
        on: { mousedown: _vm._mousedown }
      },
      [
        _c(
          "span",
          {
            staticClass: "header_title_content",
            style: _vm.style_header_title_content
          },
          [_vm._v("header")]
        ),
        _vm._v(" "),
        _c("i", {
          staticClass: "glyphicon glyphicon-remove",
          on: { click: _vm._closeAlert1 }
        })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "alert_body", style: _vm.alert_body },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "alert_footer", style: _vm.style_alert_footer }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", on: { click: _vm._sure } },
        [_vm._v("确定")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-default", on: { click: _vm._cancel } },
        [_vm._v("取消")]
      )
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-3ba81ace", esExports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user_infor" }, [
    _c("div", { staticClass: "user_infor_defaitl" }, [
      _c("div", { staticClass: "_row" }, [
        _c(
          "span",
          {
            staticClass: "image_wrapper ",
            on: {
              mouseover: function($event) {
                _vm.show_upload_button = !_vm.show_upload_button
              },
              mouseout: function($event) {
                _vm.show_upload_button = !_vm.show_upload_button
              }
            }
          },
          [
            _c("img", {
              attrs: { src: _vm.user.profile.image_url, alt: "touxain" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.show_upload_button,
                    expression: "show_upload_button"
                  }
                ],
                staticStyle: {
                  marginTop: "-15px",
                  marginLeft: "-2px",
                  padding: "5px",
                  "text-align": "center",
                  width: "100px",
                  cursor: "pointer",
                  position: "absolute",
                  background: "#222",
                  color: "#fff"
                },
                on: { click: _vm._upload }
              },
              [_vm._v("重新上传")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: false,
                  expression: "false"
                }
              ],
              ref: "file_header_image",
              attrs: { type: "file" }
            })
          ]
        ),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "_row" }, [
        _c("div", { staticClass: "input-group" }, [
          _c(
            "span",
            { staticClass: "input-group-addon", attrs: { id: "basic-addon1" } },
            [_vm._v("name")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.name,
                expression: "user.name"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", "aria-describedby": "basic-addon1" },
            domProps: { value: _vm.user.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "name", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "_row" }, [
        _c("div", { staticClass: "input-group" }, [
          _c(
            "span",
            { staticClass: "input-group-addon", attrs: { id: "basic-addon2" } },
            [_vm._v("address")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.profile.address,
                expression: "user.profile.address"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", "aria-describedby": "basic-addon2" },
            domProps: { value: _vm.user.profile.address },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user.profile, "address", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "_row" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.save } },
          [_vm._v("保存")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "small" }, [
        _vm._v("\n          支持jpg、jpeg、gif、png、bmp格式的图片\n        ")
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-cca68de4", esExports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("Header"), _vm._v(" "), _c("Infor")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-619d5271", esExports)
  }
}

/***/ })

},[77]);
//# sourceMappingURL=my_self.js.map