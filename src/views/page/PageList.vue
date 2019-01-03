<template>
    <TemplatePage>
        <template slot="contentHeader">
            <h1 class="entry-title">CLIENT LIST</h1>
        </template>

        <template slot="contentBody">
            <div class="field-container align-right">
                <input id="search" type="text" class="serach-box">
                <input type="submit" value="Search">
            </div>

            <table>
                <tr>
                    <th class="td-half-quarter">ID</th>
                    <th>Name</th>
                    <th class="td-half-quarter">Actions</th>
                </tr>
                <tr v-for="(item, index) in listClientInformations">
                    <td class="align-center">{{item.id}}</td>
                    <td>{{item.lname}}, {{item.fname}}</td>
                    <td class="align-center">
                        <button class="button-print" @click="previewPdf(index)">Edit</button>
                        <button class="button-print" @click="deleteClientInformations(index)">Delete</button>
                    </td>
                </tr>
            </table>

        </template>

    </TemplatePage>
</template>

<script>
export default {
    name : "PageList",

    components: {
    },

    computed: {
        listClientInformations: function() {
            return this.$store.getters.getClientInformations;
        }
    },

    methods: {
        deleteClientInformations: function(index) {
            this.$store.dispatch("deleteClientInformations", index);
        },

        previewPdf: function(index) {
            console.log('preview pdf '+index);
        }
    },

    data() {
        return {
        }
    },

    created() {
    }
}
</script>