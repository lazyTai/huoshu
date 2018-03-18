export function read_sub_type_order_by_artitle_num(opt) {
    var self = this;
    ajax({
        type: 'post',
        url: '/huoshu/public/index/type/read_sub_type_order_by_artitle_num',
        before() {

        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}

export function get_index_list(opt) {
    var self = this;
    ajax({
        type: 'post',
        data: opt.data,
        url: "http://localhost/huoshu/public/index/index/getList",
        before() {
            var index = layer.load(1, {
                shade: [0.1, "#fff"] //0.1透明度的白色背景
            });
        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}

export function upload_image_header(opt) {
    var self = this;
    ajaxForm({
        type: 'post',
        data: opt.data,
        url: "http://localhost/huoshu/public/index/user/upload_head",
        progress(num) {
            layer.closeAll();
            layer.msg(num + '%');
        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}

export function unlogin(opt) {
    var self = this;
    ajax({
        type: 'post',
        data: opt.data,
        url: "http://localhost/huoshu/public/index/user/unlogin",
        before() {
            var index = layer.load(1, {
                shade: [0.1, "#fff"] //0.1透明度的白色背景
            });
        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}

export function edit_user_name(opt) {
    var self = this;
    ajax({
        type: 'post',
        data: opt.data,
        url: "http://localhost/huoshu/public/index/user/edit_user_name",
        before() {
            var index = layer.load(1, {
                shade: [0.1, "#fff"] //0.1透明度的白色背景
            });
        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}

export function upload_image_in_artitle(opt) {
    var self = this;
    ajaxForm({
        type: 'post',
        data: opt.data,
        url: "http://localhost/huoshu/public/index/article/upload_image",
        progress(num) {
            layer.closeAll();
            layer.msg(num + '%');
        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}

export function get_type_list_all(opt) {
    var self = this;
    ajax({
        type: 'post',
        data: opt.data,
        url: "http://localhost/huoshu/public/index/type/get_type_list_all",
        before() {
            var index = layer.load(1, {
                shade: [0.1, "#fff"] //0.1透明度的白色背景
            });
        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}

export function articel_add(opt) {
    var self = this;
    ajax({
        type: 'post',
        data: opt.data,
        url: "http://localhost/huoshu/public/index/article/add",
        before() {
            var index = layer.load(1, {
                shade: [0.1, "#fff"] //0.1透明度的白色背景
            });
        },
        success(returnJson) {
            layer.closeAll();
            opt.success && opt.success.call(self, returnJson);
        }
    })
}