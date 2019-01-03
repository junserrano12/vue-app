<template>
    <div class="page">
        <header v-if="this.hasHeaderSlot" class="header">
            <slot name="header"></slot>
        </header>

        <section class="sidebar">
            <ModuleMenu :items="primaryMenuList" :classes="['list-block', 'another-class']">
                <template slot-scope="listProps">
                    <router-link :to="listProps.item.uri">{{listProps.item.link}}</router-link>
                </template>
            </ModuleMenu>
        </section>

        <section class="main">

            <div v-if="this.hasContentHeaderSlot" class="content-header">
                <slot name="contentHeader"></slot>
            </div>
            <div v-if="this.hasContentBodySlot" class="content-body">
                <slot name="contentBody"></slot>
            </div>
            <div v-if="this.hasContentFooterSlot" class="content-footer">
                <slot name="contentFooter"></slot>
            </div>
        </section>

        <footer class="footer">
            <span class="small">&copy; All rights reserved</span>
        </footer>
    </div>
</template>

<script>
/*MODULES*/
import ModuleMenu from "@/components/ModuleMenu.vue"

/*DATA*/
import dataCopyEn from "@/locales/en.json"

export default {
    name: "TemplatePage",

    components: {
        ModuleMenu
    },

    computed: {
        hasHeaderSlot() {
            return !!this.$slots.header;
        },

        hasFooterSlot() {
            return !!this.$slots.footer;
        },

        hasContentHeaderSlot() {
            return !!this.$slots.contentHeader;
        },

        hasContentBodySlot() {
            return !!this.$slots.contentBody;
        },

        hasContentFooterSlot() {
            return !!this.$slots.contentFooter;
        }
    },

    data() {
        return {
            primaryMenuList : dataCopyEn.menu.primary
        }
    }
};
</script>

<style lang="scss" src="@/assets/sass/template/page.scss"></style>