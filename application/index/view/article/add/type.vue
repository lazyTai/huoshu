<style scoped>
.tree_parent {
  padding: 10px;
}
.tree_parent .tree_parent_title {
  position: relative;
}
.tree_parent .tree_parent_title::before {
  content: "";
  width: 3px;
  height: 30px;
  background: orange;
  position: absolute;
  left: -7px;
  top: -5px;
}
.tree_children_node {
  padding-left: 10px;
  padding-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  background: #eee;
  margin: 5px;
  cursor: pointer;
  border-radius: 50px;
}
.tree_children {
  display: flex;
  flex-wrap: wrap;
}
.haved_select {
  height: 40px;
  background: #eee;
  top: 30px;
  width: 100%;
  box-shadow: 0px 2px 5px #dad8d8;
  display: flex;
}
</style>

<template>
  <div>
    <Header_back :title="'分类'" />
    <div class="haved_select">
      <div class="tree_children_node" @click="remove_haved_selectd(item)" :key="key" v-for="(item,key) in $store.state.haved_selected">
        {{item.sub_type_name}}
      </div>
    </div>
    <div class="tree" :key="key" v-for="(parent_item,key) in type_lists ">
      <div class="tree_parent">
        <div class="tree_parent_title">
          {{parent_item.name}}
        </div>
      </div>
      <div class="tree_children">
        <div class="tree_children_node" @click="select_node_type(children_item)" :key="key1" v-for="(children_item,key1) in parent_item.children ">
          {{children_item.sub_type_name}}
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import List_item from "../../components/list_item";
import List from "../../components/list";
import Header_back from "../../components/Header_back.vue";
import { get_type_list_all } from "../../util/fetch";
import {
  push_select_array,
  remove_sub_type_in_selected
} from "./vuex/actionTypes";
export default {
  data() {
    return {
      type_lists: []
    };
  },
  created() {
    this.init();
  },
  components: {
    Header_back,
    List_item,
    List
  },
  methods: {
    select_node_type(sub_type) {
      this.$store.dispatch(push_select_array, {
        sub_type: sub_type
      });
    },
    init() {
      var self = this;
      get_type_list_all({
        success(json) {
          var jsonReturn = JSON.parse(json);
          self.$data.type_lists = jsonReturn;
        }
      });
    },
    remove_haved_selectd(remove_sub_type) {
      this.$store.dispatch(remove_sub_type_in_selected, {
        sub_type: remove_sub_type
      });
    }
  }
};
</script>
