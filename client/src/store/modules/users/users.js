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
        addUser( { commit, dispatch }, user) {
            UsersService.addUser(user).then(res => {
                dispatch('getUsers');
            })
        },        
        editUser( { commit, state }, {id, user, res}) {
            UsersService.editUser(id, user, res).then(res => {
                commit("EDIT_USER", {id, user, res})
            })
        },
        deleteUser( { commit, dispatch }, id) {
            UsersService.deleteUser(id).then(res => {
                dispatch('getUsers');
            })
        }        
    },

    getters: {
        allUsers(state) {
            return state.users;
        }
    }
}