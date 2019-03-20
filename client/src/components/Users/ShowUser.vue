<template>
    <div>
        <h1>Get User By id</h1>
        <p>User ID: {{ user.id }}</p>
        <p>ชือ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
        <p>email: {{ user.email }}</p>
        <p>password: {{ user.password }}</p>
    </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data() {
        return {
            user: null
        }
    },
    async created() {
        try {
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style>

</style>
