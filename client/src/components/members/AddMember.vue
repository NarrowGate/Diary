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
                    md="4"
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
                    md="4"
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
                    md="4"                    
                >
                    <v-text-field
                        label="Gender"
                        v-model="user.gender"
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
                        v-model="user.contact.phone"
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
                    <v-text-field
                        label="Group"
                        v-model="user.fgroup"
                        id="fgroup"
                        required
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </template>
        <template slot="oktext">Add</template>
      </modal>
  </span>
</template>

<script>
import Modal from '../utilities/Modal.vue';

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
    methods: {
        openModal() {
            this.modalOpen = true;
        },

        closeModal() {
            this.modalOpen = false;
        },
        addFn() {
            let newUser = {
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
            };

           this.$store.dispatch('addUser', newUser).then(res => this.closeModal());
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