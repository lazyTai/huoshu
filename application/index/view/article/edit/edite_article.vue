<style>
.editer .content {
  padding: 10px;
  cursor: pointer;
  line-height: 25px;
  background: #eeee;
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
  min-height: 40px;
}
.label_all {
  display: flex;
  font-size: 12px;
}
</style>

<template>
  <div class="editer ">
    <div class="container">
      <div class="title">
        <input type="text" class="form-control" v-model="article.title">
        <div class="label_all padding10">
          <span class="label_title">更新时间：</span>
          <span class="label_content">{{article.update_time}}</span>
        </div>
        <div class="padding10 right">
          <button class="btn btn-primary" id="preview_btn" @click="save_btn">预览</button>
          <button class="btn btn-success" id="save_btn" @click="save_btn">保存</button>
        </div>
      </div>
      <div class="content">
        <div class="content1" v-html="article.content" contenteditable="true" ref="content"> </div>
      </div>
      <!-- <pre> -->
      <!-- {{article}} -->
      <!-- </pre> -->
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      article: $article
    };
  },
  created() {},
  methods: {
    save_btn() {
      var $dom = this.$refs["content"];
      var html = $dom.innerHTML;
      $article.content = html;
      delete $article.update_time;
      delete $article.t;
      ajax({
        type: "post",
        data: $article,
        url: "/huoshu/public/index/article/save",
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
