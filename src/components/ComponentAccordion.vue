<template>
    <div :class="[containerClass, classes]" v-if="items">
        <ul :class="ulClass">
            <li :class="[liClass, activeClass(index)]" v-for="(item, index) in items" :key="prefix+'-'+index">
                <a href="#?" class="accordion-title" @click.prevent="updateItem(index)">{{item.title}}</a>
                <div class="accordion-content">
                    <slot :item="item"></slot>
                </div>
            </li>
        </ul>
    </div>
    <div class="accordion-container" :class="[classes]" v-else>
        <ul :class="ulClass">
            <slot name="accordionItem"></slot>
        </ul>
    </div>
</template>

<script>
import ComponentList from "@/components/ComponentList"

export default {
    name: "ComponentAccordion",

    extends: ComponentList,

    props: {
        prefix: {
            default: 'accordion'
        },

        display: {
            type: [String, Array],
            required: false,
            default: 'hide-all'
        },

        toggle: {
            type: String,
            required: false,
            default: 'toggle-once'
        }
    },

    methods: {
        updateItem: function( index ) {
            if ( this.indexitem.includes( index ) ) {
                this.indexitem.splice( this.indexitem.indexOf(index), 1 );
            } else {
                if ( this.toggle == 'toggle-all' ) {
                    this.indexitem = [];
                }
                this.indexitem.push( index );
           }
        },

        activeClass: function( index ) {
            if ( this.indexitem.includes( index ) ) {
                return 'item-active';
            }
        }
    },

    data() {
        return {
            indexitem : [],
            componentprops: []
        }
    },

    mounted() {
        if ( this.items ) {
            if ( this.display === 'show-all' ) {
                let itemKeys = [];
                this.items.forEach( function( elem, index ) {
                    itemKeys.push( index );
                });
                this.indexitem = itemKeys;
            } else if ( this.display === 'show-first' ) {
                this.indexitem.push( 0 );
            } else if ( this.display.constructor === Array ) {
                this.indexitem = this.display;
            }
        } else {
            if ( this.$children.length !== 0 ) {
                if ( this.display === 'show-all' ) {
                    this.$children.forEach( function( elem ) {
                        elem.isactive = true;
                    });
                } else if ( this.display === 'show-first' ) {
                    this.$children[0].isactive = true;
                } else if ( this.display.constructor === Array ) {
                    for ( let index = 0; index < this.display.length; index++ ) {
                        this.$children[this.display[index]].isactive = true;
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" src="@/assets/sass/components/accordion.scss"></style>