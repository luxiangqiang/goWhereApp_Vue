import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ----------------------------------一、 Vuex 一些需要遵守的规则 -----------------------------

/* 
 1、应用层级的状态应该集中到单个 store 对象中。

 2、提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。

 3、异步逻辑都应该封装到 action 里面。
*/

// -------------------------------------- 二、 Vuex 的目录结构 ----------------------------------
// ├── index.html
// ├── main.js
// ├── api
// │   └── ... # 抽取出API请求
// ├── components
// │   ├── App.vue
// │   └── ...
// └── store
//     ├── index.js          # 我们组装模块并导出 store 的地方
//     ├── actions.js        # 根级别的 action
//     ├── mutations.js      # 根级别的 mutation
//     └── modules
//         ├── cart.js       # 购物车模块
//         └── products.js   # 产品模块

export default new Vuex.Store({
    state: {
       city: '上海'
    },
    actions: {
        // 参数一：上下文 参数二：传递的参数
        changeCity(context, city) {
            context.commit('changeCity',city)
        }
    },
    mutations: {
        // 参数一：state 对象 参数二：传递的参数
        changeCity(state, city) {
            state.city = city
        }
    }
})
