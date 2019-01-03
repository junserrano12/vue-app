<template>
    <div id="app" class="wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("loadClientInformations");
    }
}
</script>

<style lang="scss" src="@/assets/sass/main.scss"></style>