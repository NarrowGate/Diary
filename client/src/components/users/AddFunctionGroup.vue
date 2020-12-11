<template>
  <span class="addMember" @click="openModal">
      <i class="fas fa-user-plus"></i>
      <modal :open="modalOpen" @close="closeModal" @commit="addFnGroup">
        <template slot="title">Add Function Group</template>
        <template slot="body">
            <v-row>
                <v-col
                    cols="12"
                    sm="12"
                    md="12"
                >
                    <v-text-field
                        label="Function Group Name"
                        v-model="newFunctionGroup.name"
                        id="firstName"
                        required
                    >
                    </v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    md="12"
                >
                    <v-text-field
                        label="Description"
                        v-model="newFunctionGroup.description"
                        id="lastName"
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
import { mapGetters } from 'vuex';


export default {
    components: {
        Modal
    },
    data() {
        return {
            newFunctionGroup: {
                name:'',
                description: ''
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
        addFnGroup() {
            let newFgroup = {
                name:this.newFunctionGroup.name,
                description: this.newFunctionGroup.description
            };

           this.$store.dispatch('addFgroup', newFgroup).then(res => { 
               this.closeModal(); 
               this.newFunctionGroup.name= ""; 
               this.newFunctionGroup.description= "" 
            });
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