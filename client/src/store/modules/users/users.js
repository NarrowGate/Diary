import UsersService from '../../../services/UsersService.js';

export default {
    state : {
        users: []
    },

    mutations: {
        GET_USERS(state, users) {
            state.users = users;
        }
    },

    actions: {
        getUsers({ commit }) {
            UsersService.getUsers().then(res => {
                commit("GET_USERS", res.data);
            })
        }
    },

    getters: {

    }
}