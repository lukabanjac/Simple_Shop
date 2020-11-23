import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import products from './modules/products'
import edit from './modules/edit'
import error from './modules/error'


Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		cart,
		products,
		edit,
		error
	}
});