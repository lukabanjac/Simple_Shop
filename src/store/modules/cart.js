const state = () => ({
		items: []
	})

const getters = {
	cartProducts: (state, getters, rootstate) => {
		return state.items.map(({ id, quantity }) => {
			const product = rootstate.products.all.find(product => product.id === id)
			return {
				id: product.id,
				title: product.title,
				description: product.description,
				image: product.image,
				price: product.price,
				quantity
			}
		})
	},
	cartNumberOfProducts: (state, getters) => {
		let reducer = (quantity, product) => { return quantity + product.quantity }
		return getters.cartProducts.reduce(reducer, 0)
	},
	
	cartTotalPrice: (state, getters) => {
		let reducer = (total, product) => { return total + product.price * product.quantity }
		return getters.cartProducts.reduce(reducer, 0) 
	}
}

const mutations = {
	prushProductToCart(state, { id }) {
		state.items.push({
			id,
			quantity: 1
		})
	},

	deleteItem(state, payload) {
		let index = 0
		index = state.items.indexOf(payload)
		state.items.splice(index, 1)
	},

	incrementItemQuantity(state, { id }) {
		const cartItem = state.items.find(item => item.id === id)
		cartItem.quantity++
	},

	decrementItemQuantity(state, { id }) {
		const cartItem = state.items.find(item => item.id === id)
		cartItem.quantity--
	},

	setCartItems(state, { items }) {
		state.items = items
	}
}

const actions = {
	addProductToCart ({ state, commit }, product) {
		const cartItem = state.items.find(item => item.id === product.id)

		if (!cartItem) {
			commit('prushProductToCart', { id: product.id })
		} else {
			commit('incrementItemQuantity', cartItem)
		}
		
	},
	removeItem({ commit }, payload) {
		commit('deleteItem', payload)
	},
	incrementItem({ commit }, payload) {
		commit('incrementItemQuantity', payload)
	},
	decrementItem({ commit }, payload) {
		commit('decrementItemQuantity', payload)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}