<style>

</style>
<template>
  <div id="app">
    <Header_back />
    <Article />
  </div>
</template>

<script>
import Header_back from "../../components/Header_back.vue";
import Article from "./edite_article.vue";
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
    Article: Article
  },
  methods: {
    setResult(result) {
      this.result = result;
    }
  }
};
</script>