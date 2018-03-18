<style>

</style>
<template>
  <div id="app">
    <Header_back :title="'编辑'"/>
    <Article />
    <Comments />

  </div>
</template>

<script>
import Header_back from "../components/Header_back.vue";
import Article from "./article.vue";
import Comments from "./Comments.vue";
export default {
  data() {
    return {
      article: $article,
      msg: "deital"
    };
  },
  created() {},
  components: {
    Header_back,
    Article: Article,
    Comments: Comments
  },
  methods: {
    setResult(result) {
      this.result = result;
    }
  }
};
</script>