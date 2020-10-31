<template>
<div>
<h1> {{message}} </h1>
<div>
	<Carts :products="products" />
</div>
</div>
</template>

<script>
import Carts from "../components/Carts.vue"
export default {
  name: 'Cart',
  components: {
    Carts
  },
  data() {
    return {
    }
  },
  computed: {
    products() {
      return this.$root.$data.cart;
    },
  message(){
	if (this.$root.$data.cart.length === 0)
		return "You have no Items for Checkout";
	else
		return "Your Items:";

  },
}
}
</script>

