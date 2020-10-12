<template>
  <div id="app">
		<Navigation />
		<router-view/>
	</div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
	name: 'App',
	components: {
		Navigation
	},
	created() {
		this.$store.dispatch("products/setLoadedFalse")
		this.$store.dispatch("products/setActiveStatus", false)
		this.$store.dispatch("products/loadProducts")
	}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.btn-primary {
		background-color: #2e377e !important;
		border-color: #2e377e !important;
	}
</style>
