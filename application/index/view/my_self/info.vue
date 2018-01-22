<template>
  <div class="user_infor">

    <div class="user_infor_defaitl">

      <div class="_row">
        <span class="image_wrapper ">
          <img :src="user.image_src" alt="touxain">
        </span>
      </div>
      <div class="_row">
        <span class="label1"> name</span>
        {{user.name}}
      </div>
      <div class="_row">
        <span class="label1">
          address</span>
        {{user.address}}
      </div>
      <div class="_row">
        <button class="btn primary">修改</button>
      </div>

      <Alert />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: $user
    };
  },
  components: {
    Alert: require("../components/Alert").default
  }
};
</script>
<style>
.image_wrapper {
  width: 100;
  height: 100;
  display: inline-block;
}
.image_wrapper img {
  width: 100%;
  height: 100%;
}
.label1 {
  padding: 10;
  font-size: 20px;
}
._row {
  text-align: center;
  padding: 10;
}
</style>