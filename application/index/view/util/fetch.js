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