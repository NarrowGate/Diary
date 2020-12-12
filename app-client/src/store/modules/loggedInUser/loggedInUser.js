
export default {

    state : {
        user: ['Melvin']
    },

    mutations: {
        LOGOUT(state) {
            state.user = [];
        }
    },

    actions: {
        // retreiveUser({ commit, dispatch }, user) {
        //     dispatch()
        // }
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