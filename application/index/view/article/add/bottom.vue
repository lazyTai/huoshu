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
import { upload_image_in_artitle, articel_add } from "../../util/fetch";
import { set_articel_title, set_articel_content } from "./vuex/actionTypes";
import Icon from "../../components/icon.vue";
export default {
  data() {
    return {};
  },
  methods: {
    click_file() {
      this.dom_file.click();
    },
    click_type() {
      this.save_articel_before();
      this.$router.push({ path: "type" });
    },
    save_articel_before() {
      /* 保存现有的操作 */
      var { articel, haved_selected, dom } = this.$store.state;
      var { dispatch } = this.$store;
      dispatch(set_articel_content, { content: dom.$content.innerHTML });
      dispatch(set_articel_title, { title: dom.$title.value });
    },
    click_save() {
      /* 保存现有的操作 */
      var { articel, haved_selected, dom } = this.$store.state;
      this.save_articel_before();
      if (
        articel.title == "" ||
        articel.content == "" ||
        articel.cover_image_url == ""
      ) {
        layer.msg("还有没有填！");
        return false;
      }
      if (haved_selected.length <= 0) {
        layer.msg("请选择分类");
        return false;
      }
      articel_add({
        data: {
          articel: JSON.stringify(articel),
          haved_selected: JSON.stringify(haved_selected)
        },
        success(json) {
          var jsonReturn = JSON.parse(json);
        }
      });
    }
  },
  mounted() {
    var self = this;
    this.dom_file = this.$refs["file"];
    var { dom } = this.$store.state;
    this.dom_file.onchange = () => {
      upload_image_in_artitle({
        data: self.dom_file.files,
        success(json) {
          var jsonReturn = JSON.parse(json);
          if (jsonReturn.success) {
            dom.$content.innerHTML += `
            <div class="content_image">
              <img 
              src="${jsonReturn.message}"/>
            </div><br/>
            `;
            self.$store.dispatch(set_articel_content, {
              content: dom.$content.innerHTML
            });
          }
        }
      });
    };
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
