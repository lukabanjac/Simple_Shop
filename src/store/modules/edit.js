import axios from "axios"

const url = "https://my-json-server.typicode.com/brankostancevic/products/db"



const state = () => ({
	editingProduct: {
		id: 0,
		title: '',
		description: '',
		image: '',
		price: ''
	},
	loaded: Boolean,
})

const getters = {
	productToEdit: (state) => {
		return state.editingProduct
	},
	loaded: (state) => {
		return state.loaded
	}
}

const mutations = {
	setProduct(state, product) {
		state.editingProduct = {
			id: product.id,
			title: product.title,
			description: product.description,
			image: product.image,
			price: product.price
		}
	},
	setLoaded(state, value) {
		state.loaded = value
	}
}

const actions = {
	setEditProduct({ commit }, payload) {
		commit('setProduct', payload)
	},
	setLoaded({ commit }, value) {
		commit('setLoaded', value)
	},
	submitEdit({ state, commit}, payload) {
		const editedProduct = payload
		axios.patch(url, editedProduct)
		.then(result => { console.log(result); console.log(state.editingProduct)} )
		.catch((error) =>  { commit('setStatus', error.response.status)} )
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}