import {UsersApi} from './UsersApi';
import {PostsApi} from './PostsApi';
import {CommentsApi} from './CommentsApi';

export async function getPostsData() {
    const [posts, users, comments] = await Promise.all([
        PostsApi(),
        UsersApi(),
        CommentsApi()
    ]);
    const postsData = posts.map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: [...comments.filter(comment => comment.postId === post.id)]
    }));
    return postsData;
};
