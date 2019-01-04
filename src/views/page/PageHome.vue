<template>
    <TemplatePage>
        <template slot="contentBody">

            <div class="pdf-control">
                <select v-model="src">
                    <option v-for="(item, index) in pdfList" :key="index" :value="item" v-text="item"></option>
                </select>
                <input v-model.number="page" type="number" v-show="numPages" min="1" :max="numPages"><span v-show="numPages"> / {{numPages}}</span>
                <button class="hide" @click="rotate += 90">&#x27F3;</button>
                <button class="hide" @click="rotate -= 90">&#x27F2;</button>
                <button @click="$refs.pdfcontainer.print()">Print</button>
            </div>
            <div class="pdf-container">
                <div class="data-content" v-for="(item, index) in pdfList" :key="index" v-show="item === src">
                    <div v-for="data in datacontent[index]" v-show="data.page === page">
                        {{data.key}}
                    </div>
                </div>
            </div>
        </template>
    </TemplatePage>
</template>

<script>
export default {
    name : "PageHome",

    data() {
        return {
            pdfList: [
                '',
                './pdf/bisform2014.pdf'
            ],
            src:'',
            loadedRatio: 0,
            page: 1,
            numPages: 0,
            rotate: 0,
            datacontent: [
                            [
                                {
                                    "page": 1,
                                    "key": "fname",
                                    "top": 0,
                                    "left": 0
                                }
                            ],
                            [
                                {
                                    "page": 1,
                                    "key": "fname",
                                    "top": 0,
                                    "left": 0
                                },
                                {
                                    "page": 1,
                                    "key": "lname",
                                    "top": 0,
                                    "left": 0
                                },
                                {
                                    "page": 2,
                                    "key": "fname2",
                                    "top": 0,
                                    "left": 300
                                },
                                {
                                    "page": 2,
                                    "key": "lname2",
                                    "top": 0,
                                    "left": 300
                                },
                                {
                                    "page": 2,
                                    "key": "middlename2",
                                    "top": 0,
                                    "left": 300
                                }
                            ]
                        ]
        }
    }
}
</script>

<style lang="scss" src="@/assets/sass/page/home.scss"></style>