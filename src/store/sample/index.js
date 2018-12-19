import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    namespaced: true,
    state: {
        subtitle: 'MY SUBTITLE',
        typographylist: [
                            {"size" : "giant"},
                            {"size" : "bigger"},
                            {"size" : "big"},
                            {"size" : "larger"},
                            {"size" : "large"},
                            {"size" : "medium"},
                            {"size" : "regular"},
                            {"size" : "small"},
                            {"size" : "smaller"}
                        ]
    },
    getters,
    mutations,
    actions
};