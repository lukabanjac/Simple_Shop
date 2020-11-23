<template>
	<div class="mt-4 mx-5 text-left">
		<b-form @submit="onSubmit" @reset="onReset">
			<b-form-group
				id="input-group-1"
				label="Product title:"
				label-for="input-1"
				size="lg"
				>
				<b-form-input
					id="input-1"
					v-model="form.title"
					required
					placeholder="Enter product title..."
					style="font-weight: bold"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2" label="Product description:" label-for="input-2">
				<b-form-textarea
				id="textarea"
				v-model="form.description"
				placeholder="Enter description..."
				rows="3"
				max-rows="6"
				></b-form-textarea>

			</b-form-group>

			<b-form-group id="input-group-3" label="Price:" label-for="input-3">
				<b-input-group size="lg" prepend="$">
					<b-form-input
						id="input-3"
						v-model="form.price"
						type="number"
						required
					></b-form-input>
				</b-input-group>
			</b-form-group>

			<b-form-group id="input-group-4">
				Product image:
				<b-form-input
				id="input-4"
				v-model="form.image"
				type="url"
				required
				placeholder="Image URL"
				>
				</b-form-input>
				<div>
				</div>
			</b-form-group>
			
			<div class="bottom-element">
				<b-img v-if="form.image" :src="form.image" thumbnail fluid alt="Product image"></b-img>
				<b-img v-else src="../assets/images.png" thumbnail fluid alt="Product image"></b-img>
				<div class="mb-3 ml-3 fixed-bottom submit-reset">
					<b-button type="submit" variant="primary">Submit</b-button>
					<b-button type="reset" variant="danger" class="ml-4">Reset</b-button>
				</div>
			</div>
		</b-form>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Edit',
	data() {
		return {
			form: {
				title: '',
				description: '',
				price: '',
				image: ''
			}
		}
	},
	computed: {
		...mapGetters('edit', {
			product: 'productToEdit',
			status: 'status'
		}),
		statusChange() {
			return this.status
		}
	},
	methods: {
		onSubmit(evt) {
			evt.preventDefault()
			this.$store.dispatch("edit/submitEdit", JSON.stringify(this.form))
			.then(() => { 
				this.$store.dispatch("products/updateProduct", this.form)
			})
			.catch(() => {
				console.warn("Error happend")
			})

		},
		onReset(evt) {
			evt.preventDefault()
			this.form.id = this.product.id
			this.form.title = this.product.title
			this.form.description = this.product.description
			this.form.price = this.product.price
			this.form.image = this.product.image
		}
	},
	mounted() {
		this.form.id = this.product.id
		this.form.title = this.product.title
		this.form.description = this.product.description
		this.form.price = this.product.price
		this.form.image = this.product.image
	},
	watch: {
		statusChange (newStatus, oldStatus) {
			if (newStatus && !oldStatus) {
				this.$store.dispatch("error/setError", newStatus)
				this.$router.push('error')
				this.$store.dispatch("edit/resetStatus")
			}
		}
	}
}
</script>

<style scoped>
	.bottom-element {
		align-content: space-between;
	}

	.img-thumbnail {
		max-height: 200px;
		object-fit: cover;
	}

	.submit-reset {
		background: white;
	}

	.fixed-bottom {
		background-color: rgba(255, 255, 255, 0.3);
	}
</style>