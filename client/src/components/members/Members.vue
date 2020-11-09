<template>
  <div>
    <h1 class="display-4">My members</h1>
    <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
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
    <div>
        <input ref="a" />
        <input ref="b" />
        <input ref="c" />
        <input ref="d" />
        <input ref="e" />
    </div>
    <button @click="addMember" name="addMember" style="width: 100px; height: 30px" value="Add"></button>
  </div>
</template>

<script>
import EditMember from './EditMember.vue';
import DeleteMember from './DeleteMember.vue';

export default {

    components: {
        EditMember,
        DeleteMember
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
        addMember: function () {
            let vi = this;

            fetch(`${this.apiUrl}FamilyMembers/AddMember`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': vi.$refs.a.value,
                    'role': vi.$refs.b.value,
                    'gender': vi.$refs.c.value,
                    'occupation': vi.$refs.d.value,
                    'description': vi.$refs.e.value
                })
            }).then(function (response) {
                response.json().then(function (data) {
                    vi.familyMembers = data;
                    vi.$refs.a.value = "";
                    vi.$refs.b.value = "";
                    vi.$refs.c.value = "";
                    vi.$refs.d.value = "";
                    vi.$refs.e.value = "";
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