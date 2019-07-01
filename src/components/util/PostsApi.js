import {posts} from './posts.js'

export default function PostsApi() {
    return {
        getAllPosts() {
            return posts;
        }
    }
}