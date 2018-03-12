<style>
._media_object_wrapper {
  max-width: 200px;
  max-height: 200px;
  display: inline-block;
}
._media_object {
  max-width: 200;
  max-height: 200;
}

._media {
  margin: 10;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
}
.page_all {
  text-align: center;
}
.content_show {
  height: 48px;
  overflow: hidden;
}
.icon_fire {
  padding: 5px 0px 5px 0px;
  margin: 0 5px 0 5px;
  position: relative;
  border-bottom: 1px solid #eee;
}
.icon_fire .icon {
  font-size: 30px;
}
.icon_fire::after {
  content: "";
  width: 104px;
  height: 1px;
  position: absolute;
  background: orange;
  top: 39px;
  left: 0px;
}
</style>
<template>
  <div class="list_all">
    <div class="icon_fire">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-huoyan"></use>
      </svg>
      7天排行版
    </div>
    <div class="media _media" v-bind:key='index' v-for="(item,index) in  list">
      <div class="media-left">
        <a href="#" class="_media_object_wrapper">
          <img class="media-object _media_object" :src="item.image_src" />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">
          <a :href="'/huoshu/public/index/article/detail?id='+item.id">{{item.title}}</a>
        </h4>
        <div v-html="item.content" class="content_show"></div>
      </div>
    </div>

    <!-- 分页 -->
    <nav class="page_all" aria-label="Page navigation">
      <ul class="pagination">
        <li v-show="!show_prev">
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for='item in page' :class="{active:currentPage==item}">
          <a href="#" @click="pageItemClick(item)">{{item}}</a>
        </li>
        <li v-show="!show_next">
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
    page: Number,
    currentPage: Number,
    changePage: Function,
    changeResultAndPage: Function
  },
  data() {
    return {};
  },
  computed: {
    show_prev: function() {
      if (this.currentPage) {
        return this.currentPage - 1 <= 0;
      }
      return false;
    },
    show_next: function() {
      if (this.currentPage && this.page) {
        return this.currentPage >= this.page;
      }
      return false;
    }
  },
  created() {},
  methods: {
    getList() {
      var self = this;
      ajax({
        url: "http://localhost/huoshu/public/index/index/getList",
        type: "post",
        data: {
          currentPage: this.currentPage
        },
        before() {
          var index = layer.load(1, {
            shade: [0.1, "#fff"] //0.1透明度的白色背景
          });
        },
        success(result) {
          layer.closeAll();
          self.changeResultAndPage(
            JSON.parse(result)["result"],
            JSON.parse(result)["page"]
          );
        }
      });
    },
    pageItemClick(currentPage) {
      var self = this;
      this.changePage(currentPage);
      this.$nextTick(() => {
        self.getList();
      });
    }
  }
};
</script>