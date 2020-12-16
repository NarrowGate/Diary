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
                        md="6"
                    >
                        <v-text-field
                            label="First Name"
                            v-model="editedUser.fname"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                            label="Last Name"
                            v-model="editedUser.lname"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="12"                    
                    >
                        <v-radio-group 
                            row
                            v-model="editedUser.gender">
                            <v-radio label="Male" value="M"></v-radio>
                            <v-radio label="Female" value="F"></v-radio>
                        </v-radio-group>
                    </v-col>                  
                    <v-col
                        cols="12"
                        sm="6"
                        md="3"                    
                    >
                        <v-text-field
                            label="Phone"
                            v-model="editedUser.contact.phone"
                            required
                        >
                        </v-text-field>
                    </v-col> 
                    <v-col
                        cols="12"
                        sm="6"
                        md="9"                    
                    >
                        <v-text-field
                            label="Address"
                            v-model="editedUser.contact.address"
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
                            v-model="editedUser.type"
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
                            v-model="editedUser.role"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-select
                            :items="fgroupNames"
                            v-model="editedUser.fgroup"
                            label="Group"                            
                        ></v-select>                        
                    </v-col>
                </v-row>
            </template>
            <template slot="oktext">Save</template>
        </modal>
    </span>      
</template>

<script>
    import Modal from '@/components/utilities/Modal.vue';
    import { mapGetters } from 'vuex';



    export default {
        components: {
            Modal
        },
        data() {
            return {
                modalOpen: false,
                editedUser: {}
            }
        },
        props: ['user'],
        computed:
            mapGetters({
                allFgroups: 'getAllFgroups',
                fgroupNames: 'getAllFgroupsName'
            }),
        created() {
            this.editedUser = Object.assign({}, this.user);
        },
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
                    fname: this.editedUser.fname,
                    lname: this.editedUser.lname,
                    type: this.editedUser.type,
                    gender: this.editedUser.gender,
                    fgroup: this.editedUser.fgroup,
                    role: this.editedUser.role,
                    email: this.editedUser.email,
                    contact: {
                        phone: this.editedUser.contact.phone,
                        address: this.editedUser.contact.address
                    }
                }                
                let savePr = new Promise((res) => {
                    this.$store.dispatch('editUser', { id : this.user.id, user: updatedUser, res : res })
                });

                savePr.then(() => {
                    this.closeModal();                    
                })
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