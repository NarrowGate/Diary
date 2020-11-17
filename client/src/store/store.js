import Vue from 'vue';
import Vuex from 'vuex';

import family from './modules/family/family.js'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    modules: {
        family
    },
    state: {
    }
})