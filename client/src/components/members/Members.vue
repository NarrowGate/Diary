<template>
  <div>
    <h1 class="display-4 member">My members <add-member @addMemberEvt="addMember"></add-member></h1>

    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Description</th>
                <th>Occupation</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="member of familyMembers" :key="member.id" ref="member">
                <td><input :value="member.id" name="id" class="" id="a" /></td>
                <td><input :value="member.name" name="name" class="" id="b" /></td>
                <td><input :value="member.role" name="role" class="" id="c" /></td>
                <td><input :value="member.gender" name="gender" class="" id="d" /></td>
                <td><input :value="member.description" name="description" class="" id="e" /></td>
                <td><input :value="member.occupation" name="occupation" class="" id="f" /></td>
                <td class="d-flex justify-content-between">
                    <edit-member :member="member"></edit-member>
                    <delete-member @memberDeleted="deleteMember" :memberName="member.name"></delete-member>
                </td>
            </tr>

        </tbody>
    </table>
  </div>
</template>

<script>
import EditMember from './EditMember.vue';
import DeleteMember from './DeleteMember.vue';
import AddMember from './AddMember.vue';

import MembersService from '../../services/MembersService.js';


export default {

    components: {
        EditMember,
        DeleteMember,
        AddMember
    },

    data() {
      return {
        familyMembers: []
      }
    },
    created: function () {
        MembersService.getMembers().then(response => {
            this.familyMembers = response.data;
        })
    },
    methods: {
        addMember: function (member) {
            MembersService.addMember(member).then(response => {
            })
        },
        deleteMember: function (member) {
            let memberId = member.Id;
            MembersService.deleteMember(member).then(response => {
                this.familyMembers.forEach((member, index) => {
                    if (member.id == memberId) {
                        this.familyMembers.splice(index, 1);
                    }
                })
            })
        }
    }
}
</script>

<style>

h1.member {
    display: flex;
    align-items: center;
}

</style>