<template>
	<b-overlay :opacity="0.3" spinner-type="none" class="pt-4" :show="isActive">
		<b-card-group deck v-bind:key="row.id" v-for="row in formattedRows">
				<b-card v-bind:key="product.id" v-for="product in row"
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

				</b-card>
		</b-card-group>
	</b-overlay>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
			...mapActions(
				{ toggleActiveState: 'products/toggleActiveState'}
			)
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
		box-shadow: 0px 5px 10px grey
	}

	.card-subtitle {
		font-size: 25px;
		font-weight: bolder;
	}

	.btn-primary {
		background-color: #B64D8F !important;
		border-color: #B64D8F !important;
	}

</style>