<template>
    <v-row>
        <v-col class="pa-6">
        <v-toolbar-title>Members<add-member></add-member></v-toolbar-title>

        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user of users" :key="user.id" ref="user">
                        <td> {{user.id}} </td>
                        <td> {{user.fname}} </td>
                        <td> {{user.role}} </td>
                        <td> {{user.gender}} </td>
                        <td class="d-flex justify-content-between">
                            <edit-member :user="user"></edit-member>
                            <delete-member :user="user"></delete-member>
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
        }
    },
    
    created: function () {
        // this.$store.dispatch('getAllMembers');
        this.$store.dispatch('getUsers');
    },
    computed: 
        mapGetters({
            users: 'allUsers'
        })

}
</script>

<style>

h1.member {
    display: flex;
    align-items: center;
}

</style>