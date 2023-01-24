<template>
  <div>
    {{ post }}
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
export default {
  name: "FetchDataFromApiById",
  props: ['id'],
  setup(props) {
    const { isLoaded, post, init } = getPost(props.id);
    init();
    return {isLoaded, post}
  }
}
</script>

<style scoped>

</style>