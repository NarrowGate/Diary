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
        return apiClient.get('/members'). then(res => {
            return res;
        })
    },

    add(member) {   
        return apiClient.post('/members', member). then(res => {
            return res;
        })      
    },                 
    
    edit(id, member) {
        return apiClient.put(`/members/${id}`, member). then((res) => {
            return res;
        })
    },

    delete(id) {
        return apiClient.delete(`/members/${id}`). then(res => {
            return res;
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
