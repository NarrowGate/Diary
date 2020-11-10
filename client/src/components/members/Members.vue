<template>
  <div>
    <h1 class="display-4 member">My members <add-member @addMemberEvt="addMember"></add-member></h1>

    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Gender</th>
                <th>Description</th>
                <th>Occupation</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="member of familyMembers" :key="member.id" ref="member">
                <td><input :value="member.id" name="id" class="" id="a" /></td>
                <td><input :value="member.name" name="name" class="" id="b" /></td>
                <td><input :value="member.role" name="role" class="" id="c" /></td>
                <td><input :value="member.gender" name="gender" class="" id="d" /></td>
                <td><input :value="member.description" name="description" class="" id="e" /></td>
                <td><input :value="member.occupation" name="occupation" class="" id="f" /></td>
                <td class="d-flex justify-content-between">
                    <edit-member :member="member"></edit-member>
                    <delete-member @memberDeleted="deleteMember" :memberName="member.name"></delete-member>
                </td>
            </tr>

        </tbody>
    </table>
  </div>
</template>

<script>
import EditMember from './EditMember.vue';
import DeleteMember from './DeleteMember.vue';
import AddMember from './AddMember.vue';


export default {

    components: {
        EditMember,
        DeleteMember,
        AddMember
    },

    data() {
      return {
        familyMembers: [],
        apiUrl:'https://localhost:2014/api/' 
      }
    },
    created: function () {

        let vi = this;
        fetch(`${this.apiUrl}FamilyMembers/`)
            .then(function (response) {
                response.json().then(function (data) {
                    vi.familyMembers = data;
                })
            });
    },
    methods: {
        addMember: function (member) {
            let vi = this;

            fetch(`${this.apiUrl}FamilyMembers/AddMember`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(member)
            }).then(function (response) {
                response.json().then(function (data) {
                    console.log('Member added');
                })
            })
        },
        deleteMember: function (member) {
            let vi = this;
            let memberId = member.Id;
            fetch(`${this.apiUrl}FamilyMembers/DeleteMember`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(member)
            }).then(function (response) {
                response.json().then(function (data) {
                    vi.familyMembers.forEach((member, index) => {
                        if (member.id == memberId) {
                            vi.familyMembers.splice(index, 1);
                        }
                    })
                })
            })
        }
    }
}
</script>

<style>

h1.member {
    display: flex;
    align-items: center;
}

</style>