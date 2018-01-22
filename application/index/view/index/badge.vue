<style>
._badge {
  padding: 10;
}
.badge_all {
  padding: 10;
}
</style>

<template>
  <div class="badge_all">
    <a  class="_badge" href="#"
    v-for="(item,index) in type"
    >{{item.name}} </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: $type
    };
  }
};
</script>