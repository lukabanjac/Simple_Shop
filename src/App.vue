<template>
	<div id="app">
		<Navigation />
		<Products v-bind:products="products"/>
	</div>

</template>

<script>
import Navigation from "./components/Navigation.vue"
import Products from "./components/Products.vue"

export default {
	name: 'App',
	components: {
		Navigation,
		Products
	},
	data() {
		return {
			products: [
				{
					"id": 1,
					"title": "Shop Item 1",
					"price": 55,
					"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					"image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image1.jpg"
				},
				{
					"id": 2,
					"title": "Shop Item 2",
					"price": 18,
					"description": "Ut enim ad minim veniam.",
					"image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image2.jpeg"
				},
				{
					"id": 3,
					"title": "Shop Item 3",
					"price": 820,
					"description": "Aliquip ex ea commodo consequat.",
					"image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image3.jpeg"
				},
				{
					"id": 4,
					"title": "Shop Item 4",
					"price": 536,
					"description": "Exercitation ullamco laboris nisi ut aliquip.",
					"image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image4.jpeg"
				},
				{
					"id": 5,
					"title": "Shop Item 5",
					"price": 88,
					"description": "Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
					"image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image5.jpeg"
				},
				{
					"id": 6,
					"title": "Shop Item 6",
					"price": 43,
					"description": "Pariatur excepteur sint occaecat.",
					"image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image6.jpeg"
				}
				]
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-color:rgba(238, 238, 238, 0.158);
}
</style>
