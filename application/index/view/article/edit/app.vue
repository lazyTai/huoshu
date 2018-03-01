<style>

</style>
<template>
    <div id="app">
        <Nav :setResult="setResult" />
        <Article />

    </div>
</template>

<script>
import Header from "../../components/Header.vue";
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
    Nav: Header,
    Article: Article
  },
  methods: {
    setResult(result) {
      this.result = result;
    }
  }
};
</script>