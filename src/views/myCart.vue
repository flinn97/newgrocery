<template>
<div>
  <div class="wrapper">
    <div class="search">
      <h1>Items</h1>
    </div>
  </div>
<Cart :products="prod"/>
<!-- <Cart :cart="cart" /> -->
</div>
</template>

<script>
import Cart from "../components/Cart.vue"

export default {
  name: 'Cart',
  components: {
    Cart
  },

computed: {
	prod(){
		return this.$root.$data.products;
}
}
// computed: {
//	cart() {
	//	return this.$root.$data.bs;
	//	return this.$root.$data.cart; 
//}
//}
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
