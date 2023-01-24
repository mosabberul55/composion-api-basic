import {ref} from "vue";

const getPosts = () => {
    const isLoaded = ref(false);
    const items = ref([]);
    const init = async () => {
        isLoaded.value = true;
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        items.value = await response.json()
        isLoaded.value = true;
    }
    return {isLoaded, items, init}
}
export default getPosts