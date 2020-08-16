<template>
  <div class="portfolio">
    <h1>{{portfolio.name}}</h1>
    <div></div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    portfolio() {
      return store.portfolios.find(portfolio => portfolio.slug === this.slug);
    }
  }
};
</script>

<style scope>
</style>