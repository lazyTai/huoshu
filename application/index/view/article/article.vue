<style>
.article {
}
.a_title {
  font-size: 30px;
  padding: 5px;
}
.user_image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 5px;
  border: 1px solid #eee;
}
.info {
  flex: 1;
}
.user_name {
  font-size: 20px;
  padding: 5px;
}
.user_info {
  display: flex;
}
.a_info {
  width: 80%;
  padding: 5px;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
.edit_btn {
  border-radius: 50px !important;
  line-height: 38px !important;
  width: 20%;
}
.article_content {
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 30px;
}
.name_update_time {
  display: flex;
}
.name_update_time .a_update_time {
  font-size: 12px;
  align-items: center;
  display: flex;
}
</style>

<template>
  <div id="articel" class="container">
    <div class="article">
      <h1 class="a_title"> {{article.title}}</h1>
      <div class="user_info">
        <img :src="user.image_url" alt="" class="user_image" />
        <div class="info">
          <div class="name_update_time">
            <div class="user_name">{{user.name}}</div>
            <div class="a_update_time">{{article.update_time}}</div>
          </div>
          <div class="a_info">
            <div class="a_num_content">字数:{{article.content.length}}</div>
            <div class="a_num_like">喜欢:{{article.like_num}}</div>
            <div class="a_num_artitcle"> 评论:{{article.num_artitcle}}</div>
          </div>
        </div>
        <a class="btn btn-default edit_btn" :href="'/huoshu/public/index/article/edit?id='+article.id">點擊編輯</a>
      </div>
    </div>

    <div class="article_content" v-html="article.content">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: $article,
      user: $user
    };
  }
};
</script>
