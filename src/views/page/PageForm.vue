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
                            <input id="fname" type="text" class="field-input" v-model="fname"/>
                        </div>

                        <div class="field-container">
                            <label for="lname" class="field-label">Last Name</label>
                            <input id="lname" type="text" class="field-input" v-model="lname"/>
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
export default {
    name : "PageForm",

    methods: {
        addClientInformations: function() {
            var ctr = this.$store.state.axiosdata.clientinformations.length + 1;

            this.newclient = {
                                'id': ctr,
                                'fname': this.fname,
                                'lname': this.lname
                            };

            this.$store.dispatch("addClientInformations", this.newclient);

            this.newclient = [];
            this.fname = this.lname = '';
        }
    },

    data() {
        return {
            newclient: [],
            fname: '',
            lname: '',

        }
    }
}
</script>