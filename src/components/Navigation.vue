<template>
	<div>
		<b-navbar class="mb-4" toggleable="lg" style="box-shadow: 0px 5px 10px grey">
			<b-navbar-brand href="/">
				<img src="../assets/logo_test.png" alt="Logo" style="max-height: 50px; image-rendering: crisp-edges;">
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>

			<b-navbar-nav class="ml-auto">
				<b-nav-item>
					<b-button pill variant="outline-primary" to="/about">
						About						
					</b-button>
				</b-nav-item>

				<b-nav-item-dropdown variant="dropdo" class="ml-5" right>
					<!-- Using 'button-content' slot -->
					<template v-slot:button-content>
							<b-button pill variant="primary">
								<b-icon icon="cart4" font-scale="2.2" aria-hidden="true"></b-icon>
															
							</b-button>
					</template>
					<b-dropdown-item href="#">Product</b-dropdown-item>
				</b-nav-item-dropdown>

			</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "Navigation"
}
</script>

<style scoped>
	.navbar {
		background-color: white;
	}
</style>