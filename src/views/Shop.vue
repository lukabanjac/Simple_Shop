<template>
	<div id="shop" v-if="loaded">
		<Products/>
	</div>
	<div v-else>
		<b-spinner variant="primary" type="grow" label="Loading..."></b-spinner>
	</div>
</template>

<script>
import Products from "../components/Products.vue"


export default {
	name: 'Shop',
	components: {
		Products 
	},
	data() {
		return {
			loaded: Boolean
		}
	}
	
}
</script>

<style>
#shop {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
