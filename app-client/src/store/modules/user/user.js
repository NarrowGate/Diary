
export default {

    namespaced: true,
    
    state : {
        user: 0
    },

    mutations: {
        LOGOUT(state) {
            state.user = 0;
        },
        LOGIN_USER(state, u) {
            state.user = 0;
            state.user = u.id;
        }
    },

    actions: {

    },

    getters: {
        isUserLoggedIn(state) {
            return state.user > 0 ;
        },
        loggedInUserId(state) {
            return state.user;
        }
        // userName(state) {
        //     return state.user[0].fname;
        // },
        // loggedInUser(state) {
        //     return state.user[0];
        // }
    }

}