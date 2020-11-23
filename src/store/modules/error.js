const state = () => ({
	error: ''
})

const getters = {
	error: (state) => {
		return state.error
	}
}

const mutations = {
	setError(state, value ) {
		state.error = value
	}
}

const actions = {
	setError({ commit }, payload) {
		commit('setError', payload)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}