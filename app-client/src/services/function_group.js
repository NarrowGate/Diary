import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export default {

    getAll() {
        return apiClient.get('/functiongroups'). then(res => {
            return res.data;
        })
    },
    add(fgroup) { 
        return apiClient.post('/functiongroups', fgroup). then(res => {
            return res;
        })         
    }

}