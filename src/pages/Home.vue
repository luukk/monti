<template>
  <div class="Grid small-Grid--1of3">
      <div class="Grid-cell">
        <div class="col-one">
            <product-list-one></product-list-one>
            <product-list-two></product-list-two>
        </div>
    </div>
</div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne'
import ProductListTwo from '@/components/ProductListTwo'

export default {
    name: "Home",
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    }
};
</script>
