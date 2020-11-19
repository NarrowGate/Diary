<template>
    <v-row>
        <v-col class="pa-6">
        <v-toolbar-title>Members <add-member></add-member></v-toolbar-title>
        <!-- <table class="table">
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
        </table> -->
        <!-- <v-data-table
        :headers = "headers"
        :items = "members"
        class="elevation-1"
        >
        </v-data-table> -->

<v-simple-table>
    <template v-slot:default>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Description</th>
                <th>Occupation</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="member of members" :key="member.id" ref="member">
                <td> {{member.id}} </td>
                <td> {{member.name}} </td>
                <td> {{member.role}} </td>
                <td> {{member.gender}} </td>
                <td> {{member.description}} </td>
                <td> {{member.occupation}} </td>
                <td class="d-flex justify-content-between">
                    <edit-member :member="member"></edit-member>
                    <delete-member :memberName="member.name"></delete-member>
                </td>
            </tr>
        </tbody>
    </template>    
</v-simple-table>


        </v-col>
    </v-row>
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

    data() {
        return {
            headers: [
                { text: 'Id', value: 'id'},
                { text: 'Name', value: 'name'},
                { text: 'Role', value: 'role'},
                { text: 'Gender', value:'gender'},
                { text: 'Description', value:'description'},
                { text: 'Occupation', value: 'occupation'}
            ]
        }
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