<template>
  <nav>
    <router-link to="/">Refs For Reactive</router-link> |
    <router-link :to="{ name: 'refsVsReactive' }">Refs Vs Reactive</router-link> |
    <router-link :to="{ name: 'computedProperties' }">Computed Properties</router-link> |
    <router-link :to="{ name: 'watchAndWatchEffect' }">Watch And Watch Effect</router-link> |
    <router-link :to="{ name: 'propsExample' }">Props Example</router-link> |
    <router-link :to="{ name: 'lifeCycleHook' }">LifeCycleHook</router-link> |
    <router-link :to="{ name: 'fetchDataFromApi' }">Fetch Data From Api</router-link> |
    <router-link :to="{ name: 'simpleCrud' }">Simple CRUD</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
