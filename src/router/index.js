import Vue from 'vue'
import Router from 'vue-router'

import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Edit from '../views/Edit.vue'
import New from '../views/New.vue'

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
	},
	{
		path: '/edit/:id',
		name: 'edit',
		component: Edit,
	},
	{
		path: '/new',
		name: 'new',
		component: New,
	}
]

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})