<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
       <div>
        <ul>
            <li>
                <router-link :to="{name:'home'}" > Home</router-link>
            </li>

            <li>
                <router-link :to="{name:'project'}" >MyProject</router-link>
            </li>
        </ul>
       </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
