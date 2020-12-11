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
        },
        addFgroup( { commit, dispatch }, fgroup) {
            fGroupService.addFgroup(fgroup).then(res => {
                dispatch('getFgroups');
            })
        },         
    },

    getters: {
        getAllFgroups(state) {
            return state.fgroups;
        },
        getAllFgroupsName(state) {
            let fGnames = [];
            state.fgroups.forEach(group => {
                fGnames.push(group.name);
            });
            return fGnames;
        }
    }
}