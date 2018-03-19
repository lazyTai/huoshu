
<template>
  <div id="comments">
    <div class="container">
      <div class="edit_place ">
        <div class="image_url">
          <img :src="user.image_url" alt="" v-show="user.image_url">
          <img :src="'/huoshu/public/uploads/404.jpg'" alt="" v-show="!user.image_url">
        </div>

        <textarea name="" id="" class="commonet_edit" rows="5" ref="comment"></textarea>
      </div>
      <div style="padding:5px;" class=" btn_place">
        <button class="btn btn-success ok_btn" @click="ok_btn">发表</button>
      </div>

      <div class="show_commonets">
        <div class="title">
          <span>{{$store.state.comments.length}}条评论 </span>
          <span class="right">
            <small @click="click_order('like_num','desc')">按喜欢排序 </small>
            <small @click="click_order('update_time','desc')">按时间正序</small>
            <small @click="click_order('update_time','asc')">按时间倒序</small>
          </span>
        </div>

        <div class="commet" :key="key" v-for="(comment_item,key) in $store.state.comments">
          <div class="commeter_info">
            <img :src="comment_item.user_image_url" alt="" class="image_url" />
            <div class="name_time_like">
              <div class="name">{{comment_item.user_name}}</div>
              <div class="time_like">
                <div class="like">like:{{comment_item.like_num}}
                  <span class="glyphicon glyphicon-thumbs-up" @click="like_up(comment_item.id)"></span>
                  <span class="glyphicon glyphicon-thumbs-down" @click="like_down(comment_item.id)"></span>
                </div>
                <div class="time">
                  <span class="glyphicon glyphicon-time"></span>
                  {{comment_item.update_time}}</div>
              </div>
            </div>
          </div>

          <div class="content">
            {{comment_item.comment}}
          </div>
        </div>
        <div class="load" v-show="loadding">
          <img src="/huoshu/public/static/layer/theme/default/loading-1.gif" alt=""> loading
        </div>

      </div>
    </div>

  </div>
</template>


<script>
import {
  read_comment,
  add_comment,
  comment_like_down,
  comment_like_up
} from "../util/fetch";
import _ from "underscore";
import {
  set_comments,
  set_page_count,
  set_current_page,
  order_comments
} from "./detail/vuex/actionTypes";

export default {
  data() {
    return {
      user: $user,
      loadding: false
    };
  },
  created() {
    this.init();
    this.event_scroll();
  },
  methods: {
    click_order(order, desc) {
      this.$store.dispatch(order_comments, { order, desc });
    },
    event_scroll() {
      var self = this;
      var beforeScrollTop = document.body.scrollTop;
      window.addEventListener(
        "scroll",
        _.throttle(function(event) {
          var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
          var direction = null;
          if (delta === 0) return false;
          direction = delta > 0 ? "down" : "up";
          beforeScrollTop = afterScrollTop;

          if (
            window.pageYOffset + window.innerHeight >=
            document.documentElement.scrollHeight - 10
          ) {
            if (self.$route.path == "/") {
              self.scroll_bottom(direction);
            }
          }
        }, 200),
        false
      );
    },
    scroll_bottom(direction) {
      /* 加页 */
      if (direction != "down") return false;
      var self = this;
      var { dispatch } = self.$store;
      var { currentPage, pageCount, comments } = self.$store.state;

      if (currentPage <= pageCount) {
        dispatch(set_current_page, { currentPage: currentPage + 1 });
        self.init();
      } else {
        Vue.toasted.show("没有评论了", { duration: 1000 });
      }
    },
    init(order = "like_num", asc = "desc") {
      var self = this;
      var { dispatch } = self.$store;
      var { currentPage, pageCount, comments } = self.$store.state;
      var data = {
        page: currentPage,
        article_id: $article["id"],
        order,
        asc
      };
      read_comment({
        data,
        before() {
          self.loadding = true;
        },
        success(returnJson) {
          self.loadding = false;
          dispatch(set_comments, { comments: JSON.parse(returnJson)["data"] });
          dispatch(set_page_count, {
            pageCount: JSON.parse(returnJson)["count"]
          });
        }
      });
    },
    ajax_click_down(comment_id) {
      var self = this;
      var data = {
        user: JSON.stringify($user),
        comment_id
      };
      comment_like_down({
        data,
        success(returnJsonStr) {
          var returnJson = JSON.parse(returnJsonStr);
          self.$toast.center(returnJson.message);
          if (returnJson.success) {
            self.loadding = true;
            self.init();
          }
        }
      });
    },
    ajax_lick_up(comment_id) {
      var self = this;
      var data = {
        user: JSON.stringify($user),
        comment_id
      };
      comment_like_up({
        data,
        success(returnJsonStr) {
          var returnJson = JSON.parse(returnJsonStr);
          this.$toast.center(returnJson.message);
          if (returnJson.success) {
            self.loadding = true;
            self.init();
          }
        }
      });
    },
    like_down(comment_id) {
      if ($user.status == 0) {
        Vue.toast("请先登录", {
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      } else {
        this.ajax_click_down(comment_id);
      }
    },
    like_up(comment_id) {
      if ($user.status == 0) {
        Vue.toast("请先登录", {
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      } else {
        this.ajax_lick_up(comment_id);
      }
    },
    page_click(page1) {
      this.$data.page = page1;
      this.init();
    },
    ok_btn() {
      var self = this;
      var html = this.$refs["comment"].value;
      var data = {
        article: JSON.stringify($article),
        user: $user,
        comment: html
      };
      var self = this;
      add_comment({
        data,
        success(returnJson) {
          Vue.toasted.show("保存成功");
          self.init();
          self.$refs["comment"].value = "";
        }
      });
    }
  }
};
</script>
<style scoped>
#comments {
  margin-bottom: 50px;
}
.glyphicon {
  cursor: pointer;
}
.commet {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  box-shadow: 0px 4px 5px #eee;
  margin-bottom: 50px;
}
.commet .content {
  padding: 10px;
  background: #eee;
}
.commet .commeter_info {
  display: flex;
}
.commet .name_time {
  font-size: 12px;
  padding-top: 10px;
  line-height: 20px;
}
.show_commonets .title {
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
.show_commonets .title small {
  font-size: 12px;
  cursor: pointer;
}
.show_commonets .title .right {
  text-align: right;
  float: right;
}
.ok_btn {
  justify-content: flex-end;
}
.edit_place {
  display: flex;
}
.image_url {
  margin: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
}
.image_url img {
  width: 100%;
  height: 100%;
}
.commonet_edit {
  flex: 1;
  border: 1px solid #eee;
  background: #eee;
}
.btn_place {
  display: flex;
  justify-content: flex-end;
}
.name_time_like {
  line-height: 26px;
}
.time_like {
  display: flex;
  font-size: 12px;
}
.time_like .like {
  padding: 0 5 0 0;
}
.time_like .time {
  padding: 0 5;
}
.load {
  text-align: center;
}
</style>