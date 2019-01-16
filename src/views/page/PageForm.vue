<template>
    <TemplatePage>
        <template slot="contentBody">

            <form @submit.prevent="submitClientInformations">
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
                    <input id="submit" type="submit" :value="labelSubmit" class="field-submit">
                </div>
            </form>

        </template>

    </TemplatePage>
</template>

<script>
export default {
    name: "PageForm",

    computed: {
        labelSubmit: function() {
            return ( this.clientid === null ) ? "Submit" : "Update";
        }
    },

    methods: {
        submitClientInformations: function() {
            if ( this.clientid === null ) {
                var ctr = this.$store.state.axiosdata.clientinformations.length + 1;

                this.newclient = {
                                    "id": ctr,
                                    "fname": this.fname,
                                    "lname": this.lname
                                };

                this.$store.dispatch("addClientInformations", this.newclient);

            } else  {
                var ctr = this.clientid;
                this.newclient = {
                                    "id": ctr,
                                    "fname": this.fname,
                                    "lname": this.lname
                                };

                this.$store.dispatch("updateClientInformations", this.newclient);
            }

            /*Reset Data*/
            this.newclient = [];
            this.fname = this.lname = "";
        }
    },

    data() {
        return {
            newclient: [],
            fname: "",
            lname: "",
            clientid: null
        }
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.clientid = vm.$store.state.storedata.global.clientid
            if ( vm.clientid !== null ) {
                vm.fname = vm.$store.state.axiosdata.clientinformations[vm.clientid].fname;
                vm.lname = vm.$store.state.axiosdata.clientinformations[vm.clientid].lname;
            }
        });
    },

    beforeRouteLeave(to, from, next) {

        if ( this.clientid !== null ) {
            this.fname = this.lname = "";
            this.$store.dispatch("updateGlobalClientId", null);
        }
        next();
    }

}
</script>