import fGroupService from '@/services/function_group.js';


export default {

    namespaced : true,
    
    state: {
        fgroups: []
    },

    mutations: {
        GET_ALL(state, data) {
            state.fgroups = data;
        }
    },

    actions: {
        getAll({ commit }) {
            return fGroupService.getAll().then(data => {
                commit("GET_ALL", data)
            })
        },
        add( { dispatch }, fgroup) {
            return fGroupService.add(fgroup).then(() => {
                dispatch('getAll');
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