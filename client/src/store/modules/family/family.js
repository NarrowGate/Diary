import MembersService from '../../../services/MembersService.js';


export default {
    state: {
        members:[]
    },
    mutations: {
        GET_MEMBERS(state, members) {
            state.members = members;
        },
        ADD_MEMBER(state, member) {
            state.members.push(member);
        },
        EDIT_MEMBER(state, member) {
            state.members.forEach((mem, index) => {
                if (mem.id == member.Id) {
                    mem.name = member.Name ;
                    mem.role = member.Role ;
                    mem.gender = member.Gender ;
                    mem.description = member.Description ;
                    mem.occupation = member.Occupation ;
                }
            })
        },        
        DELETE_MEMBER(state, memberId) {
            state.members.forEach((member, index) => {
                if (member.id == memberId) {
                    state.members.splice(index, 1);
                }
            })
        }

    },
    actions: {
        getAllMembers({commit}) {
            MembersService.getMembers().then(response => {
                commit('GET_MEMBERS', response.data);
            })
        },
        addMember({commit}, member) {
            MembersService.addMember(member).then(response => {
                commit('ADD_MEMBER', response.data[response.data.length - 1]);
            })
        },
        editMember({commit}, member) {
            MembersService.editMember(member).then(response => {
                commit('EDIT_MEMBER', member);
            })
        },
        deleteMember({commit}, member) {
            let memberId = member.Id;
            MembersService.deleteMember(member).then(response => {
                commit('DELETE_MEMBER', memberId);
            })
        }
    },
    getters: {
    }
}