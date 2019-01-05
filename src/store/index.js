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

function saveData(data) {
    const fs = require('fs');

    fs.writeFile('api/clientinformations.json', data, (err) => {
        if ( err ) throw err;
        console.log('data written to file');
    });
}

function saveToFile(jsonData, filename) {
    const blob = new Blob([jsonData], { type: 'application/json' })
    var location = '~/vue/pdfform/public/api/';

    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename)
    } else {
        let link = document.createElement('a')

        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            let url = URL.createObjectURL(blob)
            link.setAttribute('href', url)
            link.setAttribute('download', 'clientinformations')
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }
}

function saveJsonFile(data) {
    const os = require('os');
    const storage = require('electron-json-storage');

    storage.setDataPath(os.tmpdir());
}

export default new Vuex.Store({
    state: {
        storedata: loadData(),
        axiosdata: {
            clientinformations: []
        }

    },

    getters: {
        getClientInformations: (state) => {
            return state.axiosdata.clientinformations;
        }
    },

    actions: {
        loadClientInformations: ({commit}) => {
            axios.get( '/api/clientinformations.json' )
                 .then( response => {
                    commit('LOAD_CLIENT_INFO', response.data)
                 })
        },

        addClientInformations: (context, client) => {
            context.commit("ADD_CLIENT_INFO", client);
        },

        deleteClientInformations: (context, index) => {
            context.commit("DELETE_CLIENT_INFO", index);
        },

        updateGlobalClientId: (context, index) => {
            context.commit("UPDATE_GLOBAL_CLIENT_ID", index);
        }
    },

    mutations: {
        LOAD_CLIENT_INFO: (state, client) => {
            if ( window.localStorage.getItem("clients") !== null ) {
                state.axiosdata.clientinformations = JSON.parse( window.localStorage.getItem("clients") );
            } else {
                window.localStorage.setItem( "clients", JSON.stringify( client ) );
                state.axiosdata.clientinformations = client;
            }
        },

        ADD_CLIENT_INFO: (state, client) => {

            state.axiosdata.clientinformations.push( client );
            window.localStorage.setItem( "clients", JSON.stringify( state.axiosdata.clientinformations ) );

            /*USING FS*/
            // var ctr = state.axiosdata.clientinformations.length + 1;
            // var clientdata = JSON.stringify(client, null, ctr);
            // saveData( clientdata );
            /*BLOB*/
            // saveToFile( JSON.stringify( state.axiosdata.clientinformations, '~/vue/pdfform/public/api/' ) );
        },

        DELETE_CLIENT_INFO: (state, index) => {
            state.axiosdata.clientinformations.splice(index, 1);
            window.localStorage.setItem( "clients", JSON.stringify( state.axiosdata.clientinformations ) );
        },

        UPDATE_GLOBAL_CLIENT_ID: (state, index) => {
            state.storedata.global.clientid = index;
        }
    }
})
