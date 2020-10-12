<template>
	<div>
		<b-navbar toggleable="lg" style="box-shadow: 0px 5px 10px grey">
			<b-navbar-brand to="/">
				<img src="../assets/logo.png" alt="Logo" style="max-height: 50px;">
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>

			

			<b-navbar-nav class="ml-auto">

				<b-nav-item>
					<b-button pill variant="primary" to="/about">
						About						
					</b-button>
				</b-nav-item>

				<b-nav-item>
					<b-dropdown variant="primary" text="Filter" v-show="this.$route.path === '/shop'">
						<b-dropdown-item @click="priceLowest()">Price: lowest first</b-dropdown-item>
						<b-dropdown-item @click="priceHighest()">Price: highest first</b-dropdown-item>
					</b-dropdown>
				</b-nav-item>
				
				<CartDropdown />

			</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import CartDropdown from "./navigation/CartDropdown.vue"
import { mapActions } from 'vuex'

export default {
	name: "Navigation",
	components: {
		CartDropdown
	},
	methods: {
		...mapActions({
			priceHighest: 'products/sortPriceDescending',
			priceLowest: 'products/sortPriceAscending',
		})
	}
}
</script>

<style scoped>
	.navbar {
		background: rgb(46,55,126);
		background: linear-gradient(90deg, rgba(46,55,126,1) 20%, rgba(182,77,143,1) 100%);
	}
</style>