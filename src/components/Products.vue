<template>
	<b-overlay :opacity="0.3" spinner-type="none" class="pt-4" :show="isActive" >
		<b-container fluid='md'>
			<b-row v-bind:key="row.id" v-for="row in formattedRows">
				<b-col v-bind:key="product.id" v-for="product in row" class="col-md-4">
						<b-card
							:title="product.title"
							:img-src="product.image"
							img-top
							sub-title-text-variant="muted"
							tag="article"
							align="left"
							class="mb-4"
						>
							<b-card-sub-title>
								${{ product.price }}
							</b-card-sub-title>

							<b-card-text class="mb-5">
								{{ product.description }}
							</b-card-text>

							<b-button class="container maxed" variant="primary" @click="addProductToCart(product)">
									<b-icon icon="cart-plus-fill" class="mr-2" font-scale="1.5" aria-hidden="true"></b-icon>
									Add to cart
							</b-button>

							<b-button-group class="corner-buttons">
								<b-button pill variant="light" @click="editProduct(product)">
									<b-icon icon="pencil" font-scale=".99" aria-hidden="true"></b-icon>
								</b-button>
								<b-button pill variant="light" v-b-modal="'modal-' + product.id">
									<b-icon icon="trash" font-scale=".99" aria-hidden="true"></b-icon>
								</b-button>
							</b-button-group>
							<b-modal v-bind:id="'modal-' + product.id" @ok="deleteProduct(product)" title="Confirm deletion">Are you shure you want to delete {{ product.title }}?</b-modal>	
						</b-card>
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
import { mapGetters, mapActions } from 'vuex'
import axios from "axios"

const url = "https://my-json-server.typicode.com/brankostancevic/products/products"


export default {
	name: "Products",
	computed: {
		...mapGetters('products', {
			products: 'shopProducts',
			isActive: 'active'

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

	.card {
		box-shadow: 0px 5px 10px grey;
		max-height: 430px;
	}

	.card-subtitle {
		font-size: 25px;
		font-weight: bolder;
	}

	.card-body {
		position: relative;
		padding: 1.25rem 1.25rem 5.25rem 1.25rem;
	}

	img {
		max-height: 200px;
		object-fit: cover;
	}

	.corner-buttons {
		position: absolute;
		top: 8px;
		right: 16px;
		font-size: 18px;
		background-color: white;
		border: white;
		opacity: 70%;
	}

	
	.fixed-bottom {
		top: 0;
		margin-left: 20px;
		position: sticky;
	}


	.btn-primary {
		background-color: #B64D8F !important;
		border-color: #B64D8F !important;
		position: absolute;
		left: 1.25rem;
		right: 1.25rem;
		bottom: 1.25rem;
		box-sizing: border-box;
		width: calc(100% - 2.5rem)
	}

</style>