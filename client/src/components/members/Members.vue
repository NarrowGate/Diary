<template>
  <div>
    <h1 class="display-4 member">My members <add-member></add-member></h1>

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
            <tr v-for="member of members" :key="member.id" ref="member">
                <td><input :value="member.id" name="id" class="" id="a" /></td>
                <td><input :value="member.name" name="name" class="" id="b" /></td>
                <td><input :value="member.role" name="role" class="" id="c" /></td>
                <td><input :value="member.gender" name="gender" class="" id="d" /></td>
                <td><input :value="member.description" name="description" class="" id="e" /></td>
                <td><input :value="member.occupation" name="occupation" class="" id="f" /></td>
                <td class="d-flex justify-content-between">
                    <edit-member :member="member"></edit-member>
                    <delete-member :memberName="member.name"></delete-member>
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

import { mapGetters } from 'vuex';

export default {

    components: {
        EditMember,
        DeleteMember,
        AddMember
    },
    
    created: function () {
        this.$store.dispatch('getAllMembers');
    },
    computed: 
        mapGetters({
            members: 'allMembers'
        })

    
}
</script>

<style>

h1.member {
    display: flex;
    align-items: center;
}

</style>