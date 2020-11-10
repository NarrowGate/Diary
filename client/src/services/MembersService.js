import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:2014/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getMembers() {
        return apiClient.get('FamilyMembers');
    },
    addMember(member) {
        return apiClient.post('FamilyMembers/AddMember', member);
    },
    deleteMember(member) {
        return apiClient.post('FamilyMembers/DeleteMember', member);
    },
    editMember(member) {
        return apiClient.post('FamilyMembers/EditMember', member);
    }      
}