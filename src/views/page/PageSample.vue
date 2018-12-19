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

            <div class="section">
                <h2>MODULE ACCORDION STATIC CONTENT</h2>
                <ComponentAccordion :classes="['my-accordion-class']" :display="[0]" toggle="toggle-all">
                     <ComponentAccordionItem title="Title 0" slot="accordionItem">
                        <template slot="content">
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                        </template>
                    </ComponentAccordionItem>
                    <ComponentAccordionItem title="Title 1" slot="accordionItem">
                        <template slot="content">
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                        </template>
                    </ComponentAccordionItem>
                    <ComponentAccordionItem title="Title 2" slot="accordionItem">
                        <template slot="content">
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                        </template>
                    </ComponentAccordionItem>
                    <ComponentAccordionItem title="Title 3" slot="accordionItem">
                        <template slot="content">
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                            <p>{{copy.sampleParagraphText}}</p>
                        </template>
                    </ComponentAccordionItem>
                </ComponentAccordion>
            </div>

            <div class="section">
                <h2>MODULE ACCORDION DATA CONTENT</h2>
                <ComponentAccordion :items="this.storedata.roomrates" :classes="['other-class', 'another-class']" display="show-first" toggle="toggle-once">
                    <template slot-scope="listProps">
                        <div class="image-container thumbnail">
                            <img :src="listProps.item.image" title="" alt="" />
                        </div>
                        <div class="room-rates-description">{{listProps.item.description}}</div>
                        <span>{{listProps.item.rate}}</span>
                        <p>{{listProps.item.title}}</p>
                    </template>
                </ComponentAccordion>
            </div>

            <div class="section">
                <h2>VUEX</h2>
                <h3>state</h3>
                <p>{{ sample.subtitle }}</p>
                <h3>getters</h3>
                <p>{{ displaySampleSubtitle }}</p>
            </div>

            <div class="section">
                <h2>GRID</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">1</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">2</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">3</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">4</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">5</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">6</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">7</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">8</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">9</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">10</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">11</div></div>
                        <div class="col-xs-1"><div style="text-align:center; height:300px; background:#ccc;">12</div></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-2"><div style="text-align:center; height:300px; background:#ccc;">1</div></div>
                        <div class="col-xs-2"><div style="text-align:center; height:300px; background:#ccc;">2</div></div>
                        <div class="col-xs-2"><div style="text-align:center; height:300px; background:#ccc;">3</div></div>
                        <div class="col-xs-2"><div style="text-align:center; height:300px; background:#ccc;">4</div></div>
                        <div class="col-xs-2"><div style="text-align:center; height:300px; background:#ccc;">4</div></div>
                        <div class="col-xs-2"><div style="text-align:center; height:300px; background:#ccc;">4</div></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-3"><div style="text-align:center; height:300px; background:#ccc;">1</div></div>
                        <div class="col-xs-3"><div style="text-align:center; height:300px; background:#ccc;">2</div></div>
                        <div class="col-xs-3"><div style="text-align:center; height:300px; background:#ccc;">3</div></div>
                        <div class="col-xs-3"><div style="text-align:center; height:300px; background:#ccc;">4</div></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4"><div style="text-align:center; height:300px; background:#ccc;">1</div></div>
                        <div class="col-xs-4"><div style="text-align:center; height:300px; background:#ccc;">2</div></div>
                        <div class="col-xs-4"><div style="text-align:center; height:300px; background:#ccc;">3</div></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6"><div style="text-align:center; height:300px; background:#ccc;">1</div></div>
                        <div class="col-xs-6"><div style="text-align:center; height:300px; background:#ccc;">2</div></div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>COMPONENT LIST</h2>
                <ComponentList :items="sample.typographylist">
                    <template slot-scope="listProps">
                        <h3>{{listProps.item.size}}</h3>
                        <p :class="listProps.item.size">{{copy.sampleParagraphText}}</p>
                        <button @click="removeTypography(listProps.index)">Remove</button>
                        <hr>
                    </template>
                </ComponentList>
                <h3>mutation</h3>
                <form @submit.prevent="addTypography">
                   <input class="link-input" type="text" placeholder="Add a Typography Item" v-model="newTypographyItem" />
                </form>
            </div>

            <div class="section">
                <h2>COMPONENT CONTENT</h2>
                <ComponentContent prefix="my-component" title="MUTATION" tag="button">
                    <template slot="content">
                        <p>{{copy.sampleParagraphText}}</p>
                    </template>
                </ComponentContent>
                <ComponentContent prefix="my-component">
                    <template slot="content">
                        <p>{{copy.sampleParagraphText}}</p>
                    </template>
                </ComponentContent>
            </div>
        </template>

    </TemplatePage>
</template>

<script>
/*VUEX*/
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

/*DATA*/
import dataCopyEn from "@/locales/en.json"

/*Component*/
import ComponentList from "@/components/ComponentList.vue"
import ComponentContent from "@/components/ComponentContent.vue"
import ComponentAccordion from "@/components/ComponentAccordion.vue"
import ComponentAccordionItem from "@/components/ComponentAccordionItem.vue"

/*MODULES*/
import ModuleMenu from "@/components/ModuleMenu.vue"

export default {
    name: "PageSample",

    components: {
        ComponentList,
        ComponentContent,
        ComponentAccordion,
        ComponentAccordionItem,
        ModuleMenu
    },

    computed: {
        ...mapState({
            sample: 'sample',
            storedata: 'storedata'
        }),
        ...mapGetters({
            displaySampleSubtitle: 'sample/displaySubtitle'
        })
    },

    methods: {
        ...mapMutations({
            ADD_TYPOGRAPHY: 'sample/ADD_TYPOGRAPHY'
        }),

        ...mapActions({
           removeTypographyItem: 'sample/removeTypographyItem'
        }),

        addTypography: function() {
            this.ADD_TYPOGRAPHY( this.newTypographyItem );
            this.newTypographyItem = '';
        },

        removeTypography: function(index) {
            this.removeTypographyItem( index );
        }
    },

    data() {
        return {
            newTypographyItem : '',
            primaryMenuList : dataCopyEn.menu.primary,
            labels: dataCopyEn.labels.sample,
            copy: dataCopyEn.constant
        }
    }
};
</script>

<style lang="scss" src="@/assets/sass/page/sample.scss"></style>
