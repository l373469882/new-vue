import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carData: [],
        initData: []
    },
    mutations: {
        ADD_CAR_DATA(state, obj) {
            let result = state.carData.find(item => item.id === obj.id);
            if (result) {
                result.count++;
            } else {
                state.carData.push({
                    ...obj,
                    count: 1
                })
            }
            console.log(state.carData)
        },
        INIT_DATA(state, arr) {
            state.initData = arr
        },
        REDUCE_CAR_DATA(state, id) {
            let result = state.carData.find(item => item.id === id);
            if (result.count > 1) {
                result.count--;
            } else {
                if (window.confirm('确定要删除吗？')) {
                    state.carData = state.carData.filter(item => item.id != id)
                }
            }
        }
    },
    actions: {
        GET_INIT_DATA(context, arr) {
            context.commit('INIT_DATA', arr)
        }
    },
    modules: {},
    getters: {
        count(state) {
            return state.carData.reduce((p, n) => {
                return p + n.count
            }, 0)
        },
        price(state) {
            return state.carData.reduce((p, n) => {
                return n.checked ? p + n.count * n.price : p
            }, 0)
        }
    }
})