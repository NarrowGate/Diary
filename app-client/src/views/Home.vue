<template>
    <div style="height: 100%;">
        <d-header/>
        <v-main class="text-left grey lighten-3 pt-0" style="height: calc(100% - 100px)">
            <v-container fluid>
                <v-row>
                    <v-col cols="3">
                        <d-sidebar/>
                    </v-col>
                    <v-col cols="9">    
                        <v-card color="green lighten-4">
                            <!-- <v-subheader class="white--text">
                                <h2>Heading
                                    <v-divider></v-divider>                
                                </h2>
                            </v-subheader> -->
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
    </div>
</template>

<script>
    import dSidebar from '@/components/common/dSidebar.vue';
    import dHeader from '@/components/common/dHeader.vue';
    
    export default {
        components: {
            dHeader,
            dSidebar
        }
    }
</script>

<style>

</style>