<template>
    <TemplatePage>
        <template slot="contentBody">
            <div class="field-container align-right">
                <input id="search" type="text" class="serach-box">
                <input type="submit" value="Search">
                <input type="submit" value="Extract" @click="exportClientInformations">
            </div>

            <table>
                <tr>
                    <th class="td-half-quarter">ID</th>
                    <th>Name</th>
                    <th class="td-quarter">Actions</th>
                </tr>
                <tr v-for="(item, index) in listClientInformations" :key="index">
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
            this.clientindex = index;
            this.$router.push({name: "form"});
        },

        loadClientInformations: function(index) {
            this.clientindex = index;
        },

        exportClientInformations: function() {
            this.$store.dispatch("exportClientInformations");
        }
    },

    data() {
        return {
            clientindex: null
        }
    },

    beforeRouteLeave (to, from, next) {
        if ( to.name === "form" && this.clientindex != null ) {
            this.$store.dispatch("updateGlobalClientId", this.clientindex);
            this.clientindex = null;
        }
        next();
    }
}
</script>