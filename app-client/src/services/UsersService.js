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

    addUser(user) {   
        return apiClient.post('/users', user). then(res => {
            console.log(res);
            return res;
        }).catch(() => {
        })         
    },         
        
    getUsers() {
        return apiClient.get('/users'). then(res => {
            console.log(res);
            return res;
        }).catch(() => {
        })
    },
    
    editUser(id, user, res) {
        return apiClient.put(`/users/${id}`, user). then(() => {
            return res;
        }).catch(() => {
        })
    },

    deleteUser(id) {
        return apiClient.delete(`/users/${id}`). then(res => {
            console.log(res);
            return res;
        }).catch(() => {
        })
    }

}


// {
//     "id": 3,
//     "fname": "Novoselic",
//     "lname": "Melvin",
//     "type": "user",
//     "gender": "M",
//     "fgroup": "DEVELOPMENT",
//     "role": "ENGINEER",
//     "contact": {
//       "phone": "",
//       "address": ""
//     }
//   }
