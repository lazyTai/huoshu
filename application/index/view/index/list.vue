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
._media:last-child {
  border-bottom: none;
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

  </div>
</template>
<script>
import _ from "underscore";
import { get_index_list } from "../util/fetch";
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
  created() {
    this.init();
  },
  methods: {
    init() {
      var self = this;
      window.addEventListener(
        "scroll",
        _.throttle(function() {
          // console.log("底部必读");
          if (
            window.pageYOffset + window.innerHeight >=
            document.documentElement.scrollHeight
          ) {
            console.log("底部必读");
            self.scroll_bottom();
          }
        }, 200),
        false
      );
    },
    scroll_bottom() {
      var self = this;
      this.getList(self.currentPage + 1);
    },
    getList(currentPage) {
      var self = this;
      get_index_list({
        data: {
          currentPage
        },
        success(result) {
          var jsonResult = JSON.parse(result);
          if (jsonResult["result"].length > 0) {
            self.list.concat(jsonResult["result"]);
            self.changeResultAndPage(self.list, JSON.parse(result)["page"]);
          } else {
            layer.msg("这回真的没有了");
          }
        }
      });
    },
    pageItemClick(currentPage) {
      var self = this;
      this.changePage(currentPage);
      this.$nextTick(() => {
        self.getList(self.currentPage);
      });
    }
  }
};
</script>