<template>
  <div class="Grid small-Grid--1of3 product-list-two">
      <div class="Grid-cell">
        <div class="col-one">
            <h2>product list two</h2>
            <ul class="products">
                <li v-for="product in saleProducts">
                    <span class="name">{{product.name}}</span>
                    <span class="price">{{product.price}}</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ProductListTwo",
    computed: {
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    }
};
</script>
