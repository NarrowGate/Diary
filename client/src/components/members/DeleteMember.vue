<template>
    <span class="delete d-flex justify-content-center align-items-center" title="Delete" @click="openModal">
        <i class="far fa-trash-alt"></i>
        <modal :open="modalOpen" @close="closeModal" @commit="delFn">
            <template slot="title">Delete the member {{this.memberName}}?</template>
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
            memberName: {
                type: String
            },
        },
        methods: {
            openModal() {
                this.modalOpen = true;
            },

            closeModal() {
                this.modalOpen = false;
            },    

            delFn() {
                let parentDiv = this.$el.closest('tr');

                let memberId = parentDiv.querySelector('input[name="id"]').value;
                let memberName = parentDiv.querySelector('input[name="name"]').value;
                let memberRole = parentDiv.querySelector('input[name="role"]').value;
                let memberGender = parentDiv.querySelector('input[name="gender"]').value;
                let memberDescription = parentDiv.querySelector('input[name="description"]').value;
                let memberOccupation = parentDiv.querySelector('input[name="occupation"]').value;

                let memberToDelete = {
                    "Id": memberId,
                    "Name": memberName,
                    "Role": memberRole,
                    "Gender": memberGender,
                    "Description": memberDescription,
                    "Occupation": memberOccupation
                };

                this.$emit('memberDeleted', memberToDelete);
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