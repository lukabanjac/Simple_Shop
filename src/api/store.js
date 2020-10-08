import axios from "axios"

const url = "https://my-json-server.typicode.com/brankostancevic/products/products"


export default {
	getProducts() {
		let products = []
		axios.get(url)
		.then(result => { 
			products = result.data})
		.catch(error => console.log(error))
		return products
	}
}