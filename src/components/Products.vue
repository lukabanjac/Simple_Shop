<template>
	<div>
		<b-card-group class="p-3" columns>
			<div v-bind:key="product.id" v-for="product in products">
				<b-card
					:title="product.title"
					:img-src="product.image"
					img-top
					sub-title-text-variant="muted"
					tag="article"
					align="left"
					class="mb-5"
					
				>
					<b-card-sub-title>
						${{ product.price }}
					</b-card-sub-title>

					<b-card-text class="mt-4">
						{{ product.description }}
					</b-card-text>

					<b-button class="d-flex p-2" href="#" variant="outline-primary">
							<b-icon icon="cart-plus" class="mr-2" font-scale="1.5" aria-hidden="true"></b-icon>
							Add to cart
					</b-button>

				</b-card>
			</div>
		</b-card-group>
	</div>

</template>

<script>
export default {
	name: "Products",
	props: {
		products: Array
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

	.btn {
		justify-content: center;
		font-weight: bolder;
	}


</style>