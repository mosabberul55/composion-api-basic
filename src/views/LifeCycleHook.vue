<template>
  <div class="LifeCycleHook">
    <h1>LifeCycleHook</h1>
    <div>{{ objectOne }}</div>
  </div>
</template>

<script>
import {onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  name: "LifeCycleHook",
  setup() {
    const objectOne = ref({ id: 1, name: "object one" });
    const init = () => {
      objectOne.value.name = "object one updated";
    };
    onMounted(() => {
      init();
      console.log('component mounted')
    });
    onUnmounted(() => {
      console.log('component unmounted')
    });
    onUpdated(() => {
      console.log('component updated')
    });
    return { objectOne };
  },
}
</script>

<style scoped>

</style>