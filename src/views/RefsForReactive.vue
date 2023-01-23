<template>
  <div class="home">
    <h1>Refs For Reactive</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <br>
    <button @click="count++">Increase Count {{ count }}</button>
    <br/>
    <input type="text" v-model="name" />
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  name: 'RefsForReactive',
  setup() {
    // console.log(this)

    const p = ref(null)

    const name = ref('Mario')
    const age = ref(30)
    const count = ref(0)
    const handleClick = () => {
      name.value = 'John'
      age.value = 50
      console.log(name, name.value)
      // console.log(p, p.value)
      // p.value.classList.add('red')
      // p.value.textContent = 'My name'
    }
    return { name, age, handleClick, p, count }
  }
}
</script>
