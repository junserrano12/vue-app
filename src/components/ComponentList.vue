<template>
    <div :class="[containerClass, classes]">
        <ul :class="ulClass">
            <li :class="[liClass]" v-for="(item, index) in items" :key="prefix+'-'+index">
                <slot :item="item" :index="index"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ComponentList",

    props: {
        items : {
            type: Array,
            required: false
        },

        prefix : {
            type: String,
            required: false,
            default: 'list'
        },

        classes : {
            type: [String, Array],
            required: false
        }
    },

    computed: {
        containerClass: function() {
            return this.prefix+'-container';
        },

        ulClass: function() {
            return this.prefix+'-items';
        },

        liClass: function() {
            return this.prefix+'-item';
        }
    }
}
</script>

<style lang="scss" src="@/assets/sass/components/list.scss"></style>