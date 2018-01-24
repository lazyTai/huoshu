<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a class="navbar-brand" href="/huoshu/public/index">活书</a>
      </div>

      <ul class="nav navbar-nav">
        <li class="active1">
          <!-- <a href="#">书本 
                </a> -->
        </li>
      </ul>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">提交</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown" v-if="user">
            <a href="/huoshu/public/index/My_Self/">{{user.name}}</a>
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
  }
};
</script>
