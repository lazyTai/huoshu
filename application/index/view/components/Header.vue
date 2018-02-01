<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/huoshu/public/index">活书</a>
      </div>

      <div class="nav collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">提交</button>
        </form>

        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown" v-if="user" id="tipLayer" style="padding-top: 17px;text-align:center">
            <Tip left="50">
              <a slot="children">{{user.name}}</a>
              <ul slot="tip" style="width:100px;marginTop:10px;
              padding:0px 10px;background:#fff;">
                <li style="padding:10px 0px;cursor: pointer;">
                  <a href="/huoshu/public/index/my_self">详细信息</a>
                </li>
                <li style="cursor: pointer;">
                  <a href="/huoshu/public/index/login/unlogin">注销</a>
                </li>
              </ul>
            </Tip>

          </li>
          <li class="dropdown" v-if="!user">
            <a href="/huoshu/public/index/Login/">登录/注册</a>
          </li>
        </ul>

      </div>

      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: $user
    };
  },
  methods: {
    tipLayer() {}
  },
  components: {
    Tip: require("../components/tip.vue").default
  }
};
</script>
