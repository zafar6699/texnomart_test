<template>
    <div>
        <div class="container">
            <pre> {{ $store.state.auth.user }} </pre>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        console.log("token", sessionStorage.getItem("token"));
    },
};
</script>

<style></style>
