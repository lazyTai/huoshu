<template>
  <div class="index_type">
    <div class="item">
      <div class="item_image_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tag"></use>
        </svg>
        <div class="title">全部分类</div>
      </div>
    </div>
    <div class="item">
      <div class="item_image_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guanfangshouquan"></use>
        </svg>
        <div class="title">24小时</div>
      </div>
    </div>
    <div class="item">
      <div class="item_image_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-badge"></use>
        </svg>
        <div class="title">7天</div>
      </div>
    </div>
    <div class="item">
      <div class="item_image_title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chun"></use>
        </svg>
        <div class="title">30天</div>
      </div>
    </div>
    <div class="item" v-bind:key="key" v-for="(item,key) in  type_all">
      <div class="item_image_title">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#'+item.image_url"></use>
        </svg>
        <div class="title">{{item.sub_type_name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { read_sub_type_order_by_artitle_num } from "../util/fetch";
export default {
  data() {
    return {
      type_all: []
    };
  },
  created() {
    var self = this;
    read_sub_type_order_by_artitle_num.call(this, {
      success(returnjson) {
        self.$data.type_all = JSON.parse(returnjson);
      }
    });
  }
};
</script>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.index_type {
  display: flex;
  flex-wrap: wrap;
}
.index_type .item {
  flex: 25%;
  padding: 5px 0px;
}
.index_type .item:hover {
  background: beige;
}
.index_type .item .title {
  font-size: 13px;
}
.item_image_title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
}
.item_image_title svg {
  font-size: 30px;
}
.item_image_title .title {
  padding: 3px;
}
.item .more {
  font-size: 12px;
  cursor: pointer;
}
</style>
