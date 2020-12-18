<template>
  <v-row>
    <v-col class="pa-6">
      <v-toolbar-title>Function Groups<add-function-group></add-function-group></v-toolbar-title>
      <v-list>
        <v-list-group
          v-for="f in fgroups"
          :key="f.name"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="f.name"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item-content class="pa-6">
            <v-list-item-title v-text="f.description"></v-list-item-title>
          </v-list-item-content>
        </v-list-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>

  import { mapGetters } from 'vuex';
  import AddFunctionGroup from './AddFunctionGroup.vue';

  export default {

    components: {
      AddFunctionGroup
    },

    data() {
      return {

      }
    },

    computed: 
      mapGetters({
        fgroups: "functionGroup/getAllFgroups"
      }),

    created() {
      this.$store.dispatch('functionGroup/getAll');
    }
  }
</script>

<style>

</style>