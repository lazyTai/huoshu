<style>

</style>
<template>
  <div id="app">
      <Nav />
      <Badge />
      <List  :list='result' :page="page"
        :currentPage="currentPage"
        :changePage="changePage"
        :changeResultAndPage='changeResultAndPage'
      />
  {{msg}}
  </div>
</template>

<script>
import Header from "./Header.vue";
import Badge from "./badge.vue";
import List from "./list.vue";
export default {
  data() {
    return {
      result: $result,
      page: $page,
      currentPage: 1,
      msg: ""
    };
  },
  created() {},
  components: {
    Nav: Header,
    Badge,
    List
  },
  methods: {
    changePage(currentPage) {
      this.currentPage = currentPage;
    },
    changeResultAndPage(result, page) {
      this.result = result;
      this.page = page;
    }
  }
};
</script>