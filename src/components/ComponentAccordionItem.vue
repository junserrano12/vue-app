<template>
    <li :class="[liClass, activeItemClass]">
        <a href="#?" class="accordion-title" @click.prevent="updateItem">{{title}}</a>
        <div class="accordion-content">
            <slot name="content"></slot>
        </div>
    </li>
</template>

<script>
import ComponentAccordion from "@/components/ComponentAccordion"

export default {
    name: "ComponentAccordionItem",

    extends: ComponentAccordion,

    props: {
        title: {
            type: String,
            required: true,
            default: "Accordion Title"
        }
    },

    methods: {
        updateItem: function() {
            if ( this.$parent.toggle === "toggle-all" ) {
                let tempactive = this.isactive;

                this.$parent.$children.forEach( function( elem ) {
                    elem.isactive = false;
                });

                this.isactive = tempactive;
            }

            this.isactive = !this.isactive;
        },
    },

    computed: {
        activeItemClass: function() {
            return { "item-active": this.isactive };
        },

        transitionClass: function() {
            return "test";
        }
    },

    data() {
        return {
            isactive: false
        }
    }
}
</script>