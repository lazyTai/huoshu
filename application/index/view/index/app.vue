<template>
  <div id="app">
    <Header1 />
    <!-- 分类 -->
    <IndexType />
    <!-- 7天列表 -->
    <List/>
    <!-- bottom -->
    <Bottom />
  </div>
</template>

<script>
import Header1 from "./Header.vue";
import IndexType from "./IndexType.vue";
import List from "./list.vue";
import Bottom from "./Bottom.vue";
export default {
  data() {
    return {};
  },
  created() {},
  components: {
    Header1,
    List,
    IndexType,
    Bottom,
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