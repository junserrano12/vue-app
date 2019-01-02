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
                    <th class="td-small">ID</th>
                    <th>Name</th>
                    <th class="td-small">Print</th>
                </tr>
                <tr v-for="(item, index) in this.adata.clientinformations">
                    <td class="align-center">{{item.id}}</td>
                    <td>{{item.lname}}, {{item.fname}}</td>
                    <td class="align-center"><button class="button-print">Print</button></td>
                </tr>
            </table>

        </template>

    </TemplatePage>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name : "PageList",

    components: {
    },

    computed: {
        ...mapState({
            sdata: 'storedata',
            adata: 'axiosdata'
        })

    },

    methods: {
        ...mapActions({
            updateClientInformations: 'updateClientInformations'
        })
    },

    data() {
        return {
        }
    },

    created() {
        this.updateClientInformations()
    }
}
</script>