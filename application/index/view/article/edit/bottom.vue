<template>
  <div class="bottom">
    <div class="item" @click="click_file">
      <div>
        <Icon :icon="'tupian'" />
      </div>
      <div class="item_font">图片</div>
    </div>

    <div @click="click_type" class="item">
      <div>
        <Icon :icon="'tag'" />
      </div>
      <div class="item_font">分类</div>
    </div>

    <div class="item" @click="click_save">
      <div>
        <Icon :icon="'save'" />
      </div>
      <div class="item_font">保存</div>
    </div>
    <input type="file" v-show="false" ref="file">
  </div>
</template>
<script>
import Icon from "../../components/icon.vue";
import { set_article } from "../detail/vuex/actionTypes";
import { upload_image_in_artitle, save_articel } from "../../util/fetch";
export default {
  data() {
    return {};
  },
  mounted() {
    this.file = this.$refs["file"];
    this.file.onchange = this.chang_file;
  },
  methods: {
    save_before() {
      var { dispatch, state } = this.$store;
      var { article, dom } = state;
      var content = dom.content.innerHTML;
      var title = dom.title.value;
      article.title = title;
      article.content = content;
      dispatch(set_article, { article });
    },
    chang_file() {
      var self = this;
      var { dispatch, state } = this.$store;
      var { article, dom } = state;
      upload_image_in_artitle({
        data: self.file.files,
        success(resjson) {
          var returnJson = JSON.parse(resjson);
          if (returnJson.success) {
            article.content += `
            <div   class="image_content">
              <img src="${returnJson.message}" />
            </div>
             <br />
            `;
            dispatch(set_article, { article });
          }
        }
      });
    },
    click_file() {
      var self = this;
      this.save_before();
      self.file.click();
    },
    click_type() {
      this.save_before();
      this.$router.push("/type");
    },
    click_save() {
      this.save_before();
      var { dispatch, state } = this.$store;
      var { article, dom } = state;
      save_articel({
        data: {
          article:JSON.stringify(article),
        },
        success(resjon) {
          var returnJson = JSON.parse(resjon);
          if(returnJson['success']){}
          Vue.toasted.show(returnJson['message'])
        }
      });
    }
  },
  components: {
    Icon
  }
};
</script>
<style scoped>
.bottom {
  border-top: 1px solid #eee;
  display: flex;
  background: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.item {
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4px;
  height: 40px;
}
.item_font {
  font-size: 12px;
  padding: 0px;
}
</style>
