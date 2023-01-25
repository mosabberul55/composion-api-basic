<template>
  <div class="home">
    <h1>Simple Crud</h1>
    <table style="width: 40%; margin: auto; border: 1px solid black">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>
          <button @click="editItem(item.id)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import {ref} from "vue";

const items = ref([
  {id: 1, title: 'Item 1', description: 'Description 1'},
  {id: 2, title: 'Item 2', description: 'Description 2'},
  {id: 3, title: 'Item 3', description: 'Description 3'},
  {id: 4, title: 'Item 4', description: 'Description 4'},
  {id: 5, title: 'Item 5', description: 'Description 5'},
])

const editItem = (id) => {
  let editedData = {
    title: prompt('Enter new title'),
    description: prompt('Enter new description')
  }
  let index = items.value.findIndex(item => item.id === id)
  if (index !== -1) {
    items.value[index] = {...items.value[index], ...editedData}
    // Object.assign(items.value[index], editedData)
  }
}
const deleteItem = (id) => {
  items.value = items.value.filter(item => item.id !== id)
}
</script>

<style scoped>

</style>