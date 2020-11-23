<template>
    <span class="edit d-flex" title="Edit" @click="openModal" style="align-items: center;">
        <i class="fas fa-pen"></i>
        <modal :open="modalOpen" @close="closeModal" @commit="save">
            <template slot="title">
                <span class="headline">Edit User</span>
            </template>
            <template slot="body">
                <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                            label="First Name"
                            :value="user.fname"
                            id="firstName"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                            label="Last Name"
                            :value="user.lname"
                            id="lastName"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"                    
                    >
                        <v-text-field
                            label="Gender"
                            :value="user.gender"
                            id="gender"
                            required
                        >
                        </v-text-field>
                    </v-col>                  
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"                    
                    >
                        <v-text-field
                            label="Phone"
                            :value="user.contact.phone"
                            id="phone"
                            required
                        >
                        </v-text-field>
                    </v-col> 
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"                    
                    >
                        <v-text-field
                            label="Address"
                            :value="user.contact.address"
                            id="address"
                            required
                        >
                        </v-text-field>
                    </v-col>  
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                            label="Type"
                            :value="user.type"
                            id="type"
                            required
                        >
                        </v-text-field>
                    </v-col>                                                                                                
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                            label="Role"
                            :value="user.role"
                            id="role"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                            label="Group"
                            :value="user.fgroup"
                            id="fgroup"
                            required
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </template>
            <template slot="oktext">Save</template>
        </modal>
    </span>      
</template>

<script>
    import Modal from '../utilities/Modal.vue';
    // import MembersService from '../../services/MembersService.js';
    import UsersService from '../../services/UsersService.js';
    import { mapGetters } from 'vuex';



    export default {

        components: {
            Modal
        },

        data() {
            return {
                modalOpen: false
            }
        },

        props: ['user'],

// watch: {
//     loading: (nw, old) => {
//         if(!nw) {
//             this.closeModal()
//         }
//     }
// },
        methods: {

            openModal() {
                this.modalOpen = true;
            },

            closeModal() {
                console.log('ksksk');
                this.modalOpen = false;
            },            

            save() {
                let updatedUser = {
                    fname: document.querySelector('#firstName').value,
                    lname: document.querySelector('#lastName').value,
                    type: document.querySelector('#type').value,
                    gender: document.querySelector('#gender').value,
                    fgroup: document.querySelector('#fgroup').value,
                    role: document.querySelector('#role').value,
                    contact: {
                        phone: document.querySelector('#phone').value,
                        address: document.querySelector('#address').value
                    }
                }
                let proom = new Promise((res, rej) => {
                    this.$store.dispatch('editUser', { id : this.user.id, user: updatedUser, res : res })
                });

                proom.then(() => {
                    this.closeModal();
                    
                })
                // this.$store.dispatch('editUser', { id : this.user.id, user: updatedUser })
            }
        }
        
    }
</script>

<style lang="scss">

    .edit {
        width: 30px; 
        height: 30px;
        color: #41b983;
        margin: 5px;

        &:hover {
            cursor: pointer;
            color: #1b905b;
        }
    }

</style>