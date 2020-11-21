<template>
    <span class="edit d-flex justify-content-center align-items-center" title="Edit" @click="openModal">
        <i class="fas fa-pen"></i>
        <modal :open="modalOpen" @close="closeModal" @commit="save">
            <template slot="title">Edit User</template>
            <template slot="body">
                <input :value="user.id" name="id" class="" id="a" />
                <input :value="user.name" name="name" class="" id="b" />
                <input :value="user.role" name="role" class="" id="c" />
                <input :value="user.gender" name="gender" class="" id="d" />
            </template>
        </modal>
    </span>      
</template>

<script>
    import Modal from '../utilities/Modal.vue';
    // import MembersService from '../../services/MembersService.js';
    import UsersService from '../../services/UsersService.js';


    export default {

        components: {
            Modal
        },

        data() {
            return {
                modalOpen: false
            }
        },

        props: ['user'],

        methods: {

            openModal() {
                this.modalOpen = true;
            },

            closeModal() {
                this.modalOpen = false;
            },            

            save() {
                let modalDom = document.querySelector('.modal-body');

                let userId = modalDom.querySelector('input[name="id"]').value;
                let userName = modalDom.querySelector('input[name="name"]').value;
                let userRole = modalDom.querySelector('input[name="role"]').value;
                let userGender = modalDom.querySelector('input[name="gender"]').value;

                let updatedUser = {
                    "Id": userId,
                    "Name": userName,
                    "Role": userRole,
                    "Gender": userGender
                };

                // this.$store.dispatch('editUser', userId, updatedUser).then(res => { this.modalOpen = false; });
                this.$store.dispatch('editUser', userId, updatedUser).then(res => {
                    this.modalOpen = false;
                });
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