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