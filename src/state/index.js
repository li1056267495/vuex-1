import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//创建状态仓库
export default new Vuex.Store({
    state: {
        num: 888
    },
    mutations: {
        addNum(state) {
            state.num += 100
        },
        minNum(state) {
            state.num -= 100
        }
    },
    actions: {
        //context为上下文对象
        actDeNum(context) {
            //只能对minNum操作
            context.commit('minNum')
        },
    },
    getters: {
        gNum(state) {
            return state.num > 0 ? state.num : 0
        }
    }
})