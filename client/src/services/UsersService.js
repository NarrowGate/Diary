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

    addUser() {
        // let der = {
        //     id: 56,
        //     category: '',
        //     organizer: "Ramu",
        //     title: "",
        //     description: "",
        //     location: "",
        //     date: "",
        //     time: "",
        //     attendees: []
        // }
        
        fetch("http://localhost:3000/events/",
        {
            method: "POST",
            body: JSON.stringify({
                id:54,
                category: '',
                organizer: "Damu",
                title: "",
                description: "",
                location: "",
                date: "",
                time: "",
                attendees: []
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then(function(res){ debugger; return res.json(); })                
    },             
        
    getUsers() {
        return apiClient.get('/users'). then(res => {
            console.log(res);
            return res;
        }).catch(res => {
            console.log(res);
        })
    },
    
    editUser(id) {
        return fetch("http://localhost:3000/users/3",
        {
            method: "PUT",
            body: JSON.stringify({
                fname: "ra",
                lname: "Melvin",
                type: "user",
                gender:"M",
                fgroup: "DEVELOPMENT",
                role:"ENGINEER",
                contact: {
                    phone: "",
                    address: ""
                }
            }),
            headers: {'Content-Type': 'application/json'}
        })
         .then(function(res){ return res.json(); })
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
