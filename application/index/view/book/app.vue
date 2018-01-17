 <style>
body {
  font: Helvetica, sans-serif;
  color: #999;
}
.logo {
  width: 40px;
  height: 40px;
}
</style>

<template>
  <div id="app">
      {{msg}}
    <ul>
        <li>
            <a href="https://www.kancloud.cn/manual/thinkphp5/118030">路由器</a>
        </li>
        <li>
            <a href="http://localhost/demo/public/index/message_controller">分页</a>
        </li>
        <li>
            <a href="http://localhost/demo/public/index/upload1">表单 form 上传</a>
        </li>
        <li>
            <a href="http://localhost/demo/public/index/upload1/index2">进度条上传显示</a>
        </li>
        <li>
            <a href="http://localhost/demo/public/index/upload1/ajax">ajax 上传</a>
        </li>


        <li>
            <a href="http://localhost/demo/public/index/data1/index">单个表的 增删修查</a>
        </li>

        <li>
            <a href="http://localhost/demo/public/index/data2/index">2个表的 增删修查</a>
        </li>

    </ul>
  </div>
</template>

<script>
import "./app.css";
export default {
  data() {
    return {
      msg: "Hddassdfsddsdasd"
    };
  }
};
</script>
