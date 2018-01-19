<style>
._media_object_wrapper {
  max-width: 200;
  max-height: 200;
  display: inline-block;
}
._media_object {
  max-width: 200;
  max-height: 200;
}

._media {
  margin: 10;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
}
.page_all {
  text-align: center;
}
</style>
<template>
    <div class="list_all">
        <div class="media _media"
        v-for="(item,index) in  list"
        >
            <div class="media-left">
                <a href="#" class="_media_object_wrapper">
                    <img class="media-object _media_object" 
                    :src="item.image_src" />
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{item.title}}</h4>
                {{item.content}}
            </div>
        </div>


        <nav 
        class="page_all"
        aria-label="Page navigation">
            <ul class="pagination">
                <li v-show="show_prev">
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for='item in page'
                 :class="{active:currentPage==item}">
                    <a href="#"
                    @click="pageItemClick(item)"
                    >{{item}}</a>
                </li>
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
  props: {
    list: Array,
    page: Number,
    currentPage: Number,
    changePage: Function,
    changeResultAndPage: Function
  },
  data() {
    return {
      show_prev: this.currentPage - 1 <= 0,
      show_prev: this.currentPage >= this.page
    };
  },
  created() {},
  methods: {
    getList() {
      var self = this;
      ajax({
        url: "http://localhost/huoshu/public/index/index/getList",
        type: "post",
        data: {
          currentPage: this.currentPage
        },
        success(result) {
          self.changeResultAndPage(
            JSON.parse(result)["result"],
            JSON.parse(result)["page"]
          );
        }
      });
    },
    pageItemClick(currentPage) {
      var self = this;
      this.changePage(currentPage);
      this.$nextTick(() => {
        self.getList();
      });
    }
  }
};
</script>