<style>

</style>
<template>
  <div id="app">
    <Header_back />
    <!-- {{user}} -->
  </div>
</template>

<script>
import Header_back from "../../components/Header_back.vue";
export default {
  data() {
    return {
      msg: "deital",
      user: $user
    };
  },
  created() {},
  components: { Header_back },
  methods: {
    setResult(result) {
      this.result = result;
    }
  }
};
</script>