<style>

</style>
<template>
  <div id="app">
    <Nav :setResult="setResult" />
    <Article />

    <Comments />

  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Article from "./article.vue";
import Comments from "./Comments.vue"
export default {
  data() {
    return {
      article: $article,
      msg: "deital"
    };
  },
  created() {},
  components: {
    Nav: Header,
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