<template>
    <div>
        <div class="test-start">
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
                        <li>Test yechish</li>
                    </ul>
                </div>

                <div class="test-box">
                    <h1>Texnomart test</h1>
                    <p>
                        Barcha savollarga to’g’ri javob berishga harakat qiling
                        va o’z natijalaringiz bilan tanishib chiqing
                    </p>
                    <div
                        class="test-item"
                        v-for="(item, index) in tests"
                        :key="index"
                    >
                        <div class="question-title">
                            <span class="num"> {{ index + 1 }} </span>
                            <h2>{{ item.title }}</h2>
                        </div>

                        <div class="answer-box">
                            <div class="radio-box" v-if="item.type == 1">
                                <label
                                    class="cont"
                                    v-for="(answer, i) in item.answers"
                                    :key="i"
                                >
                                    <input
                                        type="radio"
                                        @change="clickRadio(index, answer)"
                                        :value="answer.id"
                                        :name="'answer' + index"
                                    />
                                    <span class="checkmark"></span>
                                    <h6>{{ answer.title }}</h6>
                                </label>
                            </div>

                            <div
                                class="radio-box checkbox-box"
                                v-if="item.type == 2"
                            >
                                <label
                                    class="cont"
                                    v-for="(answer, i) in item.answers"
                                    :key="i"
                                >
                                    <input
                                        type="checkbox"
                                        checked="checked"
                                        :value="answer"
                                        v-model="dataResult[index].answer"
                                        :name="'answer' + index"
                                    />
                                    <span class="checkmark"></span>
                                    <h6>{{ answer.title }}</h6>
                                </label>
                            </div>

                            <div class="input-box" v-if="item.type == 3">
                                <input
                                    type="text"
                                    placeholder="Javobni yozing..."
                                    v-model="dataResult[index].answer"
                                />
                            </div>
                        </div>
                    </div>

                    <button class="btn-simple" @click="endTest">
                        Testni yakunlash
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tests: [],
            dataResult: [],
        };
    },
    created() {
        // get tests vuex
        this.tests = this.$store.state.test.tests;

        // new array for v-model
        this.tests.forEach((item) => {
            if (item.type == 1) {
                this.dataResult.push({
                    question: item,
                    type: item.type,
                    answer: null,
                });
            }
            if (item.type == 2) {
                this.dataResult.push({
                    question: item,
                    type: item.type,
                    answer: [],
                });
            }
            if (item.type == 3) {
                this.dataResult.push({
                    question: item,
                    type: item.type,
                    answer: "",
                });
            }
        });
    },
    methods: {
        // click only test type == 1
        clickRadio(index, answer) {
            this.dataResult[index].answer = answer;
        },

        // click end test
        async endTest() {
            console.log("result = ", this.dataResult);

            let sendData = [];

            this.dataResult.forEach((item, index) => {
                let answer = item.answer;

                let ritem = {
                    title: item.question.title,
                    isTrue: true,
                    answer: answer,
                    trueAnswer: null,
                    type: item.type,
                };

                let trueAnswer;
                if (item.type == 1) {
                    trueAnswer = this.tests[index].answers.find(
                        (item) => item.isTrue === true
                    );
                }
                if (item.type == 2) {
                    trueAnswer = this.tests[index].answers.filter(
                        (item) => item.isTrue === true
                    );
                }

                if (item.type == 3) {
                    trueAnswer = this.tests[index].answers;
                }

                if (!(answer == null || answer == [] || answer == "")) {
                    // for type test one select
                    if (item.type == 1) {
                        if (!answer.isTrue) {
                            ritem.isTrue = false;
                        }
                    }
                    // for type test manually select
                    if (item.type == 2) {
                        let checkAll = answer.every(
                            (item) => item.isTrue === true
                        );
                        console.log(checkAll);
                        if (!(checkAll && answer.length == trueAnswer.length)) {
                            ritem.isTrue = false;
                        }
                    }
                    // for type test string write
                    if (item.type == 3) {
                        if (answer.toLowerCase() != trueAnswer.toLowerCase()) {
                            ritem.isTrue = false;
                        }
                    }
                } else {
                    ritem.isTrue = false;
                    ritem.answer = null;
                }

                ritem.trueAnswer = trueAnswer;

                sendData.push(ritem);
            });

            await this.$store.commit("test/CHANGE_RESULT_DATA", sendData);

            this.$router.push({ name: `test-result` });
        },
    },
};
</script>

<style lang="scss"></style>
