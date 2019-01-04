<template>
    <TemplatePage>
        <template slot="contentBody">
            <div class="field-container align-right">
                <input id="search" type="text" class="serach-box">
                <input type="submit" value="Search">
            </div>

            <table>
                <tr>
                    <th class="td-half-quarter">ID</th>
                    <th>Name</th>
                    <th class="td-quarter">Actions</th>
                </tr>
                <tr v-for="(item, index) in listClientInformations">
                    <td class="align-center">{{item.id}}</td>
                    <td>{{item.lname}}, {{item.fname}}</td>
                    <td class="align-center">
                        <button class="button-load" @click="loadClientInformations(index)">Load</button>
                        <button class="button-edit" @click="editClientInformations(index)">Edit</button>
                        <button class="button-delete" @click="deleteClientInformations(index)">Delete</button>
                    </td>
                </tr>
            </table>
        </template>

    </TemplatePage>
</template>

<script>
export default {
    name : "PageList",

    computed: {
        listClientInformations: function() {
            return this.$store.getters.getClientInformations;
        }
    },

    methods: {
        deleteClientInformations: function(index) {
            this.$store.dispatch("deleteClientInformations", index);
        },

        editClientInformations: function(index) {
            console.log("Edit Client "+index);
        },

        loadClientInformations: function(index) {
            this.$router.push({ name: "form" });
            console.log("Load Client "+index);
        }
    }
}
</script>