<template>
    <span class="edit d-flex justify-content-center align-items-center" title="Edit" @click="openModal">
        <i class="fas fa-pen"></i>
        <modal :open="modalOpen" @close="closeModal" @commit="save">
            <template slot="title">Edit Member</template>
            <template slot="body">
                <input :value="member.id" name="id" class="" id="a" />
                <input :value="member.name" name="name" class="" id="b" />
                <input :value="member.role" name="role" class="" id="c" />
                <input :value="member.gender" name="gender" class="" id="d" />
                <input :value="member.description" name="description" class="" id="e" />
                <input :value="member.occupation" name="occupation" class="" id="f" />
            </template>
        </modal>
    </span>      
</template>

<script>
    import Modal from '../utilities/Modal.vue';
    import MembersService from '../../services/MembersService.js';


    export default {

        components: {
            Modal
        },

        data() {
            return {
                modalOpen: false
            }
        },

        props: ['member'],

        methods: {

            openModal() {
                this.modalOpen = true;
            },

            closeModal() {
                this.modalOpen = false;
            },            

            save() {
                let modalDom = document.querySelector('.modal-body');

                let memberId = modalDom.querySelector('input[name="id"]').value;
                let memberName = modalDom.querySelector('input[name="name"]').value;
                let memberRole = modalDom.querySelector('input[name="role"]').value;
                let memberGender = modalDom.querySelector('input[name="gender"]').value;
                let memberDescription = modalDom.querySelector('input[name="description"]').value;
                let memberOccupation = modalDom.querySelector('input[name="occupation"]').value;

                let updatedMember = {
                    "Id": memberId,
                    "Name": memberName,
                    "Role": memberRole,
                    "Gender": memberGender,
                    "Description": memberDescription,
                    "Occupation": memberOccupation
                };

                MembersService.editMember(updatedMember).then(response => {
                    this.modalOpen = false;;
                })

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