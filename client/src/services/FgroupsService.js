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

    getFgroups() {
        return apiClient.get('/functiongroups'). then(res => {
            return res.data;
        }).catch(res => {
        })
    },
    addFgroup(fgroup) { 
        return apiClient.post('/functiongroups', fgroup). then(res => {
            console.log(res);
            return res;
        }).catch(res => {
        })         
    }

}