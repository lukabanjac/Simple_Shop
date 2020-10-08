import Vue from 'vue'
import Router from 'vue-router'

import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'

Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: '/shop'
	},
	{
		path: '/shop',
		name: 'shop',
		component: Shop
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	}
]

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})