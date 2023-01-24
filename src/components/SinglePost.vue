<template>
  <div class="SinglePost">
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ formattedBody }}</p>
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
  setup(props) {
    const post = props.post;
    const formattedBody = computed(() => {
      return post.body.toUpperCase();
    });

    return { post, formattedBody };
  },
}
</script>

<style scoped>

</style>