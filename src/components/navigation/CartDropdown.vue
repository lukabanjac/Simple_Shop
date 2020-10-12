<template>
	<b-nav-item-dropdown variant="dropdo" class="ml-5" right>
		<template v-slot:button-content>
				<b-button pill variant="primary">
					<b-icon icon="cart4" aria-hidden="true"></b-icon>
					<b-badge  class="ml-2" v-if="badge_products_quantity !== 0" variant="light">{{ badge_products_quantity }}</b-badge>
				</b-button>
		</template>
		
		<b-list-group>

			<template>
				<div>
					<b-table small :fields="table_fields" :items="products" responsive="md"  thead-class="d-none">
						<template v-slot:cell(image)="data">
							<b-container fluid="sm" >
								<b-img class="dropdown-image" :src="data.item.image" alt="Fluid image"></b-img>
							</b-container>
						</template>


						<template v-slot:cell(title)="data">
							<div class="dropdown-title">
								{{data.item.title}}
							</div>
						</template>

						<template v-slot:cell(price)="data">
							<div class="dropdown-info">
								${{data.item.price}}
							</div>
						</template>

						<template v-slot:cell(quantity)="data">
							<div class="dropdown-info">
								×{{data.item.quantity}}
							</div>
						</template>
					</b-table>
				</div>
			</template>
		</b-list-group>

		
		<b-dropdown-item>
			<b-button variant="primary" to="/cart">
				Go to checkout
				<b-icon icon="arrow-right-circle-fill" aria-hidden="true"></b-icon>
			</b-button>
		</b-dropdown-item>
	</b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: "CartDropdown",
	computed: {
		...mapGetters('cart', {
			products: 'cartProducts',
			badge_products_quantity: 'cartNumberOfProducts'
		})
	},
	methods: {
		buttonTest(id) {
			console.log(id)
		}
	},
	data() {
		return {
			table_fields: [
				'image',
				'title',
				'price',
				'quantity'
			]
		}
	}

}
</script>

<style scoped>
	.dropdown-image {
		min-width: 80px !important;
		max-width: 90%;
	}

	.dropdown-title {
		color: black;
		min-width: 100px !important;
	}

	.dropdown-info {
		color: gray !important;
	}

	.table {
		max-width: 250px;
	}

</style>