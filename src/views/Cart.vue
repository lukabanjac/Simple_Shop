<template>
	<div>
		<b-table-lite striped hover :items="products"></b-table-lite>
		<h1>Total: ${{ total }}</h1>
	</div>	
</template>


<script>
import { mapGetters, mapState } from 'vuex'

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
	}
}
</script>


<style scoped>

</style>