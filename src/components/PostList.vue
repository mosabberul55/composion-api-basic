<template>
  <div class="Post-list">
    <h1>Post Lists</h1>
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";

export default {
  name: "PostList",
  components: {SinglePost},
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const posts = props.posts

    return { posts };
  },
}
</script>

<style scoped>

</style>