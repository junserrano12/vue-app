<template>
    <TemplatePage>
        <template slot="header">
            <h1 class="entry-title">{{labels.pageTitle}}</h1>
            <ModuleMenu :items="primaryMenuList" :classes="['list-inline', 'another-class']">
                <template slot-scope="listProps">
                    <router-link :to="listProps.item.uri">{{listProps.item.link}}</router-link>
                </template>
            </ModuleMenu>
        </template>
        <template slot="contentBody">

            <div class="pdf-control">
                <select v-model="src">
                    <option v-for="(item, index) in pdfList" :key="index" :value="item" v-text="item"></option>
                </select>
                <input v-model.number="page" type="number" v-show="numPages" min="1" :max="numPages"><span v-show="numPages"> / {{numPages}}</span>
                <button class="hide" @click="rotate += 90">&#x27F3;</button>
                <button class="hide" @click="rotate -= 90">&#x27F2;</button>
                <button @click="$refs.pdf.print()">Print</button>
            </div>
            <div class="pdf-container">
                <div v-if="loadedRatio > 0 && loadedRatio < 1" class="loader" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>

                <pdf ref="pdf"
                :src="src"
                :page="page"
                :rotate="rotate"
                @password="password"
                @progress="loadedRatio = $event"
                @error="error"
                @num-pages="numPages = $event"
                @link-clicked="page = $event"
                @loaded="loaded">
                </pdf>

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
/*VUEX*/
import { mapState } from 'vuex'

/*DATA*/
import dataCopyEn from "@/locales/en.json"

/*MODULES*/
import ModuleMenu from "@/components/ModuleMenu.vue"

/*VUE*/
import pdf from 'vue-pdf'

export default {
    name : "PageHome",

    components: {
        ModuleMenu,
        pdf
    },

    computed: {
    },

    methods: {
        loaded: function() {
            this.$refs.pdf.pdf.forEachPage( function( page ) {

                page.getTextContent().then( function( content ) {
                    var text = content.items.map( item => item.str );
                    content.items[25].str = 'HELLO WORLD';
                });

            });
        },

        password: function(updatePassword, reason) {

            updatePassword(prompt('password is "test"'));
        },

        error: function(err) {

            console.log(err);
        }
    },

    data() {
        return {
            primaryMenuList : dataCopyEn.menu.primary,
            labels: dataCopyEn.labels.home,
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
    },

    mounted() {


    }
}
</script>

<style lang="scss" src="@/assets/sass/page/home.scss"></style>