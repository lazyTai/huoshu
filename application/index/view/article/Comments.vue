<template>
    <div id="comments">
        <div class="container">
            <div class="edit_place ">
                <img :src="user.image_url" alt="" class="image_url">
                <textarea name="" id="" class="commonet_edit" rows="5"></textarea>
            </div>
            <div style="padding:5px;" class=" btn_place">
                <button class="btn btn-success ok_btn">发表</button>
            </div>

            <div class="show_commonets">
                <div class="title">
                    <span>1条评论 </span>
                    <span class="right">
                        <small>按喜欢排序 </small>
                        <small>按时间正序</small>
                        <small>按时间倒序</small>
                    </span>
                </div>

                <div class="commet">
                    <div class="commeter_info">
                        <img :src="user.image_url" alt="" class="image_url" />
                        <div class="name_time">
                            <div class="name">了明天</div>
                            <div class="time">2018.02.24 12:42</div>
                        </div>
                    </div>

                    <div class="content">
                        asdiansd asdasdha sdfdfg
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
.commet .content {
  padding: 10px;
}
.commet .commeter_info {
  display: flex;
}
.commet .name_time {
  font-size: 12px;
  padding-top: 10px;
  line-height: 20px;
}
.show_commonets .title {
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
.show_commonets .title small {
  font-size: 12px;
  cursor: pointer;
}
.show_commonets .title .right {
  text-align: right;
  float: right;
}
.ok_btn {
  justify-content: flex-end;
}
.edit_place {
  display: flex;
}
.image_url {
  margin: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
}
.commonet_edit {
  border: 1px solid #eee;
  background: #eee;
  width: 100%;
}
.btn_place {
  display: flex;
  justify-content: flex-end;
}
</style>

<script>
export default {
  data() {
    return {
      user: $user
    };
  }
};
</script>
