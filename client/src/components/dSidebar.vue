<template>
    <v-card color="error" rounded>
        <v-subheader class="white--text">
            <h2>All
                <v-divider></v-divider>                
            </h2>
        </v-subheader>
        <br>
        <v-list class="transparent">
            <v-list-item-group>
                <v-list-item v-for="item of sidebarItems" :key="item.title">
                    <v-list-item-icon>
                        <v-icon> {{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <router-link :to="item.to" tag="li" active-class="active" exact>
                                <a class="white--text text-decoration-none">
                                    {{item.title}}
                                </a>
                            </router-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <ul class="nav flex-column">
            <!-- <li class="nav-item">
                <router-link to="/user" tag="li" active-class="active" exact>
                <a class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Products
                </a>
                </router-link>
            </li> -->
            <li class="nav-item">
                <!-- <router-link to="/members" tag="li" active-class="active" exact>
                <a class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    Customers
                </a>
                </router-link> -->
            </li>
        </ul>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                sidebarItems: [
                    {
                        title: 'Roles',
                        to: { name : 'User' },
                        icon: 'mdi-face-profile'
                    },
                    {
                        title: 'Users',
                        to: { name : 'Users' },
                        icon: 'mdi-account-multiple'
                    },
                    {
                        title: 'Function Groups',
                        to: { name : 'FunctionGroups' },
                        icon: 'mdi-account-group'
                    },
                    {
                        title: 'Admin',
                        to: { name : 'Admin' },
                        icon: 'mdi-head-minus'
                    }                                    
                ]
            }
        }
    }
</script>