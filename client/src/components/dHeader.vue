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
    </v-app-bar>
</template>

<script>
    export default {
data() {
    return {        
        homeLink : { name: "Home" },
        adminLink : { name: "Admin" }
    }
},
    }
</script>