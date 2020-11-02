<template>
<div class="text-center">
    <h1 class="display-4">Welcome {{dummytext}}</h1>
    <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>

    <div v-for="member of familyMembers" :key="member.id" ref="member">
        <input :value="member.id" name="id" id="a" />
        <input :value="member.name" name="name" id="b" />
        <input :value="member.role" name="role" id="c" />
        <input :value="member.gender" name="gender" id="d" />
        <input :value="member.description" name="description" id="e" />
        <input :value="member.occupation" name="occupation" id="f" />

        <button style="width: 50px; height: 30px" value="Edit" @@click="updateMember">Edit</button>
        <button style="width: 50px; height: 30px" value="Delete" @@click="deleteMember">Delete</button>
    </div>

    <div>
        <input ref="a" />
        <input ref="b" />
        <input ref="c" />
        <input ref="d" />
        <input ref="e" />
    </div>
    <button @@click="addMember" name="addMember" style="width: 100px; height: 30px" value="Add"></button>
</div>
</template>

<script>
export default {
  name: 'app',
            data() {
              return {
                dummytext: 'dummy',
                familyMembers: []
              }
            },
            created: function () {

                let vi = this;
                fetch('https://localhost:2014/api/FamilyMembers/',)
                    .then(function (response) {
                        response.json().then(function (data) {
                            vi.familyMembers = data;
                            this.familyMembers = [{ id: '2', name: 'Bob', role: 'Roll', gender: 'Male', description: 'desc', occupation: 'sdfsdfs' }];

                        })
                    });
            },
            methods: {
                addMember: function () {
                    debugger;
                    let vi = this;

                    fetch('/api/FamilyMembers/AddMember', {
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
                updateMember: function (e) {
                    debugger;
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

                    console.log(updatedMember);
                    debugger;


                    fetch('/api/FamilyMembers/EditMember', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedMember)
                    }).then(function (response) {
                        response.json().then(function (data) {
                            debugger;
                        })
                    })
                },
                deleteMember: function (e) {
                    let vi = this;
                    let parentDiv = e.target.closest('div');

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

                    fetch('/api/FamilyMembers/DeleteMember', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(memberToDelete)
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>



@{ ViewData["Title"] = "Home Page"; }

<div id="app1"></div>



