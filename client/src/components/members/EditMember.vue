<template>
    <span class="edit d-flex justify-content-center align-items-center" title="Edit" @click="editFn">
        <i class="fas fa-pen"></i>
    </span>  
</template>

<script>
    export default {

        methods: {
            editFn(e) {
                let parentDiv = e.target.closest('div');

                let memberId = parentDiv.querySelector('input[name="id"]').value;
                let memberName = parentDiv.querySelector('input[name="name"]').value;
                let memberRole = parentDiv.querySelector('input[name="role"]').value;
                let memberGender = parentDiv.querySelector('input[name="gender"]').value;
                let memberDescription = parentDiv.querySelector('input[name="description"]').value;
                let memberOccupation = parentDiv.querySelector('input[name="occupation"]').value;

                let updatedMember = {
                    "Id": memberId,
                    "Name": memberName,
                    "Role": memberRole,
                    "Gender": memberGender,
                    "Description": memberDescription,
                    "Occupation": memberOccupation
                };
                this.$emit('memberEdited', updatedMember);
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