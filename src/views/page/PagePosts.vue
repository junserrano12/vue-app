<template>
    <TemplatePage>
        <template slot="contentBody">
            <h2>POSTS</h2>
            <div v-for="(post, index) in posts" :key="index">
                <p class="title">{{post.title}}</p>
                <p class="description">{{post.description}}</p>
            </div>
        </template>
    </TemplatePage>
</template>

<script>
import PostService from "@/services/PostService"

export default {
    name: "PagePreview",

    methods: {
        async getPosts() {
            const response = await PostService.fetchPosts();
            console.log( response );
            this.posts = response.data;
        }
    },

    data() {
        return {
            posts: []
        }
    },

    mounted() {
        this.getPosts();
    }
}
</script>