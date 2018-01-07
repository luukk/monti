<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="incrementTotal">click me!</button>
    <span>total clicks:</span>{{counter}}
</div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            counter: 0
        };
    },

    methods: {
        incrementTotal() {
            this.counter += 1;
            this.$emit("increment"); 
        }
    }
};
</script>
