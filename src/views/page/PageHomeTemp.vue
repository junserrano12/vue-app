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
                <button @click="$refs.pdfcontainer.print()">Print</button>
            </div>
            <div class="pdf-container">
                <div v-if="loadedRatio > 0 && loadedRatio < 1" class="loader" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>

                <pdf ref="pdfcontainer"
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

                <canvas id="canvas-container" :src="src" v-if="src"></canvas>

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

/*vuepdf*/
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

            this.$refs.pdfcontainer.pdf.forEachPage( function( page ) {

                // console.log( page.getAnnotations() );


                // page.getAnnotations().then( function( content ) {
                //     console.log( param );
                // });

                // page.getTextContent().then( function( content ) {
                //     var text = content.items.map( item => item.str );
                //     content.items[25].str = 'HELLO WORLD';
                // });


                // this.$refs.pdfcontainer.pdf.render('2d', page.getViewport(1));

            });

            // console.log( this.$refs.pdfcontainer.pdf );


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