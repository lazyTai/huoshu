<style>
.row {
  border: 1px solid #fff;
  box-sizing: border-box;
}
.box {
  height: 40px;
  background: #ccc;
  line-height: 40px;
}
</style>
<template>
  <div id="app">
    <Nav />
    <div class="container-fluid">
      <div class="row">
        <div class="box col-xs-1">1</div>
        <div class="box col-xs-1">2</div>
        <div class="box col-xs-1">3</div>
        <div class="box col-xs-1">4</div>
        <div class="box col-xs-1">5</div>
        <div class="box col-xs-1">6</div>
        <div class="box col-xs-1">7</div>
        <div class="box col-xs-1">8</div>
        <div class="box col-xs-1">9</div>
        <div class="box col-xs-1">0</div>
        <div class="box col-xs-1">11</div>
        <div class="box col-xs-1">12</div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="box col-xs-2">1</div>
        <div class="box col-xs-2">2</div>
        <div class="box col-xs-2">3</div>
        <div class="box col-xs-2">4</div>
        <div class="box col-xs-2">5</div>
        <div class="box col-xs-2">6</div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="box col-xs-3">1</div>
        <div class="box col-xs-3">2</div>
        <div class="box col-xs-3">3</div>
        <div class="box col-xs-3">4</div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="box col-xs-4">1</div>
        <div class="box col-xs-4">2</div>
        <div class="box col-xs-4">3</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  created() {},
  components: {
    Nav: require("./Nav.vue").default
  },
  methods: {}
};
</script>