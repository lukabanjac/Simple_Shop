import axios from "axios"

const url = "https://my-json-server.typicode.com/brankostancevic/products/products"



const state = () => ({
	all: []
})

const getters = {}

const mutations = {
	setProducts(state, products) {
		state.all = products
	}
}

const actions = {
	getAllProducts({ commit }) {
		axios.get(url)
		.then(result => { 
			commit('setProducts', result.data) })
		.catch(error => console.log(error))
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}