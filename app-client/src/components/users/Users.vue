<template>
    <v-row>
        <v-col class="pa-6">
            <v-toolbar-title>Users<add-user></add-user></v-toolbar-title>
            <br>
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
                                <edit-user :user="user"></edit-user>
                                <delete-user :user="user"></delete-user>
                            </td>
                        </tr>
                    </tbody>
                </template>    
            </v-simple-table>
            <br>
        </v-col>
    </v-row>
</template>

<script>
import EditUser from './EditUser.vue';
import DeleteUser from './DeleteUser.vue';
import AddUser from './AddUser.vue';

import { mapGetters } from 'vuex';

export default {

    components: {
        EditUser,
        DeleteUser,
        AddUser
    },

    data() {
        return {
        }
    },
    
    created: function () {
        // this.$store.dispatch('getAllMembers');
        this.$store.dispatch('getUsers');
        this.$store.dispatch('getFgroups');
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