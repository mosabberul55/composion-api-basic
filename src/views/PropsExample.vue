<template>
  <div class="home">
    <h1>Props</h1>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import {ref} from "vue";
import PostList from "@/components/PostList.vue";

export default {
  name: "PropsExample",
  components: {PostList},
  setup() {
    const posts = ref([
        { id: 1,title: "Post 1", body: "Post 1 body" },
        { id: 2,title: "Post 2", body: "Post 2 body" },
        { id: 3,title: "Post 3", body: "Post 3 body" }
    ])

    return { posts }
  }
}
</script>

<style scoped>

</style>