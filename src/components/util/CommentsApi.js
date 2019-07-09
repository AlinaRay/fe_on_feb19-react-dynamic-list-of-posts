export const CommentsApi = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json());
};
