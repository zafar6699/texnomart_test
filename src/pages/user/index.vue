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
                            <li>Saralash</li>
                        </ul>

                        <div class="create-actions">
                            <router-link
                                class="btn-simple"
                                :to="{ name: `user-create` }"
                            >
                                <i class="fa fa-plus"></i> Qo'shish
                            </router-link>
                        </div>
                    </div>

                    <div class="filter-box">
                        <div class="card-row">
                            <div class="card-4">
                                <div class="form-group">
                                    <div class="input-div">
                                        <input
                                            placeholder="Ism bo'yicha"
                                            type="text"
                                            v-model="filter.name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="card-4">
                                <div class="form-group">
                                    <div class="input-div">
                                        <select v-model="filter.region">
                                            <option :value="'all'" selected>
                                                Viloyat: barchasi
                                            </option>
                                            <option
                                                v-for="(item, index) in regions"
                                                :key="index"
                                                :value="item.id"
                                            >
                                                {{ item.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card-4">
                                <div class="form-group">
                                    <div class="input-div">
                                        <select v-model="filter.status">
                                            <option :value="'all'" selected>
                                                Status: barchasi
                                            </option>
                                            <option :value="true">Faol</option>
                                            <option :value="false">
                                                Faol emas
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card-4">
                                <div class="form-group">
                                    <button
                                        class="btn-success"
                                        @click="clickFilter"
                                    >
                                        Saralash
                                    </button>
                                    <button
                                        class="btn-danger"
                                        @click="clearFilter"
                                    >
                                        Tozalash
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box-all">
                        <table class="table-client">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ism</th>
                                    <th>Telefon nomer</th>
                                    <th>Viloyat</th>
                                    <th>Passport</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in users" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.phone }}</td>
                                    <td>{{ item.region.name }}</td>
                                    <td>
                                        {{ item.passport.seria }}
                                        {{ item.passport.number }}
                                    </td>
                                    <td>
                                        <span
                                            v-if="item.status"
                                            class="chip chip-success"
                                        >
                                            Faol
                                        </span>
                                        <span v-else class="chip chip-danger">
                                            Faol emas
                                        </span>
                                    </td>

                                    <td class="actions-td">
                                        <router-link
                                            class="btn-edit"
                                            :to="{
                                                name: `user-edit`,
                                                params: { id: index },
                                            }"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </router-link>
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
            //for actions
            isDelete: false,
            id: null,
            //for actions and

            users: [],

            filter: {
                name: "",
                status: "all",
                region: "all",
            },
            defaultData: [],
            regions: [
                {
                    id: 1,
                    name: "Andijon",
                },
                {
                    id: 2,
                    name: "Samarqand",
                },
                {
                    id: 3,
                    name: "Jizzax",
                },
            ],
        };
    },

    created() {
        // get tests vuex
        this.users = this.$store.state.user.users;
        this.defaultData = this.$store.state.user.users;
    },

    methods: {
        clickFilter() {
            //filter name
            if (this.filter.name != "") {
                this.users = [];
                this.defaultData.forEach((item) => {
                    let indexOf = item.name
                        .toLowerCase()
                        .indexOf(this.filter.name.toLowerCase());
                    if (indexOf != -1) {
                        this.users.push(item);
                    }
                });
            } else {
                this.users = this.defaultData;
            }

            //filter region

            if (this.filter.region != "all") {
                this.users = this.users.filter(
                    (item) => item.region.id == this.filter.region
                );
            }

            if (this.filter.status != "all") {
                this.users = this.users.filter(
                    (item) => item.status == this.filter.status
                );
            }
        },
        clearFilter() {
            this.filter.name = "";
            this.filter.region = "all";
            this.filter.status = "all";
            this.users = this.defaultData;
        },
        openDelete(index) {
            this.isDelete = true;
            this.id = index;
        },
        async deleteRequest() {
            await this.$store.commit("user/DELETE_USER", this.id);

            this.isDelete = false;
            this.id = null;
        },
    },
};
</script>

<style></style>
