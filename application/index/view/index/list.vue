
<style scoped>
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
.user_infor {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
}
.user_infor .header_image_url {
  width: 30px;
  height: 30px;
  border: 1px solid #eee;
  border-radius: 50%;
}
.user_infor .header_image_url img {
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 50%;
}
.user_infor .user_name {
  font-size: 14px;
  padding-left: 8px;
}
.media-right {
  margin-left: -20px;
}
.media-right ._media_object_wrapper {
  width: 50%;
  height: 80%;
}
.content_show {
  margin-bottom: 8px;
}

.list {
  padding: 10px;
}
.list .list_item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.list .list_item .user_info {
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}
.list .list_item .user_info .list_item_user_image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.list .list_item .user_info .list_item_user_image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.list .list_item .user_info .list_item_user_name {
  padding-left: 10px;
}
.list .list_item .down {
  display: flex;
}
.list .list_item .down .list_left {
  flex: 1;
}
.list_left .list_item_articel_title {
  padding-bottom: 10px;
}
.list_left .list_item_articel_content {
  padding-bottom: 10px;
  min-height: 50px;
  max-height: 80px;
  overflow: hidden;
}
.list_right .ariticel_cover {
  width: 100px;
  height: 100px;
}
.list_right .ariticel_cover img {
  width: 100%;
  height: 100%;
}
.list_all {
  margin-bottom: 50px;
}
:global(.list_item_articel_content img) {
  width: 0px;
  height: 0px;
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
    <div class="list">
      <div class="list_item" v-bind:key='index' v-for="(item,index) in  $store.state.result">
        <div class="user_info">
          <div class="list_item_user_image">
            <img :src="item.head_image_url" alt="" v-show="item.head_image_url">
            <img :src="'/huoshu/public/uploads/404.jpg'" alt="" v-show="!item.head_image_url">

          </div>
          <div class="list_item_user_name">
            {{item.user_name}}
          </div>
        </div>

        <div class="down">
          <div class="list_left">
            <div class="list_item_articel_title">
              <a :href="'/huoshu/public/index/article/detail?id='+item.id">
                {{item.title}}</a>
            </div>
            <div class="list_item_articel_content" v-html="item.content">
            </div>
            <div class="list_item_articel_like_num_update_time">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-heart-copy"></use>
              </svg>
              {{item.like_num}}
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shijian"></use>
              </svg>
              <small>
                {{dateFtt("yyyy-MM-dd ",item.update_time)}}
              </small>
            </div>
          </div>

          <div class="list_right">
            <div class="ariticel_cover">
              <a :href="'/huoshu/public/index/article/detail?id='+item.id" class="_media_object_wrapper">
                <img :src="item.image_src" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dateFtt } from "../util/util";
import _ from "underscore";
import { get_index_list } from "../util/fetch";
import {
  set_result_list_current_page,
  set_current_page
} from "./vuex/actionTypes";

export default {
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    dateFtt,
    init() {
      var self = this;
      window.addEventListener(
        "scroll",
        _.throttle(function() {
          // console.log("底部必读");
          // console.log("window.pageYOffset", window.pageYOffset);
          // console.log("window.innerHeight ", window.innerHeight);
          // console.log(
          //   "   document.documentElement.scrollHeight ",
          //   document.documentElement.scrollHeight
          // );
          // console.log(
          //   "  window.pageYOffset + window.innerHeight >=  document.documentElement.scrollHeight ",
          //   window.pageYOffset + window.innerHeight >=
          //     document.documentElement.scrollHeight-10
          // );
          if (
            window.pageYOffset + window.innerHeight >=
            document.documentElement.scrollHeight - 10
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
      var { currentPage, page } = this.$store.state;
      var { dispatch } = this.$store;
      if (currentPage <= page) {
        /* 滚动的时候，加页数 */
        self.getList({ currentPage: currentPage + 1 });
      }
    },
    getList(data) {
      var self = this;
      var { currentPage, result } = self.$store.state;
      var { dispatch } = self.$store;
      get_index_list({
        data: { currentPage: data.currentPage },
        success(json) {
          var jsonResult = JSON.parse(json);
          if (jsonResult["result"].length > 0) {
            result = result.concat(jsonResult["result"]);
            debugger;
            dispatch(set_result_list_current_page, {
              currentPage: currentPage + 1,
              result: result
            });
          } else {
            console.log("这回真的没有了");
            let toast = self.$toasted.show("这回真的没有了 !!", {
              theme: "primary",
              position: "top-center",
              duration: 1000
            });
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
