<template>
    <v-app-bar app>
        <v-chip :to = "homeLink"
            color="error" 
            icon="mdi-lock" 
            dark 
            bordered
        >
            D
        </v-chip>
        <router-link :to= "homeLink" tag="li" active-class="active" exact>
            <a class="text-decoration-none">
                Dashboard
            </a>
        </router-link>
        <router-link :to= "adminLink" tag="li" active-class="active" exact>
            <a class="text-decoration-none">
                Admin
            </a>
        </router-link>
        <v-spacer></v-spacer>
        <a class="text-decoration-none pr-5" v-if="isLoggedIn" @click="logout">
            Hi, {{getUser(userId).fname}}
        </a>   
        <a class="text-decoration-none" v-if="isLoggedIn" @click="logout">
            Logout
        </a>
    </v-app-bar>
</template>

<script>

import { mapGetters } from 'vuex';

    export default {
        data() {
            return {        
                homeLink : { name: "Home" },
                adminLink : { name: "Admin" }
            }
        },

        computed: 
            mapGetters({
                isLoggedIn: 'isUserLoggedIn',
                userName: 'userName',
                getUser: 'getUser',
                userId: 'loggedInUserId'
            }),
        
        methods: {
            logout() {
                this.$store.commit('LOGOUT');
                this.$router.push({ name: 'Login' })
            }
        }

    }
</script>