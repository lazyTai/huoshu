<style>

</style>
<template>
  <div id="app">
    {{user}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "deital",
      user: $user
    };
  },
  created() {},
  components: {},
  methods: {
    setResult(result) {
      this.result = result;
    }
  }
};
</script>