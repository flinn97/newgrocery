<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
<div class="image">
        <img :src="'/images/products/'+product.image">
      </div>      
<div>
<div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
</div>
      <div class="price">
        <h2>Cost: {{product.price}}</h2>
</div>
<div class='button'>
        <button @click = "remove(product)" class="auto">Remove</button>
	</div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Carts',
  props: {
    products: Array
  },

  data() {
		return {
				index: '',
}},

  methods: {

      remove(product){
		this.index = this.$root.$data.cart.indexOf(product);
              return this.$root.$data.cart.splice((this.index), 1);
	},
}
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}

.products {
  margin-top: 20px;
  display: flex;
  /*flex-wrap: wrap;*/
  justify-content: space-around;
  flex-direction: column;
}

.product {
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 50px;
  display: flex;
  width: 575px;
  align-items: start;
  border-bottom: solid 1px black;
}
.button {
	padding-top: 45px;
	padding-left: 300px;
}
.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>

