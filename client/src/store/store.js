import Vue from 'vue';
import Vuex from 'vuex';

import family from './modules/family/family.js'
import users from './modules/users/users.js'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    modules: {
        family,
        users
    },
    state: {
    }
})