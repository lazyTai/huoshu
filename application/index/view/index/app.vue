<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<template>
  <div id="app">
    <Header1 />
    <!-- 分类 -->
    <IndexType />
    <!-- 7天列表 -->
    <List :list='result' :page="page" :currentPage="currentPage" :changePage="changePage"
     :changeResultAndPage='changeResultAndPage' /> {{msg}}
  </div>
</template>

<script>
import Header1 from "./Header.vue";
import IndexType from "./IndexType.vue";
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
    Header1,
    List,
    IndexType
  },
  methods: {
    setResult(result) {
      this.result = result;
    },
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