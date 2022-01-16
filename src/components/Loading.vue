<template>
    <div>
        <div class="loading-content" v-if="isLoading">
            <hollow-dots-spinner
                :animation-duration="800"
                :dot-size="15"
                :dots-num="3"
                color="#fbc100"
            />
        </div>
    </div>
</template>

<script>
import { HollowDotsSpinner } from "epic-spinners";
import { mapState } from "vuex";
export default {
    components: {
        HollowDotsSpinner,
    },

    computed: {
        isLoading() {
            return this.$store.state.all.isLoading;
        },
    },
};
</script>

<style lang="scss">
.loading-content {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #333;
    opacity: 0.7;
    z-index: 100;
}
</style>
