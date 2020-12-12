import Vue from 'vue';
import Vuex from 'vuex';

import family from './modules/family/family.js'
import users from './modules/users/users.js'
import fgroups from './modules/fgroups/fgroups.js'
import loggedInUser from './modules/loggedInUser/loggedInUser.js'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    modules: {
        family,
        users,
        fgroups,
        loggedInUser
    },
    state: {
    }
})