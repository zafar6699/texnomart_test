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
                        <li>Savol qo'shish</li>
                    </ul>
                </div>

                <div class="test-box">
                    <h1>Savol qo'shish</h1>
                    <p>Siz 3 hil turdagi savol qo'shishingiz mumkin</p>
                    <div
                        class="test-item"
                        v-for="(item, index) in tests"
                        :key="index"
                    >
                        <div class="question-title">
                            <span class="num"> {{ index + 1 }} </span>
                            <input
                                type="text"
                                v-model="tests[index].title"
                                placeholder="Savolni yozing"
                            />
                        </div>

                        <div class="answer-box">
                            <div class="select-test-type">
                                <h3>Savol turi:</h3>
                                <select
                                    name=""
                                    id=""
                                    v-model="tests[index].type"
                                    @change="changeTestType(index)"
                                >
                                    <option :value="1">Bitta javobli</option>
                                    <option :value="2">Ko'p javobli</option>
                                    <option :value="3">Yoziladigan</option>
                                </select>
                            </div>
                            <h5>Javob(lar):</h5>

                            <div
                                class="radio-box"
                                v-if="tests[index].type == 1"
                            >
                                <div
                                    class="answer-item-create"
                                    v-for="(answer, i) in item.answers"
                                    :key="i"
                                >
                                    <label class="cont">
                                        <input
                                            type="radio"
                                            :name="'answer' + index"
                                            v-model="answer.isTrue"
                                            class="radio"
                                            @change="clickRadio(i, index)"
                                            :value="true"
                                        />
                                        <span class="checkmark"></span>
                                        <input
                                            type="text"
                                            v-model="
                                                tests[index].answers[i].title
                                            "
                                        />
                                    </label>

                                    <button
                                        v-if="tests[index].answers.length > 2"
                                        class="btn-remove"
                                        @click="removeAnswer(index, i)"
                                    >
                                        x
                                    </button>
                                </div>
                            </div>

                            <div
                                class="radio-box checkbox-box"
                                v-if="tests[index].type == 2"
                            >
                                <div
                                    class="answer-item-create"
                                    v-for="(answer, i) in item.answers"
                                    :key="i"
                                >
                                    <label class="cont">
                                        <input
                                            type="checkbox"
                                            @change="
                                                changeCheckbox(i, index, $event)
                                            "
                                            :value="true"
                                        />
                                        <span class="checkmark"></span>
                                        <input
                                            type="text"
                                            v-model="
                                                tests[index].answers[i].title
                                            "
                                        />
                                    </label>

                                    <button
                                        v-if="tests[index].answers.length > 2"
                                        class="btn-remove"
                                        @click="removeAnswer(index, i)"
                                    >
                                        x
                                    </button>
                                </div>
                            </div>

                            <div
                                class="input-box"
                                v-if="tests[index].type == 3"
                            >
                                <input
                                    type="text"
                                    placeholder="Javobni yozing..."
                                    v-model="tests[index].answers"
                                />
                            </div>

                            <div class="add-answer" v-if="item.type != 3">
                                <button
                                    class="btn-add"
                                    @click="addAnswer(index)"
                                >
                                    +
                                </button>

                                <button
                                    v-if="tests.length > 1"
                                    class="btn-remove"
                                    @click="removeQuestion(index)"
                                >
                                    Savolni o'chirish
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="new-question">
                        <button @click="addQuestion">+ Yangi savol</button>
                    </div>

                    <button class="btn-simple" @click="addTest">
                        Qo'shish
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
            tests: [
                {
                    title: "",
                    type: 1,
                    answers: [
                        {
                            title: "",
                            isTrue: false,
                        },
                        {
                            title: "",
                            isTrue: false,
                        },
                    ],
                },
            ],
        };
    },

    methods: {
        removeAnswer(index, i) {
            this.tests[index].answers.splice(i, 1);
        },
        removeQuestion(index) {
            this.tests.splice(index, 1);
        },
        addAnswer(index) {
            this.tests[index].answers.push({
                title: "",
                isTrue: false,
            });
        },
        addQuestion() {
            this.tests.push({
                title: "",
                type: 1,
                answers: [
                    {
                        title: "",
                        isTrue: false,
                    },
                    {
                        title: "",
                        isTrue: false,
                    },
                ],
            });
        },
        changeTestType(index) {
            if (this.tests[index].type == 3) {
                this.tests[index].answers = "";
            } else {
                this.tests[index].answers = [
                    {
                        title: "",
                        isTrue: false,
                    },
                    {
                        title: "",
                        isTrue: false,
                    },
                ];
            }
        },
        clickRadio(answerIndex, questionIndex) {
            this.tests[questionIndex].answers.forEach((answer) => {
                answer.isTrue = false;
            });
            this.tests[questionIndex].answers[answerIndex].isTrue = true;
        },

        changeCheckbox(i, index, e) {
            this.tests[index].answers[i].isTrue = e.target.checked;
        },

        async addTest() {
            await this.$store.commit("test/CHANGE_TEST", this.tests);

            this.$router.push({ name: `test` });
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
</style>
