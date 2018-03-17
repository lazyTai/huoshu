<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<script>
export default {
  props: {
    icon: String
  },
  data() {
    return {};
  }
};
</script>

<template>
<svg class="icon" aria-hidden="true">
    <use :xlink:href="'#icon-'+icon"></use>
</svg>
</template>
