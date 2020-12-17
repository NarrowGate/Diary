import UsersService from '@/services/UsersService.js';

export default {

    namespaced: true,

    state : {
        members: []
    },

    mutations: {
        GET_MEMBERS(state, members) {
            state.members = members;
        },
        EDIT_MEMBER(state, {id, member}) {
            state.members.forEach(u => {
                if(u.id === id) {
                    u.fname = member.fname;
                    u.lname = member.lname;
                    u.type = member.type;
                    u.gender = member.gender; 
                    u.fgroup = member.fgroup;
                    u.role = member.role;
                    u.email = member.email;
                    u.contact.phone = member.contact.phone;
                    u.contact.address = member.contact.address;
                }
            });
        }
    },

    actions: {
        getMembers({ commit }) {
            return UsersService.getMembers().then(res => {
                commit("GET_MEMBERS", res.data);
            })
        },
        addMember( { dispatch }, member) {
            UsersService.addMember(member).then(res => {
                console.log(res);
                dispatch('getMembers');
            })
        },        
        editMember( { commit }, {id, member}) {
            return UsersService.editMember(id, member).then(() => {
                commit("EDIT_MEMBER", {id, member})
            })
        },
        deleteMember( { dispatch }, id) {
            UsersService.deleteMember(id).then(res => {
                console.log(res);
                dispatch('getMembers');
            })
        }        
    },

    getters: {
        allMembers(state) {
            return state.members;
        },
        getMember(state) {
            return (id) => {
                return state.members.find(member =>  (member.id === id))
            }
        }
    }
}

// {
//     "id": 2,
//     "fname": "Reshma",
//     "lname": "Melvin",
//     "type": "admin",
//     "gender": "M",
//     "fgroup": "Developer",
//     "role": "UI Developer",
//     "email": "reshma.melvin@gmail.com",
//     "contact": {
//       "phone": "+61410839139",
//       "address": "U1/3a, Thompson Street, Silkstone, 4304, QLD"
//     }
//   },