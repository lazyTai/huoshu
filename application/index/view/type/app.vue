<template>
  <div class="type">
    <div :key="key1" v-for="(parent,key1) in result" class="parent_item">
      <!-- {{parent}} -->
      <div class="parent_title">
        {{parent.name}}
      </div>

      <div :key="key2" v-for="(child_item,key2) in parent.children" class="child_item">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#'+child_item.image_url"></use>
        </svg>
        {{child_item.sub_type_name}}
      </div>
    </div>
  </div>
</template>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.type {
  display: flex;
  flex-wrap: wrap;
}
.parent_title {
  font-size: 18px;
  padding: 5px;
  font-weight: 600;
}
.parent_item {
  padding: 10px;
}
.child_item {
  padding-left: 10px;
  padding-bottom: 3px;
}
</style>
<script>
export default {
  data() {
    return {
      result: $result
    };
  }
};
</script>
