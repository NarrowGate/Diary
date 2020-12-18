import memberService from '@/services/member.js';

export default {

    namespaced: true,

    state : {
        members: []
    },

    mutations: {
        GET_ALL(state, members) {
            state.members = members;
        },
        EDIT(state, {id, member}) {
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
        getAll({ commit }) {
            return memberService.getAll().then(res => {
                commit("GET_ALL", res.data);
            })
        },
        add( { dispatch }, member) {
            memberService.add(member).then(() => {
                dispatch('getAll');
            })
        },        
        edit( { commit }, {id, member}) {
            return memberService.edit(id, member).then(() => {
                commit("EDIT", {id, member})
            })
        },
        delete( { dispatch }, id) {
            memberService.delete(id).then(() => {
                dispatch('getAll');
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
//     "id": 1,
//     "fname": "Melvin",
//     "lname": "Wilson",
//     "type": "admin",
//     "gender": "M",
//     "fgroup": "Developer",
//     "role": "UI Developer",
//     "email": "melvin.wilson@gmail.com",
//     "contact": {
//       "phone": "+61410839139",
//       "address": "U1/3a, Thompson Street, Silkstone, 4304, QLD"
//     }
//   },
//   {
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