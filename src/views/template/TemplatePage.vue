<template>
    <div class="page">
        <header v-if="this.hasHeaderSlot" class="header">
            <slot name="header"></slot>
        </header>

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

        <footer v-if="this.hasFooterSlot" class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "TemplatePage",
        components: {
        },
        props: {
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
        methods: {
        }
    };
</script>

