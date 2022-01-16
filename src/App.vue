<template>
    <div id="app">
        <router-view />

        <Loading />
    </div>
</template>
<script>
import Loading from "./components/Loading.vue";
export default {
    components: {
        Loading,
    },
    created() {
        this.$store.commit("all/loading", false);
    },
};
</script>

<style lang="scss"></style>
