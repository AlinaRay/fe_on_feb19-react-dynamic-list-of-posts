import {users} from './users.js';

export default function UsersApi() {
    return {
        getAllUsers() {
            return users;
        }
    }
}