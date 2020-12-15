import UsersService from '../../../services/UsersService.js';

export default {
    state : {
        users: []
    },

    mutations: {
        GET_USERS(state, users) {
            state.users = users;
        },
        EDIT_USER(state, {id, user, res}) {
            state.users.forEach(u => {
                if(u.id === id) {
                    u.fname = user.fname;
                    u.lname = user.lname;
                    u.type = user.type;
                    u.gender = user.gender; 
                    u.fgroup = user.fgroup;
                    u.role = user.role;
                    u.contact.phone = user.contact.phone;
                    u.contact.address = user.contact.address;
                    res();
                }
            });
        }
    },

    actions: {
        getUsers({ commit }) {
            UsersService.getUsers().then(res => {
                commit("GET_USERS", res.data);
            })
        },
        addUser( { dispatch }, user) {
            UsersService.addUser(user).then(res => {
                console.log(res);
                dispatch('getUsers');
            })
        },        
        editUser( { commit }, {id, user, res}) {
            UsersService.editUser(id, user, res).then(res => {
                console.log(res);
                commit("EDIT_USER", {id, user, res})
            })
        },
        deleteUser( { dispatch }, id) {
            UsersService.deleteUser(id).then(res => {
                console.log(res);
                dispatch('getUsers');
            })
        }        
    },

    getters: {
        allUsers(state) {
            return state.users;
        },
        getUser(state) {
            return (id) => {
                return state.users.find(user =>  (user.id === id))
            }
        }
    }
}