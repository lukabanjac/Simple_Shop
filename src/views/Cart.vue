<template>
	<div class="mt-5">

		<b-container class="bv-example-row" >
			<b-row class="product-row mb-2 pb-2" v-bind:key="product.id" v-for="product in products">
				<b-col><b-img rounded style="max-width: 100px" :src="product.image" alt=""></b-img></b-col>
				<b-col>
					<div class="product-title">{{product.title}} -   ×{{product.quantity}}</div>
					<div class="product-description">{{product.description}}</div>	
				</b-col>
				<b-col>
					<div class="product-price">${{product.price}}</div>	
					<div class="product-remove">
						
							<b-button-group class="mr-3" size="sm">
								<b-button variant="info"  @click="incrementItem(product)">+</b-button>
								<b-button variant="warning" :disabled="product.quantity <= 1" @click="decrementItem(product)">-</b-button>
							</b-button-group>
						<b-button size="sm" variant="outline-danger" @click="removeItem(product)">Remove</b-button></div>	
				</b-col>
			</b-row>
			
			<b-row>
				<b-col class="total-text">
					Total:
				</b-col>


				<b-col class="total-price">
					${{ total }}
				</b-col>
			</b-row>
		</b-container>
	</div>	
</template>


<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
	name: "Cart",
	computed: {
		...mapState({
			checkoutStatus: state => state.cart.checkoutStatus
		}),
		...mapGetters('cart', {
			products: 'cartProducts',
			total: 'cartTotalPrice'
		})
	},
	methods: {
		...mapActions({
			removeItem: 'cart/removeItem',
			incrementItem: 'cart/incrementItem',
			decrementItem: 'cart/decrementItem'
		})
	}
}
</script>


<style scoped>

	.product-row {
		border-bottom: 1px solid lightgray;
	}

	.product-title {
		text-align: left;
	}


	.product-description {
		color: gray;
		font-size: 13px;
		text-align: left;
	}

	.product-price {
		font-weight: bold;
		font-size: 25px;
		text-align: right;
	}

	.product-remove {
		text-align: right;
	}



	.total-text {
		font-size: 40px;
		font-weight: bold;
		text-align: left;
	}

	.total-price {
		font-size: 40px;
		font-weight: bold;
		text-align: right;
		color: #2e377e;
		text-shadow: 5px 2px 2px lightgray;
	}


	
</style>