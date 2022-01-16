<template>
    <div>
        <Header />
        <div class="client-layout">
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header.vue";

export default {
    components: {
        Header,
    },
};
</script>

<style></style>
