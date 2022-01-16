<template>
    <div>
        <div class="test-content">
            <div class="container">
                <div class="test-inner">
                    <div class="client-breadcrumb">
                        <ul>
                            <li>
                                <router-link :to="{ name: `index` }"
                                    >Bosh sahifa /
                                </router-link>
                            </li>
                            <li>Testlar</li>
                        </ul>

                        <div class="create-actions">
                            <router-link
                                class="btn-simple-outline"
                                :to="{ name: `test-start` }"
                            >
                                Test yechish
                            </router-link>
                            <router-link
                                class="btn-simple"
                                :to="{ name: `test-create` }"
                            >
                                + Savol qo'shish
                            </router-link>
                        </div>
                    </div>

                    <div class="filter-box">
                        <h4>Savol turi:</h4>

                        <select v-model="typeQuestion" @change="changeType">
                            <option value="all">Barchasi</option>
                            <option :value="1">Bitta javobli</option>
                            <option :value="2">Ko'p javobli</option>
                            <option :value="3">Yoziladigan</option>
                        </select>
                    </div>

                    <div class="box-all">
                        <table class="table-client">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Savol</th>
                                    <th>Turi</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in tests" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.title }}</td>
                                    <td>
                                        <span v-if="item.type == 1">
                                            bitta javobli
                                        </span>
                                        <span v-if="item.type == 2">
                                            ko'p javobli
                                        </span>
                                        <span v-if="item.type == 3">
                                            yoziladigan
                                        </span>
                                    </td>
                                    <td class="actions-td">
                                        <button
                                            class="btn-delete"
                                            @click="openDelete(index)"
                                        >
                                            <i class="fa fa-trash"> </i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="fix-vh" v-if="isDelete" @click="isDelete = false"></div>
        <div v-if="isDelete" class="modal" style="width: 400px">
            <div class="modal-header">
                <h2>Ishonchingiz komilmi?</h2>
            </div>

            <div class="modal-body"></div>
            <div class="modal-bottom">
                <button @click="isDelete = false" class="btn-danger">
                    Bekor qilish
                </button>
                <button @click="deleteRequest" class="btn-success">Ha</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDelete: false,
            id: null,
            tests: [],
            typeQuestion: "all",
        };
    },

    created() {
        // get tests vuex
        this.tests = this.$store.state.test.tests;
    },

    methods: {
        openDelete(index) {
            this.isDelete = true;
            this.id = index;
        },
        async deleteRequest() {
            await this.$store.commit("test/DELETE_QUESTION", this.id);

            this.isDelete = false;
            this.id = null;
        },
        changeType() {
            if (this.typeQuestion == "all") {
                this.tests = this.$store.state.test.tests;
            } else {
                this.tests = this.$store.state.test.tests.filter(
                    (item) => item.type == this.typeQuestion
                );
            }
        },
    },
};
</script>

<style></style>
