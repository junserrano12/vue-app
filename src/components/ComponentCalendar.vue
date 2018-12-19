<template>
    <div class="calendar-container">
        <vue-rangedate-picker @selected="onDateSelected" i18n="EN"></vue-rangedate-picker>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRangedatePicker from 'vue-rangedate-picker'

Vue.use( VueRangedatePicker )
VueRangedatePicker.default.install(Vue)

export default {
    name: "CalendarElement",
    props: {
        text : {
            type: String,
            required: true,
            validator: function (value) {
                return [
                    "syncing",
                    "synced",
                    "version-conflict",
                    "error"
                ].indexOf(value) !== -1
            }
        }
    },
    data () {
        return {
            selectedDate: {
                start: '',
                end: ''
            }
        }
    },
    methods: {
        onDateSelected: function (daterange) {
            this.selectedDate = daterange
        }
    }

}
</script>

<style scoped lang="scss">
</style>