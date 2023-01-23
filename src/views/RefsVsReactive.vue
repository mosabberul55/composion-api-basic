<template>
  <div class="home">
    <h1>Refs Vs Reactive</h1>
    <h2>Refs</h2>
    <p>{{ objectOne.name }} ---- {{ objectOne.age }} ----  --- {{ nameOne }}</p>
    <button @click="updateObjectOne">Update Object One</button>
    <br/>
    <h2>Reactive</h2>
    <p>object two = {{ objectTwo.name }} ---- {{ objectTwo.age }} --- {{ nameTwo }}</p>
    <button @click="updateObjectTwo">Update Object Two</button>
  </div>
</template>

<script>

import {ref, reactive} from "vue";

export default {
  name: 'RefsVsReactive',
  setup() {
    const objectOne = ref({name: 'Mario', age: 30})
    const objectTwo = reactive({name: 'Sam', age: 40})

    // notes:
    // we can 't use primitive values with reactive
    // we can use primitive values with ref
    const nameOne = ref('Mario')
    let nameTwo = reactive('Sam')

    const updateObjectOne = () => {
      objectOne.value.name = 'John'
      objectOne.value.age = 50
      nameOne.value = 'John updated'
    }
    const updateObjectTwo = () => {
      objectTwo.name = 'Sam updated'
      objectTwo.age = 70
      nameTwo = 'Sam cant updated because its a primitive value'
    }

    return {objectOne, objectTwo, updateObjectOne, updateObjectTwo, nameOne, nameTwo}
  }
}
</script>