import axios from 'axios'
const API_URL = 'http://localhost:8000'

export default class GroupsService{
    //get in first page list of groups
    getGroups = async () => {
        const url = `${API_URL}/api/v1/groups/`;
        const response = await axios.get(url);
        console.log(response.data);
        return response.data
    }
    //get groups with url for example /api/groups/?page=2
    getGroupsByURL(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    //get group with id
    getGroup(id) {
        const url = `${API_URL}/api/v1/groups/${id}`;
        return axios.get(url).then(response => response.data);
    }
    //delete group
    deleteGroup(group) {
        const url = `${API_URL}/api/v1/groups/${group.id}`;
        return axios.delete(url);
    }
    //create group
    createGroup(group) {
        const url = `${API_URL}/api/v1/groups/`;
        return axios.post(url, group);
    }
    //update group
    updateGroup(group) {
        const url = `${API_URL}/api/v1/groups/${group.id}/`;
        return axios.put(url, group);
    }
}