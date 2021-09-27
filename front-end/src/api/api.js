import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/tasks';

export const getTasks = (state) => {
    const params = { state };
    return axios.get('', { params });
}

export const updateTask = (task) => {
    const requestUrl = `/${task._id}`;
    console.log(`I am updating task ${task._id} to:`);
    console.log(task);
    return axios.put(requestUrl, task);
}