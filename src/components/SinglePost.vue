<template>
  <div class="SinglePost">
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ formattedBody }}</p>
      <button @click="editPost(post.id)">Edit Post</button>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "SinglePost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props, {emit}) {
    const post = props.post;
    const formattedBody = computed(() => {
      return post.body.toUpperCase();
    });
    const editPost = (id) => {
      emit("editPost", id);
    };

    return { post, formattedBody, editPost };
  },
}
</script>

<style scoped>

</style>