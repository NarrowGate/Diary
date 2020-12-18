<template>
  <div>
      Profile Details
      <v-row class="pa-6">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="First Name"
            v-model="user.fname"
            >

          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
          label="Last Name"     
          v-model="user.lname"  
          >

          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
          label="Type"
          v-model="user.type"
          >

          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
          label="Gender"
          v-model="user.gender"
          >

          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
          label="Function Group"
          v-model="user.fgroup"
          >

          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
          label="Role"
          v-model="user.role"
          >

          </v-text-field>
        </v-col>  
        <v-col cols="12" sm="6" md="6">
          <v-text-field
          label="Phone"
          v-model="user.contact.phone"
          >

          </v-text-field>
        </v-col>   
        <v-col cols="12" sm="6" md="6">
          <v-text-field
          label="Address"
          v-model="user.contact.address"
          >

          </v-text-field>
        </v-col>      
        <v-col cols="12" sm="6" md="6">
                              <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                        Save
                    </v-btn>
        </v-col>
      </v-row>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        user: {
          fname: '',
          lname: '',
          type: '',
          gender:'',
          fgroup: '',
          role:'',
          contact: {
            phone: '',
            address:''
          }
        }
      }
    },
    computed: {
      ...mapGetters('member', ['getMember']),
      ...mapGetters({
        loggedInUserId: 'user/loggedInUserId'
      })
    },
    created() {

      let loggedInUser = this.getMember(this.loggedInUserId);

      this.user.fname = loggedInUser.fname;
      this.user.lname = loggedInUser.lname;
      this.user.type = loggedInUser.type;
      this.user.gender = loggedInUser.gender;
      this.user.fgroup = loggedInUser.fgroup;
      this.user.role = loggedInUser.role;
      this.user.contact.phone = loggedInUser.contact.phone;
      this.user.contact.address = loggedInUser.contact.address;
    },
  methods: {
    save() {
      this.$store.dispatch('member/edit',{ id : this.loggedInUserId, member: this.user })
        .then(() => {
          console.log('Profile updated');
        })
    }
  }
  }
</script>