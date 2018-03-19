<style scoped>
.editer {
  margin: 10px;
  margin-bottom: 50px;
}
.editer .content {
  padding: 10px;
  cursor: pointer;
  line-height: 25px;
  letter-spacing: 1px;
}
.editer .padding10 {
  padding: 10px;
}
.right {
  display: flex;
  justify-content: flex-end;
}
.content1 {
  background: #eeee;
  min-height: 40px;
}
.content2 {
  min-height: 40px;
  background: #fff;
}
.label_all {
  display: flex;
  font-size: 12px;
}
.preview_title {
  font-size: 21px;
}
:global(.content1 .image_content) {
  max-width: 100px;
  max-height: 100px;
}
:global(.content1 .image_content img) {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="editer ">
    <div class="container">
      <div class="title">
        <input type="text" class="form-control" ref="title_input" v-show="!preview" :value="$store.state.article.title" />
        <div v-show="preview" class="preview_title">{{$store.state.article.title}}</div>
        <div class="label_all padding10">
          <span class="label_title">更新时间：</span>
          <span class="label_content">{{$store.state.article.update_time}}</span>
        </div>
        <div class="padding10 right">
          <button class="btn btn-primary" id="preview_btn" @click="preivew_btn" v-show="!preview">预览</button>
          <button class="btn btn-primary" id="preview_btn" @click="preivew_btn" v-show="preview">返回</button>
          <button class="btn btn-success" id="save_btn" @click="save_btn" v-show="!preview">保存</button>
        </div>
      </div>
      <div class="content">
        <div class="content1" v-html="$store.state.article.content" contenteditable="true" ref="content" v-show="!preview"> </div>
        <div class="content2" v-html="$store.state.article.content" v-show="preview"> </div>
      </div>
      <!-- <pre> -->
      <!-- {{article}} -->
      <!-- </pre> -->
    </div>
    <Bottom />
  </div>
</template>
<script>
import Bottom from "./bottom.vue";
import { set_article, set_dom } from "../detail/vuex/actionTypes";
import { save_articel } from "../../util/fetch";
export default {
  data() {
    return {
      preview: false
    };
  },
  components: { Bottom },
  created() {},
  mounted() {
    var self = this;
    this.dom_title_input = this.$refs["title_input"];
    this.dom_content_input = this.$refs["content"];
    this.$store.dispatch(set_dom, {
      title: self.dom_title_input,
      content: self.dom_content_input
    });
  },
  methods: {
    change_title() {},
    preivew_btn() {
      var html = this.dom_content_input.innerHTML;
      $article.content = html;
      this.$data.preview = !this.$data.preview;
    },
    save_before() {
      var { dispatch, state } = this.$store;
      var { article } = state;
      var content = this.dom_content_input.innerHTML;
      var title = this.dom_title_input.value;
      article.title = title;
      article.content = content;
      dispatch(set_article, { article });
    },
    save_btn() {
      var { dispatch, state } = this.$store;
      var { article } = state;
      this.save_before();
      save_articel({
        data: article,
        before() {
          var index = layer.load(1, {
            shade: [0.1, "#fff"] //0.1透明度的白色背景
          });
        },
        success(jsonReturn) {
          //   debugger;
          layer.closeAll();
          layer.msg("保存完毕");
          $article = JSON.parse(jsonReturn);
        }
      });
    }
  }
};
</script>
