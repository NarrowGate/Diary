import fGroupService from '../../../services/FgroupsService.js';


export default {
    state: {
        fgroups: []
    },

    mutations: {
        GET_FGROUPS(state, data) {
            state.fgroups = data;
        }
    },

    actions: {
        getFgroups({commit}) {
            fGroupService.getFgroups().then(data => {
                commit("GET_FGROUPS", data)
            })
        }
    },

    getters: {
        getAllFgroups(state) {
            return state.fgroups;
        }
    }
}