import { comments} from './comments.js'

export default function CommentsApi() {
    return {
        getAllComments() {
            return comments;
        }
    }
}