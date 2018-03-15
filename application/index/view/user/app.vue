<template>
  <div class="user">
    <Header_back :title="'设置'" />
    <div class="img_name_login">
      <div class="image">
        <img :src="user.image_url" alt="">
      </div>
      <div class="name">
        {{user.name}}
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon_edit"></use>
        </svg>
      </div>
    </div>

    <div class="list">
      <div class="list_item">
        <div class="list_item_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chun"></use>
          </svg>
        </div>
        <div class="list_item_title">10</div>
        <div class="list_item_sub_title">收藏</div>
      </div>

      <div class="list_item">
        <div class="list_item_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-CSS"></use>
          </svg>
        </div>
        <div class="list_item_title">10</div>
        <div class="list_item_sub_title">公开文字</div>
      </div>

      <div class="list_item">
        <div class="list_item_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-35chuanyue2"></use>
          </svg>
        </div>
        <div class="list_item_title">10</div>
        <div class="list_item_sub_title">秘密文字</div>
      </div>

      <div class="list_item">
        <div class="list_item_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-badge"></use>
          </svg>
        </div>
        <div class="list_item_title">10</div>
        <div class="list_item_sub_title">关注辑本</div>
      </div>
    </div>

    <Bottom />
  </div>
</template>
<style scroped>
.list {
  border-top: 1px solid #eee;
  margin: 20px 10px;
}
.list .list_item {
  display: flex;
  align-items: center;
  height: 45px;
  border-bottom: 1px solid #eee;
}
.list .list_item .list_item_icon .icon {
  font-size: 25px;
}
.list .list_item .list_item_title {
  font-size: 20px;
  padding-left: 5px;
  flex: 2;
}
.list .list_item .list_item_sub_title {
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.img_name_login {
  text-align: center;
}
.img_name_login .image {
  width: 85px;
  height: 85;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
}
.img_name_login .image img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
}
.img_name_login .name {
  font-size: 19px;
  padding: 8px;
}
</style>
<script>
import Header_back from "../components/Header_back";
import Bottom from "../index/Bottom.vue";
export default {
  components: { Header_back },
  data() {
    return {
      user: $user
    };
  },
  components: {
    Bottom,
    Header_back
  }
};
</script>
