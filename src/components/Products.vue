<template>
	<b-overlay :opacity="0.3" spinner-type="none" class="pt-4" :show="isActive" >
		<b-container fluid='md'>
			<b-row v-bind:key="row.id" v-for="row in formattedRows">
				<b-col v-bind:key="product.id" v-for="product in row" class="col-md-4">
						<Product v-bind:product="product" v-bind:deleteProduct="deleteProduct"/>
				</b-col>
			</b-row>
			<div class="fixed-bottom">
				<b-toast id="deletion-toast" class="fixed-bottom" title="Error" variant="danger" static no-auto-hide>
					Oops, we had some problems deleting product!
				</b-toast>

				<b-toast id="edit-toast" class="fixed-bottom" title="Error" variant="danger" static no-auto-hide>
					Oops, we had some problems finding that product you want to edit!
				</b-toast>
			</div>
		</b-container>
	</b-overlay>

</template>

<script>
import Product from './Product.vue'
import { mapGetters, mapActions } from 'vuex'
import axios from "axios"

const url = "https://my-json-server.typicode.com/brankostancevic/products/products"


export default {
	name: "Products",
	components: {
		Product
	},
	computed: {
		...mapGetters('products', {
			products: 'shopProducts',
			isActive: 'active',
			searchText: 'searchText'

		}),
		formattedRows() {
			return this.products.reduce((c, n, i) => {
				if (i % 3 === 0) c.push([]);
				c[c.length - 1].push(n);
				return c;
			}, []);
		}
	},
	methods: {
			...mapActions(
				{ addProductToCart: 'cart/addProductToCart' }
			),
			...mapActions({ 
					toggleActiveState: 'products/toggleActiveState'}
			),
			editProduct(product) {
				axios.get(url + '/' + product.id)
				.then(result => { 
					this.$store.dispatch('edit/setEditProduct', result.data.id); this.$router.push('/edit/' + result.data.id)})// ? kako da drugacije dodam da ne stavljam +
				.catch(error => { console.log(error); this.$bvToast.show('edit-toast') })
			},
			deleteProduct(product) {
				axios.delete(url + '/' + product.id)
				.then(() => { 
					this.$store.dispatch('products/deleteProduct', product) })// ? kako da drugacije dodam da ne stavljam +
				.catch((error) => { console.log(error); this.$bvToast.show('deletion-toast') })
			}
	},
	mounted() {
		this.$root.$on('bv::dropdown::show', () => {
			this.toggleActiveState()
		});
		this.$root.$on('bv::dropdown::hide', () => {
			this.toggleActiveState()
		});
  }
}
</script>


<style scoped>

	.fixed-bottom {
		top: 0;
		margin-left: 20px;
		position: sticky;
	}

</style>