<template>
    <div>
        <div class="test-result">
            <div class="container">
                <div class="client-breadcrumb">
                    <ul>
                        <li>
                            <router-link :to="{ name: `index` }"
                                >Bosh sahifa /
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: `test` }"
                                >Testlar /
                            </router-link>
                        </li>
                        <li>Test natijalari</li>
                    </ul>
                </div>

                <div class="result-top">
                    <div class="result-left">
                        <h4>Sizning natijalaringiz</h4>

                        <div class="result-numbers">
                            <span class="chip chip-success"
                                >To'g'ri javob: {{ trueCount }}</span
                            >
                            <span class="chip chip-error"
                                >Noto’g’ri javoblar: {{ errorCount }}
                            </span>
                            <span class="chip chip-warning"
                                >Jami: {{ resultData.length }}
                            </span>
                        </div>
                    </div>
                    <div class="result-right">
                        <div class="wrapper">
                            <div :class="`c100 p${precent} blue`">
                                <span> {{ precent }}% </span>
                                <div class="slice">
                                    <div class="bar"></div>
                                    <div class="fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="result-item"
                    v-for="(item, index) in resultData"
                    :key="index"
                >
                    <div class="question-title">
                        <span
                            :class="
                                item.isTrue
                                    ? 'num num-success'
                                    : 'num num-error'
                            "
                        >
                            {{ index + 1 }}
                        </span>
                        <h2>{{ item.title }}</h2>
                    </div>

                    <div class="result-child" v-if="!item.isTrue">
                        <h4 class="child-error">
                            Noto’g’ri (sizning javobingiz)
                        </h4>
                        <h4 v-if="item.answer != null">
                            <h4 v-if="item.type == 1">
                                {{ item.answer.title }}
                            </h4>
                            <h4 v-if="item.type == 2">
                                <h4 v-for="(child, i) in item.answer" :key="i">
                                    {{ child.title }}
                                </h4>
                            </h4>
                            <h4 v-if="item.type == 3">
                                {{ item.answer }}
                            </h4>
                        </h4>
                        <h4 v-else>Belgilanmagan</h4>
                    </div>

                    <div class="result-child">
                        <h4 class="child-success">To’g’ri javob:</h4>
                        <h4 v-if="item.type == 1">
                            {{ item.trueAnswer.title }}
                        </h4>
                        <h4 v-if="item.type == 2">
                            <h4 v-for="(child, i) in item.trueAnswer" :key="i">
                                {{ child.title }}
                            </h4>
                        </h4>
                        <h4 v-if="item.type == 3">
                            {{ item.trueAnswer }}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            trueCount: 0,
            errorCount: 0,
            precent: 0,
        };
    },
    computed: {
        ...mapState("test", ["resultData"]),
    },

    created() {
        this.trueCount = this.resultData.filter(
            (item) => item.isTrue === true
        ).length;
        this.errorCount = this.resultData.length - this.trueCount;

        this.precent = parseInt(
            (this.trueCount / this.resultData.length) * 100
        );
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/_rec.scss";

div.result-top {
    background: #ffffff;
    border: 1px solid rgba(89, 123, 163, 0.2);
    box-sizing: border-box;
    border-radius: 12px;
    padding: 30px 25px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    div.result-left {
        h4 {
            font-weight: 600;
            font-size: 24px;
            line-height: 31px;
            margin-bottom: 24px;
            color: #333333;
        }
    }

    div.result-numbers {
        span.chip {
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
            padding: 10px 20px;
            display: inline-block;
            margin-right: 20px;
            border-radius: 8px;
        }

        .chip-success {
            color: #07a287;
            background: rgba(7, 162, 135, 0.1);
        }
        .chip-error {
            color: #ff6363;
            background: rgba(255, 99, 99, 0.1);
        }
        .chip-warning {
            color: #ff903f;
            background: rgba(255, 144, 63, 0.1);
        }
    }
}

div.result-item {
    padding: 15px 25px;
    background: #ffffff;
    border: 1px solid rgba(89, 123, 163, 0.2);
    box-sizing: border-box;
    border-radius: 12px;
    margin-bottom: 30px;
    div.question-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        h2 {
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            margin-left: 15px;
            color: #333333;
        }
        span.num {
            width: 40px;
            height: 40px;
            font-weight: 600;
            font-size: 24px;
            line-height: 31px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            border-radius: 100%;
        }
        span.num-success {
            background-color: #07a287;
        }
        span.num-error {
            background-color: #ff6464;
        }
    }
    div.result-child {
        margin-bottom: 12px;
        h4 {
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
            color: #333333;
            margin-bottom: 8px;
        }

        h4.child-error {
            color: #ff3434;
        }
        h4.child-success {
            color: #07a287;
        }
    }
}
</style>
