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
	status: ''
})

const getters = {
	productToEdit: (state) => {
		return state.editingProduct
	},
	status: (state) => {
		return state.status
	}
}

const mutations = {
	setProduct(state, product) {
		state.editingProduct.id = product.id
		state.editingProduct.title = product.title
		state.editingProduct.description = product.description
		state.editingProduct.image = product.image
		state.editingProduct.price = product.price
	},
	setStatus(state, value ) {
		state.status = value
	}
}

const actions = {
	setEditProduct({ commit }, payload) {
		//da li je ovo ok? - long story short: dobijem obsever, sa stringify u string i onda opet parsiram json...smrdi mi da ne valja
		const prod = JSON.parse(JSON.stringify(payload)) 
		commit('setProduct', prod)
	},
	resetStatus({ commit }) {
		commit('setStatus', '')
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