<template>
  <div class="home">
    <h1>Computed Properties</h1>
    <p>{{ name }}</p>
    <p>{{ names }}</p>
    <div v-for="(filtered, i) in filteredNames">
      <p>{{ i }} - {{ filtered }}</p>
    </div>
    <input type="text" v-model="search">
    <p>{{ matchedNames }}</p>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "ComputedProperties",
  setup() {
    const name = computed(() => {
      return 'I am a computed property'
    })

    const names = ref(['Mario', 'Sam', 'John', 'Jane', 'Sara', 'Sofia'])
    const search = ref('')
    const filteredNames = computed(() => {
      return names.value.filter(n => n.includes('a'))
    })
    const matchedNames = computed(() => {
      return names.value.filter(n => n.includes(search.value))
    })

    return { name, names, search, filteredNames, matchedNames }
  }
}
</script>