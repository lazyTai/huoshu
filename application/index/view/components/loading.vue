<template>
  <div class="tai_loading" v-show="loading">
    <Icon :icon="'loading'" :spin='true' /> loading
  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  props: {
    loading: Boolean
  },
  created() {},
  components: {
    Icon
  }
};
</script>
<style scoped>
.tai_loading {
  width: 100%;
  height: 50px;
  background: #fff;
  font-size: 22px;
  text-align: center;
}
</style>
