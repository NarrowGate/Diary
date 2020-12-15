
export default {

    state : {
        user: []
    },

    mutations: {
        LOGOUT(state) {
            state.user = [];
        },
        LOGIN_USER(state, user) {
            state.user = [];
            state.user.push(user);
        }
    },

    actions: {

    },

    getters: {
        isUserLoggedIn(state) {
            return state.user.length;
        },
        userName(state) {
            return state.user[0];
        }
    }

}