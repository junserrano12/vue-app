<template>
    <div :is="containertag" :class="[containerClass, classes]">
        <p v-if="hasTitle" :is="titletag" :class="[titleClass]" @click="titleTagEvent()">{{title}}</p>
        <div :class="[contentClass]">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "ComponentContent",

    props: {
        prefix: {
            type: String,
            required: false,
            default: "component"
        },

        classes: {
            type: [String, Array],
            required: false
        },

        title: {
            type: String,
            requred: false
        },

        containertag: {
            type: String,
            required: false,
            default: "div"
        },

        titletag: {
            type: String,
            required: false,
            default: "p"
        }
    },

    computed: {
        containerClass: function() {
            return this.prefix+"-container";
        },

        contentClass: function() {
            return this.prefix+"-content";
        },

        titleClass: function() {
            return this.prefix+"-title";
        },

        hasTitle: function() {
            return this.title !== "";
        }

    },

    methods: {
        titleTagEvent: function() {
            // console.log("test");
        }
    }
}
</script>