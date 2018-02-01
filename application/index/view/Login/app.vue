<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-xs-offset-1  col-xs-10 form-group">
          <label for="name">name</label>
          <input v-model="name" type="name" class="form-control" id="name" placeholder="name">
        </div>
      </div>

      <div class="row">
        <div class="col-xs-10 col-xs-offset-1  form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
      </div>

      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          <button class="btn btn-primary" @click="login">login</button>
          <a class="register">register</a>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
._form {
  margin: 100px auto;
  width: 400px;
}
.register {
  font-size: 12px;
  text-align: right;
  line-height: 40px;
}
</style>
<script>
export default {
  data() {
    return {
      msg: "fuck",
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      var self = this;
      ajax({
        url: "/huoshu/public/index/Login/logining",
        type: "post",
        data: {
          name: self.$data.name,
          password: self.$data.password
        },
        success(json) {
          var $result = JSON.parse(json);
          if ($result["success"]) {
            layer.msg($result["result"]);
            location.href = "/huoshu/public/index";
          } else {
            layer.msg($result["result"]);
          }
        }
      });
    }
  },
  components: {
    Header: require("../components/Header.vue").default
  }
};
</script>
