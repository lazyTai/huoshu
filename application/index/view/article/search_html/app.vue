<template>
    <div class="search">
        <Header_back :title="'搜索'" />

        <div class="input_search">
            <input type="text" class="input" v-model="seach_input_value" />
            <button @click="search">
                <Icon icon="Magnifier" /> 搜索
            </button>
        </div>

        <div class="search_result">
            <div v-show="!search_result.length" class="search_none">
                点击搜索
            </div>
            <List v-show="search_result.length">
                <a :href='"/huoshu/public/index/article/detail?id="+item.id' 
                class="ahref" v-for="(item,key) in search_result" :key="key">
                    <ListItem :title="item.title" right_icon="icon-right" />
                </a>
            </List>
        </div>
    </div>
</template>

<style scoped>
.search_none {
  font-size: 30px;
  text-align: center;
  padding: 30px;
  color: #2222;
}
.ahref {
  text-emphasis: none;
  text-decoration: none;
  text-decoration-color: #222;
  color: #333;
}
.input_search {
  display: flex;
  padding: 10px;
}
.input_search input {
  border: none;
  flex: 1;
  height: 40px;
  background: #eeee;
  text-indent: 10px;
  line-height: 40px;
}
</style>
<script>
import Header_back from "../../components/Header_back";
import Icon from "../../components/icon";
import List from "../../components/list";
import ListItem from "../../components/list_item";
import { seach } from "../../util/fetch";
export default {
  components: {
    Header_back,
    Icon,
    List,
    ListItem
  },
  data() {
    return {
      search_result: [],
      seach_input_value: ""
    };
  },
  methods: {
    search() {
      if (this.$data.seach_input_value == "") {
        Vue.toasted.show("请输入", { duration: 1000 });
        return false;
      }
      var self = this;
      seach({
        data: { search: this.$data.seach_input_value },
        success(res) {
          var resJson = JSON.parse(res);
          self.$data.search_result = resJson;
        }
      });
    }
  }
};
</script>
