<template>
  <span class="addMember" @click="openModal">
      <i class="fas fa-user-plus"></i>
      <modal :open="modalOpen" @close="closeModal" @commit="addFn">
          <template slot="title">Add Member</template>
          <template slot="body">
            <div>
                <input ref="a" />
                <input ref="b" />
                <input ref="c" />
                <input ref="d" />
                <input ref="e" />
            </div>
          </template>
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
           let member ={
               'name': this.$refs.a.value,
                'role': this.$refs.b.value,
                'gender': this.$refs.c.value,
                'occupation': this.$refs.d.value,
                'description': this.$refs.e.value           
           }
           this.$store.dispatch('addMember', member).then(res => this.closeModal());            
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