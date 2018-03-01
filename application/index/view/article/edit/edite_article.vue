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
  display: flex;
  justify-content: flex-end;
}
</style>

<template>
    <div class="editer ">
        <div class="container">
            <div class="title">
                <input type="text" class="form-control" v-model="article.title">
                <div class="padding10 right">
                    <button class="btn btn-success" id="save_btn" @click="save_btn">保存</button>
                </div>
            </div>
            <div class="content">
                <div v-html="article.content" contenteditable="true" ref="content"> </div>
            </div>
            <pre>
                {{article}}
            </pre>
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
      ajax({
          type:'post',
          url:'houshu/'
      })
    }
  }
};
</script>
