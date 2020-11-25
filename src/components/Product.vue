<template>
	<b-card
		:title="product.title"
		:img-src="product.image"
		img-top
		sub-title-text-variant="muted"
		tag="article"
		align="left"
		class="mb-4">

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
</template>

<script>
export default {
	name: "Product",
	props: {
		product: {
			title: String,
			description: String,
			price: Number,
			image: String
		},
		deleteProduct: Function
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