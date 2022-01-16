<template>
    <div>
        <div class="login-content">
            <div class="login-box">
                <div class="login-logo">
                    <img
                        src="https://texnomart.uz/files/global/new-photo/icons/site-logo.svg"
                        alt=""
                    />
                </div>

                <h1>Kirish</h1>

                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.phone.$error }"
                >
                    <h4>Telefon raqam</h4>
                    <div class="input-div">
                        <input
                            type="text"
                            placeholder="+998 -- --- -- --"
                            v-mask="'+998 ## ### ## ##'"
                            v-model="user.phone"
                            @keyup="changePhone($event.target.value)"
                        />
                    </div>
                    <h6 v-if="!$v.user.phone.required" class="error-text">
                        To'liq to'ldiring
                    </h6>
                    <h6 v-if="!$v.user.phone.minLength" class="error-text">
                        To'g'ri to'ldiring
                    </h6>
                </div>

                <div
                    class="form-group"
                    :class="{ 'form-error': $v.user.password.$error }"
                >
                    <h4>Parol</h4>
                    <div class="input-div">
                        <input
                            placeholder="Parolni kiriting"
                            :type="typePassword"
                            v-model="$v.user.password.$model"
                        />

                        <button class="eye">
                            <span
                                v-show="typePassword == 'text'"
                                @click="typePassword = 'password'"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="eye"
                                    class="svg-inline--fa fa-eye fa-w-18"
                                    role="img"
                                    viewBox="0 0 576 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                    />
                                </svg>
                            </span>

                            <span
                                v-show="typePassword == 'password'"
                                @click="typePassword = 'text'"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="eye-slash"
                                    class="svg-inline--fa fa-eye-slash fa-w-20"
                                    role="img"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <h6 v-if="!$v.user.password.required" class="error-text">
                        To'liq to'ldiring
                    </h6>
                    <h6 v-if="!$v.user.password.alpha" class="error-text">
                        Parolda katta va kichik harf, son, maxsus belgilar
                        bo'lishi kerak va kamida 6 ta belgi bo'lishi kerak
                    </h6>
                </div>
                <div class="error-alert" v-show="wrong">
                    Nomer yoki parol xato!!!
                </div>
                <button class="btn-simple" @click="loginUser">Kirish</button>
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
import { mapActions } from "vuex";
export default {
    data() {
        return {
            user: {
                phone: "+998",
                password: "",
            },
            wrong: false,
            typePassword: "password",
        };
    },

    validations: {
        user: {
            phone: {
                required,
                minLength: minLength(17),
            },
            password: {
                required,
                // alpha,
            },
        },
    },

    methods: {
        ...mapActions("auth", ["login"]),
        changePhone(value) {
            if (this.user.phone.length < 4) {
                this.user.phone = "+998";
            }

            this.$v.user.phone.$touch();
        },

        loginUser() {
            this.$v.user.$touch();
            sessionStorage.setItem("token", 1212);
            if (!this.$v.user.$invalid) {
                this.$store.commit("all/loading", true);

                let phone = this.user.phone.replace(/[^0-9]/g, "");

                this.login({
                    phone,
                    password: this.user.password,
                }).then((res) => {
                    if (res != 401) {
                        this.$router.push({ name: `index` });
                    } else {
                        this.wrong = true;
                    }

                    this.$store.commit("all/loading", false);
                });
            }
        },
    },
};
</script>

<style lang="scss">
div.login-content {
    height: 100vh;
    display: flex;
    align-items: center;
    div.login-box {
        width: 450px;
        margin: 0 auto;
        background: #ffffff;
        border: 1px solid rgba(89, 123, 163, 0.2);
        box-sizing: border-box;
        border-radius: 12px;
        padding: 30px;
        h1 {
            font-size: 26px;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }

        button.btn-simple {
            width: 100%;
            padding: 15px 25px !important;
        }
    }

    div.login-logo {
        text-align: center;
        margin-bottom: 25px;
        img {
            width: 180px;
        }
    }
}
</style>
