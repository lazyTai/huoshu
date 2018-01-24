<template>
  <div class="user_infor">

    <div class="user_infor_defaitl">
      <div class="_row">
        <span class="image_wrapper ">
          <img :src="user.image_src" alt="touxain">
        </span>
        <div>
          <button class="btn btn-default" @click="_upload">重新上传</button>
          <div class="small">
            支持jpg、jpeg、gif、png、bmp格式的图片
          </div>
        </div>
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
        <button class="btn btn-primary">修改</button>
      </div>

      <!-- <Alert :close="closeAlert" :show="showAlert" :sure="sureAlert" :cancel="cancelAlert">
        <div>
          shi fuck
          <button>hllo</button>
        </div>
      </Alert> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: $user,
      showAlert: true
    };
  },
  methods: {
    _upload() {
      ajax({
        
      })
    },
    closeAlert() {
      this.$data.showAlert = false;
    },
    sureAlert() {
      console.log("sureAlert");
    },
    cancelAlert() {
      console.log("cancelAlert");
    }
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
.small {
  color: #ccc;
  margin: 10;
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
  /* text-align: center; */
  padding: 10;
  margin-left: 250;
}
</style>