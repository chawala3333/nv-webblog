<template>
    <div>
        <h1>Get All Users</h1>
        <h4>จำนวนผู้ใช้งาน: {{ users.length }}</h4>
        <p><button v-on:click="navigateTo('/user/create')">เพิ่มผู้ใชางาน</button></p>
        <div v-for="user in users" :key="user.id">
            <div>id: {{ user.id }}</div>
            <div>ชื่อ-นามสกุล: {{ user.name }} {{ user.lastname }}</div>
            <div>Email: {{ user.email }}</div>
            <div>Password: {{ user.password }}</div>
            <p>
                <button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/user/edit/'+user.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteUser(user)">ลบผู้ใช้</button>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data() {
        return {
            users: []
        }
    },
    async created () {
        try {
            this.users = (await UsersService.index()).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }, 
        async deleteUser(user) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.users = (await UsersService.index()).data
        }
    }

}
</script>

<style scoped>

</style>
