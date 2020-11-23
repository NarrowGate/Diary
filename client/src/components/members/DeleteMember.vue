<template>
    <span class="delete d-flex" style="align-items: center;" title="Delete" @click="openModal">
        <i class="far fa-trash-alt"></i>
        <modal :open="modalOpen" @close="closeModal" @commit="delFn">
            <template slot="title">Delete {{this.user.fname}}?</template>
            <template slot="oktext">Delete</template>
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
        props: {
            user: {
                type: Object
            }
        },
        methods: {
            openModal() {
                this.modalOpen = true;
            },

            closeModal() {
                this.modalOpen = false;
            },    

            delFn() {
                this.$store.dispatch('deleteUser', this.user.id);
            }            
        }
        
    }
</script>

<style lang="scss">

    .delete {
        width: 30px; 
        height: 30px;
        color: #dc3545;
        margin: 5px;

        &:hover {
            cursor: pointer;
            color: #bd0e1f;
        }
    }

</style>