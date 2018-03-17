<template>
  <div>
      <Header />
      <Infor />
  </div>
</template>

<style>

</style>
<script>
export default {
  data() {
    return {
      msg: "fuck"
    };
  },
  components: {
    Header: require("../components/Header.vue").default,
    Infor: require("./info").default
  }
};
</script>
