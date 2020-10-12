import axios from "axios"

const url = "https://my-json-server.typicode.com/brankostancevic/products/products"



const state = () => ({
	loaded: Boolean,
	active: Boolean,
	all: []
})

const getters = {
	shopProducts: (state) => {
		return state.all
	},
	loaded: (state) => {
		return state.loaded
	},
	active: (state) => {
		return state.active
	}
}

const mutations = {
	setProducts(state, products) {
		state.all = products
	},
	setLoaded(state, value) {
		state.loaded = value
	},
	setActive(state, value) {
		state.active = value
	}
}

const actions = {
	loadProducts({ commit }) {
		axios.get(url)
		.then(result => { 
			commit('setProducts', result.data); commit('setLoaded', true)})
		.catch(error => console.log(error))
	},
	setLoadedFalse({ commit }) {
		commit('setLoaded', false)
	},
	setActiveStatus({ commit }, payload) {
		commit('setActive', payload)
	},
	toggleActiveState({ state,  commit }) {
		commit('setActive', !state.active)
	},
	sortPriceAscending({ state, commit}) {
		let arry = state.all.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
		commit('setProducts', arry)
	},
	sortPriceDescending({ state, commit}) {
		let arry = state.all.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
		commit('setProducts', arry)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}