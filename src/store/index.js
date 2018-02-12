import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [
            { name: "banana", price: 20 },
            { name: "apple", price: 76 },
            { name: "mandarin", price: 33 },
            { name: "lemon", price: 60 },
            { name: "apricot", price: 25 }
        ]
    },
    getters: {
        saleProducts: state => {
            return state.products.map(product => {
                return {
                    name: `**
                    ${product.name} **`,
                    price: product.price / 2
                };
            });
        }
    },
    mutations: {
        reducePrice: state => {
            return state.products.forEach(product => {
                product.price -= 1;
            });
        }
    },
    actions: {
        reducePrice: context => {
            setTimeout(() => {
                context.commit("reducePrice");
            }, 2000);
        }
    }
});

export default store;
