import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        userAddress: {
            address: '',
            coords: []
        },
        showMap: false,
        dealers: {
            konkovo: {
                coords: [55.6335, 37.5184],
                name: 'Коньковское Бревно',
                goods: {
                    birch: 1700
                },
                delivery: {
                    minPrice: 1000,
                    increaseRange: 10,
                    pricePerKm: 70
                }
            },
            tstan: {
                coords: [55.6199, 37.5066],
                name: 'Чурки в огне',
                goods: {
                    birch: 1800
                },
                delivery: {
                    minPrice: 700,
                    increaseRange: 10,
                    pricePerKm: 50
                }
            }
        }
    },
    mutations: {
        setUserAddress (state, payload) {
            state.userAddress = payload
        },
        toggleMap (state) {
            state.showMap = !state.showMap
        }
    }
})

export default store