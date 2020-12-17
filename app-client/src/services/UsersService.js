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

    addMember(member) {   
        return apiClient.post('/users', member). then(res => {
            console.log(res);
            return res;
        }).catch(() => {
        })         
    },         
        
    getMembers() {
        return apiClient.get('/users'). then(res => {
            console.log(res);
            return res;
        }).catch(() => {
        })
    },
    
    editMember(id, member) {
        return apiClient.put(`/users/${id}`, member). then((res) => {
            return res;
        }).catch(() => {
        })
    },

    deleteMember(id) {
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
