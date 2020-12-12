<template>
  <span class="addMember" @click="openModal">
      <i class="fas fa-user-plus"></i>
      <modal :open="modalOpen" @close="closeModal" @commit="addFn">
        <template slot="title">Add Member</template>
        <template slot="body">
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="6"
                >
                    <v-text-field
                        label="First Name"
                        v-model="user.fname"
                        id="firstName"
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
                        v-model="user.lname"
                        id="lastName"
                        required
                    >
                    </v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="12"                    
                >
                    <!-- <v-text-field
                        label="Gender"
                        v-model="user.gender"
                        id="gender"
                        required
                    >
                    </v-text-field> -->
                    <v-radio-group 
                        row
                        v-model="user.gender">
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
                        v-model="user.contact.phone"
                        id="phone"
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
                        v-model="user.contact.address"
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
                        v-model="user.type"
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
                        v-model="user.role"
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
                    <!-- <v-text-field
                        label="Group"
                        v-model="user.fgroup"
                        id="fgroup"
                        required
                    >
                    </v-text-field> -->
                    <v-select
                        :items="fgroups"
                        v-model="user.fgroup"
                        label="Group"
                    ></v-select>                       
                </v-col>
            </v-row>
        </template>
        <template slot="oktext">Add</template>
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
            user: {
                fname:'',
                lname: '',
                type: '',
                gender: '',
                fgroup: '',
                role:'',
                contact: {
                    phone:'',
                    address:''
                }
            },
            modalOpen: false
        }
    },
    computed: 
        mapGetters({
            fgroups: 'getAllFgroups'
        }),
    methods: {
        openModal() {
            this.modalOpen = true;
        },

        closeModal() {
            this.modalOpen = false;
        },
        addFn() {
            let newUser = {
                fname:this.user.fname,
                lname: this.user.lname,
                type: this.user.type,
                gender: this.user.gender,
                fgroup: this.user.fgroup,
                role: this.user.role,
                contact: {
                    phone: this.user.contact.phone,
                    address: this.user.contact.address
                }
            };

           this.$store.dispatch('addUser', newUser).then(() => { this.closeModal() });
        } 
    },
};
</script>

<style lang="scss">
    .addMember {
        font-size: 18px;
        color: #41b983;
        margin-left: 10px;
        margin-top: 10px;

        &:hover {
            cursor: pointer;
        }
    }
</style>