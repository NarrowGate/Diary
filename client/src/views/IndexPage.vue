<template>
    <v-app>
        <d-header/>
        <v-main class="text-left grey lighten-3 pt-0">
            <v-container fluid>
                <v-row>
                    <v-col cols="3">
                        <d-sidebar/>
                    </v-col>
                    <v-col cols="9">    
                        <v-card color="green lighten-4">
                            <v-subheader class="white--text">
                                <h2>Heading
                                    <v-divider></v-divider>                
                                </h2>
                            </v-subheader>
                            <router-view></router-view>
                        </v-card>                    
                    </v-col>
                </v-row>
            </v-container>
        </v-main> 
        <portal-target name="modals"></portal-target>   
        <v-footer>
            Footer
        </v-footer>
    </v-app>
</template>

<script>
    import dSidebar from '../components/dSidebar.vue';
    import dHeader from '../components/dHeader.vue';

    export default {
        components: {
            dHeader,
            dSidebar
        }
    }
</script>