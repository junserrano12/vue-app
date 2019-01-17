<template>
    <TemplatePage>
        <template slot="contentBody">
            <h2>POSTS</h2>
            <div v-for="(post, index) in posts" :key="index">
                <p class="title">{{post.title}}</p>
                <p class="description">{{post.description}}</p>
            </div>

             <ComponentAccordion :classes="['my-accordion-class']" display="show-all" toggle="toggle-all">
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
        </template>
    </TemplatePage>
</template>

<script>
import ComponentAccordion from "@/components/ComponentAccordion.vue"
import ComponentAccordionItem from "@/components/ComponentAccordionItem.vue"
import PostService from "@/services/PostService"

export default {
    name: "PagePreview",

    components: {
        ComponentAccordion,
        ComponentAccordionItem
    },

    methods: {
        async getPosts() {
            const response = await PostService.fetchPosts();
            console.log( response );
            this.posts = response.data;
        }
    },

    data() {
        return {
            posts: [],
            copy: {
                sampleParagraphText: "Sample content"
            }
        }
    },

    mounted() {
        this.getPosts();
    }
}
</script>