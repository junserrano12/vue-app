import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import ModuleSample from "@/store/sample"

Vue.use(Vuex)

function loadData() {
    const datas = require.context('@/data', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const states = {};

    datas.keys().forEach(key => {

        const matched = key.match(/([A-Za-z0-9-_]+)\./i);

        if (matched && matched.length > 1) {
            const data = matched[1];
            states[data] = datas(key);
        }
    })

    return states;
}

export default new Vuex.Store({
    state: {
        storedata: loadData()
    },

    modules: {
        sample: ModuleSample
    }
})
