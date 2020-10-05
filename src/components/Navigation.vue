<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="primary">
			<b-navbar-brand href="#">
				<img src="../assets/logo.png" alt="Logo" style="max-height: 50px; image-rendering: crisp-edges;">
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>

			<b-navbar-nav class="ml-auto">

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
