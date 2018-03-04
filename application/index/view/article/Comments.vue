<style>
#comments {
  margin-bottom: 50px;
}
.commet .content {
  padding: 10px;
  background: #eee;
  margin-bottom: 29px;
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
}
.time_like .like {
  padding: 0 10 0 0;
}
.time_like .time {
  padding: 0 10;
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
            <small>按喜欢排序 </small>
            <small>按时间正序</small>
            <small>按时间倒序</small>
          </span>
        </div>

        <div class="commet" v-for="comment_item in comments">
          <div class="commeter_info">
            <img :src="comment_item.user_image_url" alt="" class="image_url" />
            <div class="name_time_like">
              <div class="name">{{comment_item.user_name}}</div>
              <div class="time_like">
                <div class="like">like:{{comment_item.like_num}}</div>
                <div class="time">{{comment_item.update_time}}</div>
              </div>
            </div>
          </div>

          <div class="content">
            {{comment_item.comment}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      user: $user,
      page: 1,
      comments: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var self = this;
      var data = {
        page: self.$data.page,
        article_id: $article["id"]
      };
      ajax({
        type: "post",
        url: "/huoshu/public/index/comment/read",
        data,
        before() {
          layer.load(1);
        },
        success(returnJson) {
          layer.closeAll();
          self.$data.comments = JSON.parse(returnJson);
        }
      });
    },
    ok_btn() {
      var html = this.$refs["comment"].value;
      var data = {
        article: JSON.stringify($article),
        user: JSON.stringify($user),
        comment: html
      };
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
        }
      });
    }
  }
};
</script>
