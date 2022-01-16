<template>
    <div>
        <header>
            <div class="container">
                <div class="header-content flex flex-between flex-align-center">
                    <div class="header-left">
                        <router-link
                            class="header__logo"
                            :to="{ name: `index` }"
                        >
                            <img
                                src="https://texnomart.uz/files/global/new-photo/icons/site-logo.svg"
                                alt="texnomart-logo"
                            />
                        </router-link>
                    </div>
                    <div class="header-right flex flex-align-center">
                        <div class="header-menu">
                            <ul>
                                <li>
                                    <router-link :to="{ name: `test` }">
                                        Test
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: `form` }">
                                        Form
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: `index` }">
                                        Sort
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="header-actions" v-if="user != null">
                            <div
                                class="header-profile"
                                v-click-other="closeProfile"
                            >
                                <button
                                    @click="isProfile = true"
                                    class="profile"
                                >
                                    <div class="pro-img">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/avatar-gold-icon-vector-illustration-260nw-1608744904.jpg"
                                        />
                                    </div>
                                </button>

                                <div v-show="isProfile" class="pro-dropdown">
                                    <h6>{{ user.name }}</h6>

                                    <button class="logout" @click="logOut">
                                        <span class="fa-logo">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="power-off"
                                                class="svg-inline--fa fa-power-off fa-w-16"
                                                role="img"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
                                                /></svg
                                        ></span>
                                        Chiqish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isProfile: false,
        };
    },
    computed: {
        user() {
            return this.$store.state.auth.user;
        },
    },
    methods: {
        closeProfile() {
            this.isProfile = false;
        },
        logOut() {
            this.$store.dispatch("auth/logOut");
            this.$router.push({ name: `login` });
        },
    },
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    z-index: 20;
    div.header-content {
        padding: 20px 0px;
    }
    div.header-menu {
        margin-right: 50px;
        li {
            display: inline-block;
            margin-left: 30px;
        }
        a {
            display: block;
            font-size: 18px;
            color: #333;
            transition: 0.3s;
            &:hover {
                color: $gc;
            }
        }
    }
    div.header-profile {
        display: flex;
        position: relative;
        button.profile {
            display: flex;
            align-items: center;
            div.pro-img {
                position: relative;
                width: 45px;
                height: 45px;
                border-radius: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            svg {
                font-size: 20px;
                margin-left: 5px;
            }
        }

        div.pro-dropdown {
            position: absolute;
            box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
            right: 0;
            top: 50px;
            background-color: #fff;
            border-radius: 5px;
            min-width: 180px;
            padding: 5px;
            h6 {
                font-size: 13px;
                margin: 5px 10px;
                font-weight: 500;
                color: $gc;
                text-align: left;
                border-bottom: 1px solid #ccc;
                padding-bottom: 5px;
            }

            button.logout {
                font-size: 14px;
                font-weight: 500;
                color: rgb(255, 87, 87);
                padding: 5px 10px;
                display: block;
                width: 100%;
                text-align: left;
            }
        }
    }
}
</style>
