<template>
  <div class="user_infor">

    <div class="user_infor_defaitl">
      <div class="_row">
        <span class="image_wrapper " @mouseover="show_upload_button=!show_upload_button" @mouseout="show_upload_button=!show_upload_button">
          <img :src="user.profile.image_url" alt="touxain">
          <div v-show="show_upload_button" @click="_upload" style="marginTop:-15px;marginLeft:-2px;
          padding:5px;
          text-align:center;width:100px;cursor:pointer;position:absolute;background:#222;color:#fff;">重新上传</div>
          <input type="file" v-show="false" ref="file_header_image">
        </span>
        <div>
          <!-- <button class="btn btn-default" @click="_upload">重新上传</button> -->
          <div class="small">
            支持jpg、jpeg、gif、png、bmp格式的图片
          </div>
        </div>
      </div>
      <div class="_row">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">name</span>
          <input type="text" class="form-control" v-model='user.name' aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="_row">

        <div class="input-group">
          <span class="input-group-addon" id="basic-addon2">address</span>
          <input type="text" class="form-control" v-model='user.profile.address' aria-describedby="basic-addon2">
        </div>
      </div>
      <div class="_row">
        <button class="btn btn-primary" @click='save'>保存</button>
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
      showAlert: true,
      show_upload_button: false
    };
  },
  mounted() {
    var self = this;
    self.image_input = this.$refs["file_header_image"];
    self.image_input.addEventListener("change", () => {
      var formdata = new FormData();
      formdata.append("file", self.image_input.files[0]);
      ajaxForm({
        data: formdata,
        url: "/huoshu/public/index/my_self/changeImage",
        success(json) {
          self.$data.user.profile["image_url"] = JSON.parse(json);
        }
      });
    });
  },
  methods: {
    _upload() {
      this.image_input.click();
    },
    closeAlert() {
      this.$data.showAlert = false;
    },
    sureAlert() {
      console.log("sureAlert");
    },
    cancelAlert() {
      console.log("cancelAlert");
    },
    save() {
      ajax({
        data: {
          user: JSON.stringify($user),
          profile: JSON.stringify($user.profile)
        },
        type: "post",
        url: "/huoshu/public/index/my_self/updateUserAndProfile",
        before() {
          layer.load(1, {
            shade: [0.1, "#fff"] //0.1透明度的白色背景
          });
        },
        success(json) {
          layer.closeAll();
          layer.msg("保存成功");
        }
      });
    }
  },
  components: {
    Alert: require("../components/Alert").default
  }
};
</script>
<style>
._row .input-group-addon {
  width: 80px;
  overflow: hidden;
}
.image_wrapper {
  width: 100;
  height: 100;
  display: inline-block;
  border: 2px solid #ccc;
  box-sizing: border-box;
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
  margin: 10px;
}
.user_infor_defaitl {
  border: 1px solid #eee;
  width: 70%;
  margin: 0 auto;
  /* margin-left: 250; */
}
</style>