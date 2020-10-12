<template>
	<div id="shop" v-if="loaded">
		<Products/>
	</div>
	<div v-else>
		<b-spinner class="spn" variant="primary" type="grow" label="Loading..."></b-spinner>
	</div>
</template>

<script>
import Products from "../components/Products.vue"
import { mapGetters } from 'vuex'


export default {
	name: 'Shop',
	components: {
		Products 
	},
	computed:
		mapGetters('products', {
			loaded: 'loaded'
		})
	}
	
</script>

<style scoped>
	#shop {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: gainsboro;
	}
	.spn {
		width: 120px;
		height: 120px;
		margin-top: 10%;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
