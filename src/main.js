import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock from './mock-data.js'
Vue.config.productionTip = false
let data = {
	products: mock,
	//currentID: 2,
	cart:  [],
//		{
//	id: 1,
//	prod: '',
//	}
//	],//array for the number of items in my cart
	product: '',
	create: false,
//	AddToCart(product){
//		console.log("i got here");
//		this.cart.push(product);
		//	{
		//	id: this.currentID,
		//	prod: product}
		//);
		//this.currentID += 1;
//}
}
new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
