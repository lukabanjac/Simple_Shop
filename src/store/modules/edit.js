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
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}