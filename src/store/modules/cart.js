
const state = () => ({
		items: [],
		checkoutStatus: null
	})

const getters = {
	cartProducts: (state, getters, rootstate) => {
		return state.items.map(({ id, quantity }) => {
			const product = rootstate.products.all.find(product => product.id === id)
			return {
				title: product.title,
				price: product.price,
				quantity
			}
		})
	},
	cartTotalPrice: (state, getters) => {
		let reducer = (total, product) => { return total + product.price * product.quantity}
		return getters.cartProducts.reduce(reducer, 0) // reduce() zove reducer funkciju nad svakim elementom liste i izbacuje jednu vrijednost (zadnji parametar je pocetna vrijednost)
	}
}

const mutations = {
	prushProductToCart(state, { id }) {
		state.items.push({
			id,
			quantity: 1
		})
	},

	incrementItemQuantity(state, { id }) {
		const cartItem = state.items.find(item => item.id === id)
		cartItem.quantity++
	},

	setCheckoutStatus(state, status) {
		state.checkoutStatus = status
	}
}

const actions = {
	addProductToCart ({ state, commit }, product) {
		commit('setCheckoutStatus', null)
		const cartItem = state.items.find(item => item.id === product.id)

		if (!cartItem) {
			commit('prushProductToCart', { id: product.id })
		} else {
			commit('incrementItemQuantity', cartItem)
		}
		
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}


/* mutations: { // syncrous way to update state in pur Vuex store	
		addProductToShoppingCart(state, payload) {
			state.shoppingCart.push(payload)  
		},
		setProducts(state, payload){
			state.products = payload;
		}
	},
	actions: { // asyncronous way
		setProducts(state, payload) {
			let products = []
			console.log(payload)
			axios.get(url)
			.then(result => { 
				products = result.data; 
				state.commit("setProducts", products) 
			})
			.catch(error => console.log(error))
		}
	},
	modules: {}, */