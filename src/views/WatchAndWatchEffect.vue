<template>
  <div class="home">
    <h1>Watch And Watch Effect</h1>
    <input type="text" v-model="search">
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="stopWatching">Stop Watch</button>
  </div>
</template>

<script>
import {computed, ref, watch, watchEffect} from "vue";

export default {
  name: "WatchAndWatchEffect",
  setup() {
    const search = ref('')
    const names = ref(['Mario', 'Sam', 'John', 'Jane', 'Sara', 'Sofia'])

    const stopWatch = watch(search, (newValue, oldValue) => {
      console.log('watch', newValue, oldValue)
    })
    // This one run initially when the component first loads
    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect', search.value)
    })

    const stopWatching = () => {
      stopWatch()
      stopWatchEffect()
    }

    const matchingNames = computed(() => {
      return names.value.filter(n => n.includes(search.value))
    })

    return { search, names, matchingNames, stopWatching }
  }
}
</script>

<style scoped>

</style>