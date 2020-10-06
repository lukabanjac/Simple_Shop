<template>
	<div id="shop">
		<Products v-bind:products="products"/>
	</div>

</template>

<script>
import axios from "axios"

import Products from "../components/Products.vue"


export default {
	name: 'Shop',
	components: {
		Products 
	},
	data() {
		return {
			products: []
		}
	},
	created() {
		// returns a Promise, zato mora then, catch za greske
		axios.get("https://my-json-server.typicode.com/brankostancevic/products/products")
		.then(result => this.products = result.data )
		.catch(error => console.log(error))

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
