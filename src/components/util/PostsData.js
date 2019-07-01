import UsersApi from './UserApi';
import PostsApi from './PostsApi';
import CommentsApi from './CommentsApi';

export const PostsData = () => {
    const posts = PostsApi().getAllPosts();
    const users = UsersApi().getAllUsers();
    const comments = CommentsApi().getAllComments();
    const postsData = posts.map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: [...comments.filter(comment => comment.postId === post.id)]
    }));
    // console.log(postsData);
    return postsData;
};
