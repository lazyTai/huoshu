<template>
  <div class="index_header">
    <div class="flip">
      <div class="item active">活书</div>
      <div class="item">辑本</div>
    </div>
  </div>
</template>
<style>
.index_header {
  background: #0099cc;
  color: #fff;
}
.index_header .flip {
  width: 50%;
  height: 35px;
  display: flex;
}
.index_header .item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
}
.index_header .item.active {
  border-bottom: 2px solid orange;
}
</style>

<script>
export default {};
</script>
