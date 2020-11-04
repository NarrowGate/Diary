<template>
    <span class="edit d-flex justify-content-center align-items-center" title="Edit" @click="editFn">
        <i class="fas fa-pen"></i>
        <div class="modal fade" :class="{'show':modalOpen}" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" @click="closeModal">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </span>      
</template>

<script>
    export default {

        data() {
            return {
                modalOpen: false
            }
        },

        methods: {
            editFn(e) {
                let parentDiv = e.target.closest('div');
                this.modalOpen = true;

                // let memberId = parentDiv.querySelector('input[name="id"]').value;
                // let memberName = parentDiv.querySelector('input[name="name"]').value;
                // let memberRole = parentDiv.querySelector('input[name="role"]').value;
                // let memberGender = parentDiv.querySelector('input[name="gender"]').value;
                // let memberDescription = parentDiv.querySelector('input[name="description"]').value;
                // let memberOccupation = parentDiv.querySelector('input[name="occupation"]').value;

                // let updatedMember = {
                //     "Id": memberId,
                //     "Name": memberName,
                //     "Role": memberRole,
                //     "Gender": memberGender,
                //     "Description": memberDescription,
                //     "Occupation": memberOccupation
                // };
                // this.$emit('memberEdited', updatedMember);
            },

            closeModal(e) {
                e.stopPropagation();
                this.modalOpen = false;
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

    .show {
        display: block;
    }

</style>