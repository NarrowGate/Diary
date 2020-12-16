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
      mapGetters({
        allUsers : 'allUsers',
        getUser: 'getUser'
      }),      
    methods: {
      closeModal() {
        alert('close login')        
      },
      login() {                
        let getUsersPR = new Promise((resPr) => {
          this.$store.dispatch('getUsers', resPr)
        });
        getUsersPR.then(() => {
          this.allUsers.forEach(user => {
            if(user.email === this.username) {
              let userObj = this.getUser(user.id);
              this.$store.commit('LOGIN_USER', userObj);
              this.modalOpen = false;
              this.$router.push({ name: 'Home'});
            }
          });
        });
      }
    },
  }
</script>