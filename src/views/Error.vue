<template>
	<div>
		<h1 class="error-text mt-5">{{code}}</h1>
		<img class="sad-face" src="../assets/sad-face.png" fluid alt="Sad face">
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'error',
	computed: {
		...mapGetters('error', {
			code: 'error',
		})
	}
	
}
</script>

<style scoped>
	.error-text {
		color: #5C5B5F !important;
	}

	.sad-face {
		max-height: 101px;
	}
</style>