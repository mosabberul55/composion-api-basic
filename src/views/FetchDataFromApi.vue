<template>
  <div class="FetchDataFromApi">
    <h1>Fetch Data From Api</h1>
     <div v-if="isLoaded">
       <div v-for="item in items" :key="item.id">
         <div>
           <router-link :to="{name: 'fetchDataFromApiById', params: { id: item.id }}">{{ item.title }}</router-link>
         </div>
       </div>
     </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import {onMounted} from "vue";
export default {
  name: "FetchDataFromApi",
  setup() {
    const { isLoaded, items, init } = getPosts();
    onMounted(() => {
      init();
    })
    return { isLoaded, items };
  }
  // setup() {
  //   const isLoaded = ref(false);
  //   const items = ref([]);
  //   const init = async () => {
  //     isLoaded.value = true;
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     items.value = await response.json()
  //     isLoaded.value = true;
  //   }
  //   onMounted(() => {
  //     init();
  //   })
  //   return { isLoaded, items, init };
  // },
}
</script>

<style scoped>

</style>