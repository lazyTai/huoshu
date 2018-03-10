<style>
#comments {
  margin-bottom: 50px;
}
.glyphicon {
  cursor: pointer;
}
.commet {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
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
.commonet_edit {
  border: 1px solid #eee;
  background: #eee;
  width: 100%;
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
<template>
  <div id="comments">
    <div class="container">
      <div class="edit_place ">
        <img :src="user.image_url" alt="" class="image_url">
        <textarea name="" id="" class="commonet_edit" rows="5" ref="comment"></textarea>
      </div>
      <div style="padding:5px;" class=" btn_place">
        <button class="btn btn-success ok_btn" @click="ok_btn">发表</button>
      </div>

      <div class="show_commonets">
        <div class="title">
          <span>1条评论 </span>
          <span class="right">
            <small @click="init('like_num','desc')">按喜欢排序 </small>
            <small @click="init('update_time','desc')">按时间正序</small>
            <small @click="init('update_time','asc')">按时间倒序</small>
          </span>
        </div>

        <div class="load" v-show="loadding">
          <img src="/huoshu/public/static/layer/theme/default/loading-1.gif" alt=""> loading
        </div>
        <div class="commet" v-for="comment_item in comments" v-show="!loadding">
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

        <nav aria-label="Page navigation" v-show="!loadding">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li v-for="item in countPage" @click="page_click(item)" :class="item==page?'active':'none'">
              <a href="#">{{item}}</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </div>
</template>


<script>
import Toast from "vue-easy-toast";
Vue.use(Toast);

export default {
  data() {
    return {
      user: $user,
      page: 1,
      comments: [],
      loadding: false,
      countPage: 0
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(order = "like_num", asc = "desc") {
      var self = this;
      var data = {
        page: self.$data.page,
        article_id: $article["id"],
        order,
        asc
      };
      ajax({
        type: "post",
        url: "/huoshu/public/index/comment/read",
        data,
        before() {
          self.loadding = true;
        },
        success(returnJson) {
          self.loadding = false;
          self.$data.comments = JSON.parse(returnJson)["data"];
          self.$data.countPage = JSON.parse(returnJson)["count"];
        }
      });
    },
    ajax_click_down(comment_id) {
      var self = this;
      var data = {
        user: JSON.stringify($user),
        comment_id
      };
      ajax({
        type: "post",
        url: "/huoshu/public/index/comment/like_down",
        data,
        success(returnJsonStr) {
          var returnJson = JSON.parse(returnJsonStr);
          layer.msg(returnJson.message);
          Vue.toast(returnJson.message);
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
      ajax({
        type: "post",
        url: "/huoshu/public/index/comment/like",
        data,
        success(returnJsonStr) {
          var returnJson = JSON.parse(returnJsonStr);
          layer.msg(returnJson.message);
          Vue.toast(returnJson.message);
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
      var html = this.$refs["comment"].value;
      var data = {
        article: JSON.stringify($article),
        user: JSON.stringify($user),
        comment: html
      };
      var self = this;
      ajax({
        type: "post",
        url: "/huoshu/public/index/article/add_comment",
        data,
        before() {
          layer.load(1);
        },
        success(returnJson) {
          layer.closeAll();
          layer.msg("保存成功");
          self.init();
        }
      });
    }
  }
};
</script>
