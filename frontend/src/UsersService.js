import axios from 'axios'
const API_URL = 'http://localhost:8000'

export default class UsersService{
    //get in first page list of users
    getUsers() {
        const url = `${API_URL}/api/v1/users/`;
        return axios.get(url).then(response => response.data);
    }
    //get users with url for example /api/users/?page=2
    getUsersByURL(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    //get user with pk
    getUser(pk) {
        const url = `${API_URL}/api/v1/users/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    //delete user
    deleteUser(user) {
        const url = `${API_URL}/api/v1/users/${user.id}`;
        return axios.delete(url);
    }
    //create user
    createUser(user) {
        const url = `${API_URL}/api/v1/users/`;
        return axios.post(url, user);
    }
    //update user
    updateUser(user) {
        const url = `${API_URL}/api/v1/users/${user.id}/`;
        return axios.put(url, user);
    }
}