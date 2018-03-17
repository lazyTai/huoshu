<style scoped>
.add_cover {
  display: flex;
  height: 35px;
  background: #eee;
  line-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}

.icon {
}
.title {
}
.title input {
  width: 100%;
  border: #eee;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.content {
  width: 100%;
  background: #eee;
  min-height: 100%;
}
:global(.content .content_image) {
  max-height: 200px;
  width: 100%;
  padding: 10px;
}
:global(.content .content_image img) {
  width: 100%;
  height: 100%;
}

.artitcle {
  margin-bottom: 100px;
  padding: 10px;
}
</style>
<template>
  <div id="app">
    <Header_back />
    <!-- {{user}} -->

    <div class="add_cover" @click="click_upload_cover">
      <Icon :icon="'shubenshuqian'" /> 添加封面
    </div>

    <div class="artitcle">
      <div class="title">
        <input type="text" placeholder="输入标题" :value="$store.state.articel.title" ref='title'>
      </div>
      <div class="content" ref="content" contenteditable="true" v-html="$store.state.articel.content"></div>
    </div>

    <input type="file" ref="file" v-show="false">
    <Bottom/>

  </div>
</template>

<script>
import Header_back from "../../components/Header_back.vue";
import Icon from "../../components/icon.vue";
import { upload_image_in_artitle } from "../../util/fetch";
import { changeCursorPos } from "../../util/util";
import Bottom from "./bottom.vue";
import {
  set_cover_image_url,
  set_articel_title,
  set_articel_content,
  set_dom_content
} from "./vuex/actionTypes";
export default {
  data() {
    return {
      msg: "deital",
      user: $user
    };
  },
  created() {},
  updated() {
    changeCursorPos(this.dom_content, this.dom_content.innerHTML.length);
  },
  mounted() {
    var self = this;
    this.dom_content = this.$refs["content"];
    this.dom_title = this.$refs["title"];
    this.dom_file = this.$refs["file"];
    this.$store.dispatch(set_dom_content, { dom: this.dom_content });
    this.dom_file.onchange = () => {
      var files = self.dom_file.files;
      upload_image_in_artitle({
        data: files,
        success(json) {
          var jsonReturn = JSON.parse(json);
          debugger;
        }
      });
    };
  },
  components: {
    Header_back,
    Icon,
    Bottom
  },
  methods: {
    setResult(result) {
      this.result = result;
    },
    input_title(event) {
      this.$store.dispatch(set_articel_title, {
        title: event.target.value
      });
    },
    input_content(event) {
      this.$store.dispatch(set_articel_content, {
        content: event.target.innerHTML
      });
    },
    click_upload_cover() {
      this.dom_file.click()
    }
  }
};
</script>