import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        userAddress: ''
    },
    mutations: {
        setUserAddress (state, payload) {
            state.userAddress = payload.address
        }
    }
})

export default store