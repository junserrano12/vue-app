<template>
    <TemplatePage>
        <template slot="contentHeader">
            <h1 class="entry-title">CLIENT INFORMATION</h1>
        </template>

        <template slot="contentBody">

            <form @submit.prevent="addClientInformations">
                <div class="row">
                    <div class="col-md-3">
                        <div class="field-container">
                            <label for="fname" class="field-label">First Name</label>
                            <input id="fname" type="text" class="field-input"/>
                        </div>

                        <div class="field-container">
                            <label for="lname" class="field-label">Last Name</label>
                            <input id="lname" type="text" class="field-input"/>
                        </div>
                    </div>
                </div>

                <div class="field-container">
                    <input id="submit" type="submit" value="Submit" class="field-submit">
                </div>
            </form>

        </template>

    </TemplatePage>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name : "PageForm",

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
        }),

        addClientInformations: function() {
            console.log( this.adata.clientinformations.length );
        }
    },

    data() {
        return {
            fname: '',
            lname: ''
        }
    },

    created() {
        this.updateClientInformations()
    }
}
</script>