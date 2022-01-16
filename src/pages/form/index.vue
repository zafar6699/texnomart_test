<template>
    <div class="form-validation">
        <div class="container">
            <h4 class="title-text">Foydalanuvchi qo'shish</h4>

            <div class="card-row">
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.login.$error }"
                    >
                        <h4>Login</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.login.$model"
                                value=""
                            />
                        </div>

                        <h6 v-if="!$v.user.login.required" class="error-text">
                            To'liq to'ldiring
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.password.$error }"
                    >
                        <h4>Parol</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.password.$model"
                            />
                        </div>

                        <h6
                            v-if="!$v.user.password.required"
                            class="error-text"
                        >
                            To'liq to'ldiring
                        </h6>
                        <h6 v-if="!$v.user.password.alpha" class="error-text">
                            Parolda katta va kichik harf, son, maxsus belgilar
                            bo'lishi kerak va kamida 6 ta belgi bo'lishi kerak
                        </h6>
                    </div>
                </div>
                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.name.$error }"
                    >
                        <h4>Ism</h4>
                        <div class="input-div">
                            <input type="text" v-model="$v.user.name.$model" />
                        </div>
                        <h6 v-if="!$v.user.name.required" class="error-text">
                            To'liq to'ldiring
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.birthday.$error }"
                    >
                        <h4>Tug'ilgan sana</h4>
                        <div class="input-div">
                            <input
                                type="date"
                                v-model="$v.user.birthday.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.birthday.required"
                            class="error-text"
                        >
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

                <div
                    class="card-4"
                    :class="{ 'form-error': $v.user.passport.exp.$error }"
                >
                    <div class="form-group">
                        <h4>Qachon berilgan</h4>
                        <div class="input-div">
                            <input
                                type="date"
                                v-model="$v.user.passport.exp.$model"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.passport.exp.required"
                            class="error-text"
                        >
                            To'liq to'ldiring
                        </h6>
                    </div>
                </div>

                <div class="card-4">
                    <div
                        class="form-group"
                        :class="{ 'form-error': $v.user.passport.jshir.$error }"
                    >
                        <h4>JSHSHIR (ПИНФЛ)</h4>
                        <div class="input-div">
                            <input
                                type="text"
                                v-model="$v.user.passport.jshir.$model"
                                v-mask="'##############'"
                            />
                        </div>
                        <h6
                            v-if="!$v.user.passport.jshir.required"
                            class="error-text"
                        >
                            To'liq to'ldiring
                        </h6>
                        <h6
                            v-if="!$v.user.passport.jshir.minLength"
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
                        :class="{ 'form-error': $v.user.email.$error }"
                    >
                        <h4>Email</h4>
                        <div class="input-div">
                            <input type="text" v-model="$v.user.email.$model" />
                        </div>
                        <h6 v-if="!$v.user.email.required" class="error-text">
                            To'liq to'ldiring
                        </h6>
                        <h6 v-if="!$v.user.email.email" class="error-text">
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
                                <option value="1">Суппер админ</option>
                                <option value="2">Toshkent</option>
                                <option value="3">Xorazm</option>
                            </select>
                        </div>
                        <h6 v-if="!$v.user.region.required" class="error-text">
                            To'liq to'ldiring
                        </h6>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="title-text">Qo'shimcha</h4>

                <div class="activity">
                    <div
                        class="card-row border-bottom-1"
                        v-for="(v, index) in $v.user.activity.$each.$iter"
                        :key="index"
                    >
                        <div class="card-4">
                            <div
                                class="form-group"
                                :class="{
                                    'form-error': v.region.$error,
                                }"
                            >
                                <h4>Viloyat</h4>
                                <div class="input-div">
                                    <select v-model="v.region.$model">
                                        <option
                                            value=""
                                            style="display: none"
                                            disabled
                                            selected
                                        >
                                            Танланг
                                        </option>
                                        <option value="1">Суппер админ</option>
                                        <option value="2">Toshkent</option>
                                        <option value="3">Xorazm</option>
                                    </select>
                                </div>
                                <h6
                                    v-if="!v.region.required"
                                    class="error-text"
                                >
                                    To'liq to'ldiring
                                </h6>
                            </div>
                        </div>

                        <div class="card-4">
                            <div
                                class="form-group"
                                :class="{
                                    'form-error': v.phone.$error,
                                }"
                            >
                                <h4>Telefon raqam</h4>
                                <div class="input-div">
                                    <input
                                        type="text"
                                        v-model="v.phone.$model"
                                        placeholder="+998 -- --- -- --"
                                        v-mask="'+998 ## ### ## ##'"
                                    />
                                </div>
                                <h6 v-if="!v.phone.required" class="error-text">
                                    To'liq to'ldiring
                                </h6>
                                <h6
                                    v-if="!v.phone.minLength"
                                    class="error-text"
                                >
                                    To'g'ri to'ldiring
                                </h6>
                            </div>
                        </div>

                        <div class="card-4">
                            <button
                                class="btn-delete-form"
                                v-if="user.activity.length > 1"
                                @click="removeActivity(index)"
                            >
                                O'chirish
                            </button>
                        </div>
                    </div>

                    <div>
                        <button class="btn-simple" @click="addActivity">
                            <b> + Yana qo'shish </b>
                        </button>
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
                role: "admin",
                login: "",
                password: "",
                name: "",
                birthday: "",
                passport: {
                    seria: "",
                    number: "",
                    exp: "",
                    jshir: "",
                },

                phone: "",
                email: "",
                region: "",

                activity: [
                    {
                        region: "",
                        phone: "",
                    },
                ],
            },
        };
    },

    validations: {
        user: {
            role: {
                required,
            },
            login: {
                required,
            },
            password: {
                required,
                alpha,
            },
            name: {
                required,
            },

            birthday: {
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
                exp: {
                    required,
                },

                jshir: {
                    required,
                    minLength: minLength(14),
                },
            },

            phone: {
                required,
                minLength: minLength(17),
            },
            email: {
                required,
                email,
            },
            region: {
                required,
            },

            activity: {
                required,
                $each: {
                    region: {
                        required,
                    },

                    phone: {
                        required,
                        minLength: minLength(17),
                    },
                },
            },
        },
    },

    methods: {
        submitData() {
            this.$v.$touch();
            this.setCookie("token", "123456", 3);
            console.log("user", this.user);
        },

        addActivity() {
            this.user.activity.push({
                region: "",
                district: "",
                organization: "",
                sertificate: "",
                status: "",
                position: "",
                start: "",
                end: "",
                phone: "",
            });
        },
        removeActivity(index) {
            this.user.activity.splice(index, 1);
        },
    },
};
</script>

<style></style>
