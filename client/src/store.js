import Vue from 'vue';
import Vuex from 'vuex';

import MembersService from './services/MembersService.js';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        test: 'ksksk',
        members:[]
    },
    mutations: {
        GET_MEMBERS(state, members) {
            state.members = members;
        }
    },
    actions: {
        getAllMembers({commit}) {
            MembersService.getMembers().then(response => {
                commit('GET_MEMBERS', response.data);
            })
        }
    },
    getters: {

    }
})