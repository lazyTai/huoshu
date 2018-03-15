<template>
    <div class="bottom">
        <div class="item">
            <a href="/huoshu/public/index">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-home"></use>
                    </svg>
                </div>
                <div>首页</div>
            </a>
        </div>
        <div class="item">
            <a href="/huoshu/public/index/article/add">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-add"></use>
                    </svg>
                </div>
            </a>
        </div>
        <div class="item">
            <a href="/huoshu/public/index/article/search">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-Magnifier"></use>
                    </svg>
                </div>
                <div>搜索</div>
            </a>
        </div>
        <div class="item">
            <a href="/huoshu/public/index/user/setting">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-setting"></use>
                    </svg>
                </div>
                <div>我的</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bottom {
  height: 55px;
  background: #fff;
  border-top: 1px solid #eee;
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
}
.bottom .item a {
  text-emphasis: none;
  text-decoration: none;
}
.bottom .item a:link {
  color: #222;
} /*未访问颜色*/
.bottom .item {
  flex: 1;
  justify-content: center;
  text-align: center;
  align-self: center;
  display: flex;
  flex-direction: column;
}
.bottom .item .icon {
  font-size: 30px;
}

.add {
  width: 20%;
  justify-content: center;
  text-align: center;
  align-self: center;
}
</style>
