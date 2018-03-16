<template>
  <div>
    <Header_back :title="'编辑'" />
    <input type="file" v-show="false" ref="image_upload">
    <List>
      <ListItem @click.native="click_header" :left_icon="'icon-photo1'" :title="'头像'" :right_icon="'icon-right'" />

      <ListItem @click.native="click_edit_name" :left_icon="'icon-icon_edit'" :sub_title="user.name" :title="'名字'" :right_icon="'icon-right'" />

      <div v-show="user.status!=0">
        <ListItem @click.native="click_unlogin" :left_icon="'icon-tuichufffpx'" :title="'注销'" :right_icon="'icon-right'" />
      </div>
    </List>
    <Bottom />
  </div>
</template>
<style scoped>
.list {
}
.list_item {
  display: flex;
}
.unlogin {
  color: blue;
}
</style>

<script>
import Header_back from "../../components/Header_back";
import Bottom from "../../index/Bottom";
import List from "../../components/list";
import { upload_image_header, unlogin, edit_user_name } from "../../util/fetch";
var ListItem = List.ListItem;
export default {
  components: {
    Header_back,
    Bottom,
    ListItem,
    List
  },
  created() {},
  mounted() {
    this.dom_image_upload = this.$refs["image_upload"];
    this.dom_image_upload.onchange = function() {
      var files = this.files;
      upload_image_header({
        data: files,
        success(json) {
          var jsonReturn = JSON.parse(json);
          if (jsonReturn["success"]) {
          }
          layer.msg(jsonReturn["message"]);
        }
      });
    };
  },
  data() {
    return {
      a: 1,
      user: $user
    };
  },
  methods: {
    click_header() {
      this.dom_image_upload.click();
    },
    click_unlogin() {
      unlogin({
        data: {},
        success() {
          layer.msg("注销成功");
        }
      });
    },
    click_edit_name() {
      layer.prompt({ title: "输入名字，并确认", formType: 0 }, function(
        pass,
        index
      ) {
        if (pass != "") {
          layer.confirm(
            "确定修改登录名字为" + pass + "？",
            {
              btn: ["yes", "no"] //按钮
            },
            function() {
              edit_user_name({
                data: {
                  name: pass
                },
                success() {
                  layer.msg("名字"+pass+"在注销后生效");
                }
              });
            },
            function() {
              layer.closeAll();
            }
          );
        }
        layer.close(index);
      });
    }
  }
};
</script>

