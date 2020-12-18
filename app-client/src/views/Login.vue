<template>
  <div>
      <modal :open="modalOpen" @close="closeModal" @commit="login">
        <template slot="title">Login</template>
        <template slot="body">
            <v-row>
                <v-col
                    cols="12"
                    sm="12"
                    md="12"
                >
                    <v-text-field
                        label="Username"
                        v-model="username"
                        required
                    >
                    </v-text-field>
                </v-col>
            </v-row>
        </template>
        <template slot="oktext">Login</template>
      </modal>
  </div>
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
        modalOpen: true,
        username:''
      }
    },
    computed: 
      mapGetters( 'member', ['allMembers', 'getMember'] ),      
    methods: {
      closeModal() {
        alert('close login')        
      },
      login() {                
        this.$store.dispatch('member/getAll')
          .then(() => {
            this.allMembers.forEach(user => {
              if(user.email === this.username) {
                let userObj = this.getMember(user.id);
                this.$store.commit('user/LOGIN_USER', userObj);
                this.modalOpen = false;
                this.$router.push({ name: 'Home'});
              }
            });
          })
      }
    },
  }
</script>