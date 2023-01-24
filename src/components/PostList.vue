<template>
  <div class="Post-list">
    <h1>Post Lists</h1>
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" @editPost="takeAction" />
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
  setup(props, context) {
    const posts = props.posts
    const takeAction = (id) => {
      console.log('emit received')
      context.emit("editPost", id);
    }

    return { posts, takeAction };
  },
}
</script>

<style scoped>

</style>