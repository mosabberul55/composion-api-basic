<template>
  <div class="home">
    <h1>Props</h1>
    <button @click="addPost">Add Post</button>
    <post-list :posts="posts" @editPost="edited" />
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
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

    const edited = (id) => {
      //find post with id
      let foundIndex = posts.value.findIndex(post => post.id === id)
      posts.value[foundIndex].title = "Post " + id + " updated"
    }
    const addPost = () => {
      //check if post with id 4 exists
      let foundIndex = posts.value.findIndex(post => post.id === 4)
      if (foundIndex === -1) {
        posts.value.push({ id: 4, title: "Post 4", body: "Post 4 body" })
      }
    }
    onMounted(() => {
      let foundIndex = posts.value.findIndex(post => post.id === 2)
      posts.value.splice(foundIndex, 1)
    })

    return { posts, addPost, edited }
  }
}
</script>

<style scoped>

</style>