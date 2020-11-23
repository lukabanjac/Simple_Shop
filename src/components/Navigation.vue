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
					<b-button class="ml-3" variant="success" to="/new">
						New Product						
					</b-button>
				</b-nav-item>

					<!-- <b-dropdown variant="primary" text="Filter" v-show="this.$route.path === '/shop'"> 
						</b-dropdown>
					-->
				
				<CartDropdown />

			</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import CartDropdown from "./navigation/CartDropdown.vue"

export default {
	name: "Navigation",
	components: {
		CartDropdown
	}
}
</script>

<style scoped>
	.navbar {
		background: rgb(46,55,126);
		background: linear-gradient(90deg, rgba(46,55,126,1) 20%, rgba(182,77,143,1) 100%);
	}
</style>