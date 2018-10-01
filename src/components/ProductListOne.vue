<template>
  <div class="Grid small-Grid--1of3 product-list-one">
      <div class="Grid-cell">
        <div class="col-one">
            <h2>product list one</h2>
            <ul class="products">
                <li v-for="product in saleProducts">
                    <span class="name">{{product.name}}</span>
                    <span class="price">{{product.price}}</span>
                </li>
            </ul>
            <button @click="reducePrice" type="button" name="button">DownDoot price</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    },
    methods: {
        reducePrice() {
            this.$store.dispatch('reducePrice')
        }
    }

};
</script>
