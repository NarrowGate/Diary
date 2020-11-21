import UsersService from '../../../services/UsersService.js';

export default {
    state : {
        users: []
    },

    mutations: {
        GET_USERS(state, users) {
            state.users = users;
        },
        EDIT_USER(state) {
        }
    },

    actions: {
        getUsers({ commit }) {
            UsersService.getUsers().then(res => {
                commit("GET_USERS", res.data);
            })
        },
        editUser( { commit, dispatch }, userId) {
            UsersService.editUser(userId).then(res => {
                dispatch("getUsers");
            })

        }
    },

    getters: {
        allUsers(state) {
            return state.users;
        }
    }
}