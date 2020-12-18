import Vue from 'vue';
import Vuex from 'vuex';

import member from '@/store/modules/member/member.js'
import functionGroup from '@/store/modules/function_group/function_group.js'
import user from '@/store/modules/user/user.js'

Vue.use(Vuex);

export const store =  new Vuex.Store({
    modules: {
        member,
        functionGroup,
        user
    },
    state: {
    }
})