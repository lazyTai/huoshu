<template>
    <div id="comments">
        <img :src="user.image_url" alt="" class="image_url">
    </div>
</template>
<style>

</style>

<script>
export default {
  data() {
    return {
        user:$users
    };
  }
};
</script>
