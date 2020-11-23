<template>
	<div id="shop" v-if="loaded">
		<div class="pt-3">
			<b-icon icon="search" class="mr-2 mb-1" font-scale=".99" aria-hidden="true"></b-icon>
			<input v-model="search" placeholder="Search" @input="debounceInput" class="mb-2">

			<b-button-group class="ml-5" style="background: white">
				<b-button variant="secondary">Price:</b-button>
				<b-button variant="outline-secondary" @click="priceLowest()">Lowest first</b-button>
				<b-button variant="outline-secondary" @click="priceHighest()">Highest first</b-button>
			</b-button-group>	
		</div>
		<div class="products-group">
			<Products/>
		</div>
	</div>
	<div v-else>
		<b-spinner class="spn" variant="primary" type="grow" label="Loading..."></b-spinner>
	</div>
</template>

<script>
import Products from "../components/Products.vue"
import { debounce } from "debounce";
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'


export default {
	name: 'Shop',
	data () {
		return {
			search: ''
		}
	},
	components: {
		Products 
	},
	computed:
		mapGetters('products', {
			loaded: 'loaded'
		}),
	methods: {
		...mapActions({
			priceHighest: 'products/sortPriceDescending',
			priceLowest: 'products/sortPriceAscending',
		}),
		debounceInput: debounce(function(e) {
			if (this.search) {
				this.$store.dispatch("products/search", e.target.value)
			} else {
				this.$store.dispatch("products/setToAll")
			}
			}, 500)	
	},
	updated() {
		this.$store.dispatch("products/setToAll")
	}
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
	
	.products-group {
		margin-left: auto;
		margin-right: auto;
	}
</style>
