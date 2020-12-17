import Vue from 'vue';
import Vuex from 'vuex';

import member from './modules/member/member.js'
import fgroups from './modules/fgroups/fgroups.js'
import loggedInUser from './modules/loggedInUser/loggedInUser.js'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    modules: {
        member,
        fgroups,
        loggedInUser
    },
    state: {
    }
})