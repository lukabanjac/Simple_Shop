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
	},
	status: (state) => {
		return state.status
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
	},
	addNew(state, payload) {
		console.log(payload)
		state.all.push(payload)
	},
	deleteProduct(state, payload) {
		let index = 0
		index = state.all.indexOf(payload)
		state.all.splice(index, 1)
	},
	updateProduct(state, payload) {
		const item = state.all.find(item => item.id === payload.id)
		item.id =  payload.id,
		item.title = payload.title,
		item.description = payload.description,
		item.price = payload.price,
		item.image = payload.image
	},
	setStatus(state, value) {
		state.status = value
	},
	search(value) {
		// TO DO
		console.log(value)
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
	sortPriceDescending({ state, commit }) {
		let arry = state.all.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
		commit('setProducts', arry)
	},
	addNewProduct({ commit }, payload) {
		commit('addNew', payload)
	},
	deleteProduct({ commit }, payload) {
		commit('deleteProduct', payload)
	},
	updateProduct({ commit }, payload) {
		commit('updateProduct', payload)
	},
	resetStatus({ commit }) {
		commit('setStatus', '')
	},
	search({ commit }, text) {
		commit('search', text)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}