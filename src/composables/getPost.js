import {ref} from "vue";

const getPost = (id) => {
    const post = ref(null)
    const isLoaded = ref(false)
    const init = async () => {
        isLoaded.value = false
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        post.value = await response.json()
        isLoaded.value = true
    }
    return { isLoaded, post, init }
}
export default getPost