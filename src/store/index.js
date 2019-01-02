import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

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
        storedata: loadData(),
        axiosdata: {
            clientinformations: []
        }

    },

    getters: {
    },

    actions: {
        updateClientInformations: ({commit}) => {
            axios.get( '/api/clientinformations.json' )
                 .then( response => {
                    commit('UPDATE_CLIENT_INFO', response.data)
                 })
        }
    },

    mutations: {
        UPDATE_CLIENT_INFO: (state, client) => {
            state.axiosdata.clientinformations = client
        }
    }
})
