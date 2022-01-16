<template>
    <div class="form-validation">
        <div class="container">
            <h4 class="title-text">Foydalanuvchi o'zgartirish</h4>

            <div class="card-row">
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.name.$error }"
                    >
                        <h4>Ism</h4>
                        <div class="input-div">
                            <input
                                placeholder="Ismni kiriting..."
                                type="text"
                                v-model="$v.user.name.$model"
                            />
                        </div>
                        <h6 v-if="!$v.user.name.required" class="error-text">
                            To'liq to'ldiring
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.passport.seria.$error }"
                    >
                        <h4>Pasport seriya</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.passport.seria.$model"
                                placeholder="AA"
                                v-mask="'AA'"
                                @input="
                                    user.passport.seria =
                                        $event.target.value.toUpperCase()
                                "
                            />
                        </div>
                        <h6
                            v-if="!$v.user.passport.seria.required"
                            class="error-text"
                        >
                            To'liq to'ldiring
                        </h6>
                        <h6
                            v-if="!$v.user.passport.seria.minLength"
                            class="error-text"
                        >
                            To'g'ri to'ldiring
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{
                            'form-error': $v.user.passport.number.$error,
                        }"
                    >
                        <h4>Pasport raqam</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.passport.number.$model"
                                placeholder="1234567"
                                v-mask="'#######'"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.passport.number.required"
                            class="error-text"
                        >
                            To'liq to'ldiring
                        </h6>
                        <h6
                            v-if="!$v.user.passport.number.minLength"
                            class="error-text"
                        >
                            To'g'ri to'ldiring
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.phone.$error }"
                    >
                        <h4>Telefon raqam</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model.trim="$v.user.phone.$model"
                                placeholder="+998 -- --- -- --"
                                v-mask="'+998 ## ### ## ##'"
                            />
                        </div>
                        <h6 v-if="!$v.user.phone.required" class="error-text">
                            To'liq to'ldiring
                        </h6>
                        <h6 v-if="!$v.user.phone.minLength" class="error-text">
                            To'g'ri to'ldiring
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.region.$error }"
                    >
                        <h4>Viloyat</h4>
                        <div class="input-div">
                            <select v-model="$v.user.region.$model">
                                <option
                                    value=""
                                    style="display: none"
                                    disabled
                                    selected
                                >
                                    Танланг
                                </option>
                                <option
                                    v-for="(item, index) in regions"
                                    :key="index"
                                    :value="item"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                        <h6 v-if="!$v.user.region.required" class="error-text">
                            To'liq to'ldiring
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div class="form-group">
                        <h4>Status</h4>
                        <div class="radio-custom">
                            <label class="cont"
                                >Faol
                                <input
                                    type="radio"
                                    checked="checked"
                                    name="status"
                                    :value="true"
                                    v-model="user.status"
                                />
                                <span class="checkmark"></span>
                            </label>
                            <label class="cont"
                                >Faol emas
                                <input
                                    type="radio"
                                    name="status"
                                    :value="false"
                                    v-model="user.status"
                                />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button class="mt-25 btn-simple-outline" @click="submitData">
                    Saqlash
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength, helpers } from "vuelidate/lib/validators";
const alpha = helpers.regex(
    "alpha",
    /^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?\/~_+-=|\]))).{6,32}$/
);
const email = helpers.regex(
    "alpha",
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default {
    layout: "admin",

    data() {
        return {
            user: {
                name: "",
                passport: {
                    seria: "",
                    number: "",
                },
                phone: "",
                region: "",
                status: true,
            },

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

    validations: {
        user: {
            name: {
                required,
            },

            passport: {
                seria: {
                    required,
                    minLength: minLength(2),
                },
                number: {
                    required,
                    minLength: minLength(7),
                },
            },

            phone: {
                required,
                minLength: minLength(17),
            },

            region: {
                required,
            },
        },
    },
    created() {
        // get tests vuex
        this.user = this.$store.state.user.users[this.$route.params.id];
    },
    methods: {
        async submitData() {
            this.$v.user.$touch();

            if (!this.$v.user.$invalid) {
                this.$store.commit("all/loading", true);

                let phone = this.user.phone.replace(/[^0-9]/g, "");

                await this.$store.commit("user/EDIT_USER", {
                    index: this.$route.params.id,
                    data: {
                        name: this.user.name,
                        phone,
                        passport: this.user.passport,
                        region: this.user.region,
                        status: this.user.status,
                    },
                });

                this.$store.commit("all/loading", false);

                this.$router.push({ name: `user` });
            }
        },
    },
};
</script>

<style></style>
